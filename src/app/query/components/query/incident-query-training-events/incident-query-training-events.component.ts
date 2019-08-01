import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-training-events',
  templateUrl: './incident-query-training-events.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryTrainingEventsComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.TrainingEvents';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
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
    return '/list/training-drill-hours';
  }
}
