import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormElementContext} from '../../../core/model/form-element-context';
import {concat, of, Subscription, ObjectUnsubscribedError} from 'rxjs';
import {APP_CONFIG} from '../../../app.config';
import {ActivatedRoute} from '@angular/router';
import {HazMatDataBrokerService} from '../../services/hazmat-data-broker.service';
import {UIBuildService} from '../../../core/services/ui-build.service';
import {LookupService} from '../../../core/services/lookup.service';
import {RuleEngineService} from '../../../core/services/rule-engine.service';
import {flatMap} from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';
import {FormStateService} from '../../../core/services/form-state.service';
import { HazMat} from '../../../incident/model/haz-mat'

@Component({
  selector: 'app-hazmat',
  templateUrl: './hazmat.component.html',
  styleUrls: ['./hazmat.component.css']
})
export class HazMatComponent implements OnInit, OnDestroy {

  public static readonly SESSION_NAME = 'Session.OS.HZ';

  readonly workflow: string = 'hazmat';
  formElementContext: FormElementContext;
  init_sub: Subscription;
  readonly session: string = HazMatComponent.SESSION_NAME;

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
              private fss: FormStateService,
              @Inject('HazMatDataBrokerService') public db: HazMatDataBrokerService,
              private ubs: UIBuildService,
              private ols: LookupService,
              private res: RuleEngineService,
              private logger: NGXLogger) {
  }

  ngOnInit() {
    this.init_sub = 
      concat(this.ols.loadLookupData(),
             this.ubs.loadPresentationData(this.session),
             this.loadData())
             //this.loadUIRules()) // lot's of broken rules on hazmat
      .subscribe(
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
    this.logger.debug('Loading Hazmat data for Incident ID: ' + id);

    if (id != null) {
       return this.db.loadHazMat(id);
     } else {
       return of(null);
     }
  }

}
