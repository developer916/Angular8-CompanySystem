import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-mutual-aid-summary',
  templateUrl: './incident-query-mutual-aid-summary.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryMutualAidSummaryComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.MutualAidSummary';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      mutualAidReceived: '',
      mutualAidExtended: '',
      month: '',
      nextMonth: '',
      previousMonth: '',
      inspectionQuarter: '',
      fiscalYear: '',
      beginDate: '',
      singleDay: '',
      lastXDays: '',
      year: '',
      endDate: '',
      unitIDs: '',
      stationId: '',
      battalion: '',
      division: '',
      stationZone: '',
      district: '',
      dispatchZone: '',
      fireManagementZone: '',
      shift: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/mutual-aid-summary';
  }
}
