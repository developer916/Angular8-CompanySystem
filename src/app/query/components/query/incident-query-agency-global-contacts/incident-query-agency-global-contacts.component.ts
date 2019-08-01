import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-agency-global-contacts',
  templateUrl: './incident-query-agency-global-contacts.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryAgencyGlobalContactsComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.AgencyGlobalContacts';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      searchByName: '',
      email: '',
      incidentAddress: '',
      city: '',
      rowCount: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/agency-global-contacts';
  }
}
