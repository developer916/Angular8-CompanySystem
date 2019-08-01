import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-call-frequency-summary',
  templateUrl: './incident-query-call-frequency-summary.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryCallFrequencySummaryComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.CallFrequencySummary';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      callFrequencyStation: '',
      callFrequencyCity: '',
      callFrequencyHour: '',
      callFrequencyMonth: '',
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
    return '/list/call-frequency-summary';
  }
}
