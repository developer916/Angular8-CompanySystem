import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormElementContext } from '../../../core/model/form-element-context';
import { concat, of, Subscription } from 'rxjs';
import {APP_CONFIG} from '../../../app.config';
import {ActivatedRoute} from '@angular/router';
import {LookupService} from '../../../core/services/lookup.service';
import {IncidentTab} from '../../../incident/components/incident-tab/incident-tab';
import {UIBuildService} from '../../../core/services/ui-build.service';
import {HazMatDataBrokerService} from '../../services/hazmat-data-broker.service';
import {HazMatModule} from '../../hazmat.module';
import {flatMap} from 'rxjs/operators';
import { FormStateService } from '../../../core/services/form-state.service';
import { RuleEngineService } from 'app/core/services/rule-engine.service';
import { NGXLogger } from 'ngx-logger'

@Component({
  selector: 'app-hazmat-report',
  templateUrl: './hazmat-report.component.html'
})
export class HazmatReportComponent extends IncidentTab {
  public static readonly SESSION_NAME: string = 'Session.OS.HZ.HazmatReport';
  
  readonly workflow: string = 'hazmat-report';
  formElementContext: FormElementContext;
  init_sub: Subscription;
  readonly session: string = HazmatReportComponent.SESSION_NAME;

  constructor(@Inject(APP_CONFIG) private config,
              private route: ActivatedRoute,
              private fss: FormStateService,
              @Inject('HazMatDataBrokerService') private db: HazMatDataBrokerService,
              ubs: UIBuildService,
              private ols: LookupService,
              private res: RuleEngineService,
              private logger: NGXLogger) {
    super(ubs, HazmatReportComponent.SESSION_NAME);
  }

}
