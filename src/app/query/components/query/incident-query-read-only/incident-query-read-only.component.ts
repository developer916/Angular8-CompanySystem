import {Component} from '@angular/core';
import {IncidentQueryComponent} from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-read-only',
  templateUrl: './incident-query-read-only.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryReadOnlyComponent extends IncidentQueryComponent {

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/read-only';
  }

  /**
   * @see IncidentQueryComponent#getQuerySession
   */
  getQuerySession(): string {
    return 'Session.OS.Query.ReadOnly';
  }
}
