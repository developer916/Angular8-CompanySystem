import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';


@Component({
  selector: 'app-incident-query-users',
  templateUrl: './incident-query-users.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryUsersComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.Users';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      userID: '',
      firstName: '',
      lastName: '',
      rank: '',
      groupName: '',
      administrator: '',
      report: '',
      accessEncryptedData: ''
    });
  }

  submitAdd() {
    const rawValue = this.formGroup.getRawValue();
    this.qs.setQueryParams(this.QUERY_SESSION, rawValue);
    this.router.navigate(['incident/edit-users'])
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/users';
  }
}
