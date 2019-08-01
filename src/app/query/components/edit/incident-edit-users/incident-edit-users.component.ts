import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {QueryService} from '../../../services/query.service';

@Component({
  selector: 'app-incident-edit-users',
  templateUrl: './incident-edit-users.component.html',
  styleUrls: ['./incident-edit-users.component.css']
})
export class IncidentEditUsersComponent {

  QUERY_SESSION = 'Session.OS.Query.Users';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  formGroup: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private qs: QueryService) {
    this.createForm();
  }

  private createForm () {
    this.formGroup = this.fb.group({
      userID: '',
      firstName: '',
      middleInitial: '',
      lastName: '',
      suffix: '',
      rank: '',
      title: '',
      personnelID: '',
      personnelUserID: '',
      personnelList: '',
      groupName: '',
      administrator: '',
      reportBuilder: '',
      accessEncryptedData: '',
      resetPassword: ''
    });
  }

  submit(buttonType) {
    // Need to fix the date format from what the form gives us
    // if query
    const rawValue = this.formGroup.getRawValue();
    this.qs.setQueryParams(this.QUERY_SESSION, rawValue);
    this.router.navigate(['/incident/list-users']);
    // if add -> goto edit page
    this.router.navigate(['/incident/edit-users']);
  }
}


