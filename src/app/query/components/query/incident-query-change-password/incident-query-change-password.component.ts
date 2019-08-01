import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-change-password',
  templateUrl: './incident-query-change-password.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryChangePasswordComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.ChangePassword';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      userID: '',
      password: '',
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/change-password';
  }
}
