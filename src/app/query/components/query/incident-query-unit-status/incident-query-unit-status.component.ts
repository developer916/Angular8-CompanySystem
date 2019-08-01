import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component ({
  selector: 'app-incident-query-unit-status',
  templateUrl: './incident-query-unit-status.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryUnitStatusComponent extends IncidentQueryComponent {


  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/unit-status';
  }

  /**
   * @see IncidentQueryComponent#getQuerySession
   */
  getQuerySession(): string {
    return 'Session.OS.Query.UnitStatus';
  }

}
