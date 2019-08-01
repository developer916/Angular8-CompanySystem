import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-summary-detail',
  templateUrl: './incident-query-summary-detail.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQuerySummaryDetailComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.SummaryDetail';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      callFrequencyStation: '',
      callFrequencyCategory: '',
      callFrequencyHour: '',
      callFrequencyMonth: '',
      firePropertyLoss: '',
      mutualAidReceived: '',
      fiscalYearIncidentCount: '',
      mutualAidExtended: '',
      month: '',
      inspectionQuarter: '',
      beginDate: '',
      fiscalYear: '',
      singleDay: '',
      year: '',
      endDate: '',
      lastXDays: '',
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
    return '/list/summary-detail';
  }
}
