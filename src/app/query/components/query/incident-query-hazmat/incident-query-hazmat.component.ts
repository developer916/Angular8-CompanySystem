import {Component} from '@angular/core';
import {IncidentQueryComponent} from '../incident-query/incident-query.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-incident-query-hazmat',
  templateUrl: './incident-query-hazmat.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryHazmatComponent extends IncidentQueryComponent {

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/hazmat-reports';
  }

  /**
   * @see IncidentQueryComponent#getQuerySession
   */
  getQuerySession(): string {
    return 'Session.OS.Query.Hazmat';
  }
}
