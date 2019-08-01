import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-training-continuing-education',
  templateUrl: './incident-query-training-continuing-education.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryTrainingContinuingEducationComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.TrainingContinuingEducation';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group ({
      month: '',
      previousMonth: '',
      nextMonth: '',
      year: '',
      beginDate: '',
      singleDay: '',
      endDate: '',
      lastXDays: '',
      personnelId: '',
      drill: '',
      rowCount: '',
      status: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/training-continuing-education';
  }
}
