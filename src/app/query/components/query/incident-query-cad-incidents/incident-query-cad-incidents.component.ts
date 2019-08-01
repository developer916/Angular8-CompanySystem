import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';


@Component({
  selector: 'app-incident-query-cad-incidents',
  templateUrl: './incident-query-cad-incidents.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryCadIncidentsComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.CadIncidents';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      beginDate: '',
      singleDay: '',
      endDate: '',
      lastXDays: '',
      incidentNumber: '',
      exposureNumber: '',
      year: '',
      rowCount: '',
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/open-cad-incidents';
  }
}
