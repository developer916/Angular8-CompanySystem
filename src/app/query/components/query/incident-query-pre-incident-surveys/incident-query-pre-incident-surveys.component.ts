import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';


@Component({
  selector: 'app-incident-query-pre-incident-surveys',
  templateUrl: './incident-query-pre-incident-surveys.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryPreIncidentSurveysComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.PreIncidentSurvey';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group( {
      year: '',
      beginDate: '',
      endDate: '',
      unitIDs: '',
      stationId: '',
      shift: '',
      prePlanNumber: '',
      prePlanStage: '',
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/pre-incident-survey-record';
  }
}
