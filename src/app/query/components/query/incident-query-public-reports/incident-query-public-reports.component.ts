import {Component} from '@angular/core';
import {IncidentQueryComponent} from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-public-reports',
  templateUrl: './incident-query-public-reports.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryPublicReportsComponent extends IncidentQueryComponent {

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/public-reports';
  }

  /**
   * @see IncidentQueryComponent#getQuerySession
   */
  getQuerySession(): string {
    return 'Session.OS.Query.PublicReports';
  }
}
