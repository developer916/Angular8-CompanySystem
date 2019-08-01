import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QueryService} from '../../../services/query.service';

@Component({
  selector: 'app-incident-edit-agency-stations',
  templateUrl: './incident-edit-agency-stations.component.html',
  styleUrls: ['./incident-edit-agency-stations.component.css']
})
export class IncidentEditAgencyStationsComponent {

  QUERY_SESSION = 'Session.OS.Query.AgencyStations';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  formGroup: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private qs: QueryService) {
    this.createForm();
  }

  private createForm() {
    this.formGroup = this.fb.group({
      stationID: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phone: '',
      fax: '',
      email: '',
      name: '',
      gpsLocation: ''
    });
  }

  submit(buttonType) {
    // Need to fix the date format from what the form gives us
    // if query
    const rawValue = this.formGroup.getRawValue();
    this.qs.setQueryParams(this.QUERY_SESSION, rawValue);
    this.router.navigate(['/incident/list-agency-stations']);
    // if add -> goto edit page
    this.router.navigate(['/incident/edit-agency-stations']);
  }
}


