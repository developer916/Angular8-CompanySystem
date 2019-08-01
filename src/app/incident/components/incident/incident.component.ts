import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Subscription, forkJoin, concat } from 'rxjs';
import { APP_CONFIG } from '../../../app.config';
import { DataBrokerServiceInterface } from '../../../core/model/data-broker-service';
import { FormElementContext } from '../../../core/model/form-element-context';
import { LookupService } from '../../../core/services/lookup.service';
import { RuleEngineService } from '../../../core/services/rule-engine.service';
import { UIBuildService } from '../../../core/services/ui-build.service';
import { IncidentAosDataBrokerService } from 'app/incident/services/incident-aos-data-broker.service';
import { flatMap } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-incident-detail',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit, OnDestroy {

  /**
   * The workflow that this component belongs to
   * @type {string}
   */
  readonly workflow: string = 'incident';

  /**
   * The session context that this component operates within
   * @type {string}
   */
  readonly session: string = 'Session.OS.IM';

  /**
   * The RxJS subcription when we initialize the UI
   * @type {Subscription}
   */
  init_sub: Subscription;

  /**
   * The FormElementContext that is the basic for UI getting built in this component
   */
  formElementContext: FormElementContext;

  private _showPdf = false;


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
              @Inject('DataBrokerService') private db: DataBrokerServiceInterface,
              private ubs: UIBuildService,
              private ols: LookupService,
              private res: RuleEngineService,
              private logger: NGXLogger) {
    if ( 'pdf' === this.route.snapshot.queryParams.view ) {
      this._showPdf = true;
    }
  }

  /**
   * Initializes the UI - loading Lookups, UI defs, and rules - then populates the UI with incident data
   */
  ngOnInit() {
    this.init_sub = this.loadData().pipe(
      flatMap(incident => {
        if (incident != null && this.incidentOpen()) {       // If the incident is closed, we don't need to load the UI
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
        if (this.incidentOpen()) {
          this.formElementContext = this.ubs.getUIDefinition(this.session);
        }
      }
    );
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

  /**
   * Whether or not the incident we are trying to load is open (return TRUE) or closed (return FALSE). If the
   * data broker has not yet loaded the incident (i.e. activeIncidentEntity == null) we assume it is open.
   */
  incidentOpen() {
    const db = (this.db as IncidentAosDataBrokerService);
    return db.activeIncidentEntity == null || !db.isIncidentClosed();
  }

  showPdf(): boolean {
    return this._showPdf;
  }

  /**
   * Cleanup subscriptions when we're done so we don't have memory leaks
   */
  ngOnDestroy() {
    if (this.init_sub != null) {
      this.init_sub.unsubscribe();
    }
  }
}
