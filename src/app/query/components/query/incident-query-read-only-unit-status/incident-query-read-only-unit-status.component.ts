import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-read-only-unit-status',
  templateUrl: './incident-query-read-only-unit-status.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryReadOnlyUnitStatusComponent extends IncidentQueryComponent {


  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/read-only-unit-status';
  }

  /**
   * @see IncidentQueryComponent#getQuerySession
   */
  getQuerySession(): string {
    return 'Session.OS.Query.ReadOnlyUnitStatus';
  }
}
