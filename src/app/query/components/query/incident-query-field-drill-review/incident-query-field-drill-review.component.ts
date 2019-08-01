import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-field-drill-review',
  templateUrl: './incident-query-field-drill-review.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryFieldDrillReviewComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.FieldDrillReview';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group( {
      month: '',
      previousMonth: '',
      nextMonth: '',
      year: '',
      beginDate: '',
      endDate: '',
      lastXDays: '',
      rowCount: '',
      stage: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/field-drill-review';
  }
}
