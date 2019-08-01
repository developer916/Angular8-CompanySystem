import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-training-calendar',
  templateUrl: './incident-query-training-calendar.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryTrainingCalendarComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.TrainingCalendar';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group( {
      month: '',
      previousMonth: '',
      nextMonth: '',
      year: '',
      beginDate: '',
      endDate: '',
      lastXDays: '',
      drill: '',
      location: '',
      event: '',
      type: '',
      requirement: '',
      method: '',
      useLoginID: '',
      personnelId: '',
      rowCount: '',
      status: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/training-calendar';
  }
}
