import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';


@Component({
  selector: 'app-incident-query-auto-closed',
  templateUrl: './incident-query-auto-closed.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryAutoClosedComponent extends IncidentQueryComponent {

   /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/auto-closed';
  }

  /**
   * @see IncidentQueryComponent#getQuerySession
   */
  getQuerySession(): string {
    return 'Session.OS.Query.AutoClosed';
  }
}
