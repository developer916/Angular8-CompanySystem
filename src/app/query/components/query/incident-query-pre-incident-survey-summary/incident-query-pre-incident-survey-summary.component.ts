import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-pre-incident-survey-summary',
  templateUrl: './incident-query-pre-incident-survey-summary.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryPreIncidentSurveySummaryComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.PreIncidentSurveySummary';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      year: '',
      beginDate: '',
      endDate: '',
      unitIDs: '',
      stationId: '',
      shift: '',
      prePlanNumber: '',
      prePlanStage: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/pre-incident-survey-summary';
  }
}
