import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';


@Component({
  selector: 'app-incident-query-inspection-violation-summary',
  templateUrl: './incident-query-inspection-violation-summary.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryInspectionViolationSummaryComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.InspectionViolationSummary';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


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
      occupancyClass: '',
      inspectionZone: '',
      topCount: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/inspection-violation-summary';
  }
}
