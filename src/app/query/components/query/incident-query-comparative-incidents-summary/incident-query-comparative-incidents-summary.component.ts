import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-comparative-incidents-summary',
  templateUrl: './incident-query-comparative-incidents-summary.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryComparativeIncidentsSummaryComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.ComparativeIncidentsSummary';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      fiscalYearIncidentCount: '',
      callFrequencyCategory: '',
      firePropertyLoss: '',
      month: '',
      nextMonth: '',
      previousMonth: '',
      fiscalYear: '',
      beginDate: '',
      singleDay: '',
      inspectionQuarter: '',
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
    return '/list/comparative-incidents-summary';
  }
}
