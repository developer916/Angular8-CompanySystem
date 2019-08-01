import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormElementContext} from '../../../core/model/form-element-context';
import {concat, of, Subscription} from 'rxjs';
import {APP_CONFIG} from '../../../app.config';
import {ActivatedRoute} from '@angular/router';
import {DataBrokerServiceInterface} from '../../../core/model/data-broker-service';
import {UIBuildService} from '../../../core/services/ui-build.service';
import {LookupService} from '../../../core/services/lookup.service';
import {RuleEngineService} from '../../../core/services/rule-engine.service';
import {flatMap} from 'rxjs/operators';
import {ReviewDataBrokerService} from '../../services/review-data-broker.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-incident-review',
  templateUrl: './incident-review.component.html',
  styleUrls: ['./incident-review.component.css']
})
export class IncidentReviewComponent implements OnInit, OnDestroy {

  readonly workflow: string = 'incident-review';
  formElementContext: FormElementContext;
  init_sub: Subscription;
  readonly session: string = 'Session.OS.RV';


  /**
   * Constructor
   *
   * @param config InjectionToken that provides global app configuration
   * @param route ActivatedRoute - what route is currently active
   * @param db DataBrokerService - Data broker that is used to load incident data
   * @param ubs UIBuildService - Provides/Builds UI components for us
   * @param ols LookupService - Gives us Lookup data for dropdowns/selects
   * @param res RuleEngineService - Service that controls business rule evaluations
   */
  constructor(@Inject(APP_CONFIG) private config,
              private route: ActivatedRoute,
              @Inject('ReviewDataBrokerService') private db: ReviewDataBrokerService,
              private ubs: UIBuildService,
              private ols: LookupService,
              private res: RuleEngineService,
              private logger: NGXLogger) {
  }

  /**
   * Initializes the UI - loading Lookups, UI defs, and rules - then populates the UI with incident data
   */
  ngOnInit() {
    this.init_sub = this.loadData().pipe(
      flatMap(incident => {
        if (incident != null ) {       // If the incident is closed, we don't need to load the UI
          return concat(this.ols.loadLookupData(),
            this.ubs.loadPresentationData(this.session),
            this.loadUIRules().pipe(
              flatMap(() => this.db.loadIncidentResources(of(incident)))
            ));
        } else {
          return of(incident);
        }
      })
    ).subscribe(
      null,
      error => {
        this.logger.error('Error loading Presentation or Rule JSON data: ' + error);
      },
      () => {
          this.formElementContext = this.ubs.getUIDefinition(this.session);
      }
    );
  }

  ngOnDestroy() {
    if (this.init_sub != null) {
      this.init_sub.unsubscribe();
    }
  }

  private loadUIRules() {
    if (this.res.getRuleSet(this.workflow) == null) {
      return this.res.initializeRuleEngine();
    } else {
      return of(this.res.getRuleSet(this.workflow));
    }
  }

  /**
   * Loads the incident data - grabbing the incident ID from the URL
   */
  private loadData() {
    const id = this.route.snapshot.params.id;
    this.logger.debug('Loading data for incident ID: ' + id);

    if (id != null) {
      return this.db.loadIncident(id);
    } else {
      return of(null);
    }
  }



}
