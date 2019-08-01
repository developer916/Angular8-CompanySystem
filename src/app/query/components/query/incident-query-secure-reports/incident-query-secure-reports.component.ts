import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';


@Component({
  selector: 'app-incident-query-secure-reports',
  templateUrl: './incident-query-secure-reports.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQuerySecureReportsComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.SecureReports';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      beginDate: '',
      endDate: '',
      lastXDays: '',
      incidentNumber: '',
      exposureNumber: '',
      year: '',
      unitIDs: '',
      stationId: '',
      battalion: '',
      division: '',
      incidentType: '',
      rowCount: '',
      status: '',
      shift: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/secure-reports';
  }
}


