import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';


@Component ({
  selector: 'app-incident-query-exposure-reports',
  templateUrl: './incident-query-exposure-reports.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryExposureReportsComponent extends IncidentQueryComponent {


  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/exposure-reports';
  }

  /**
   * @see IncidentQueryComponent#getQuerySession
   */
  getQuerySession(): string {
    return 'Session.OS.Query.ExposureReports';
  }
}
