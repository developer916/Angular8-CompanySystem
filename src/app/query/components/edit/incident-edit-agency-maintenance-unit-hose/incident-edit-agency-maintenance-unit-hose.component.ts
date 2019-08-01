import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {QueryService} from '../../../services/query.service';

@Component({
  selector: 'app-incident-edit-agency-maintenance-unit-hose',
  templateUrl: './incident-edit-agency-maintenance-unit-hose.component.html',
  styleUrls: ['./incident-edit-agency-maintenance-unit-hose.component.css']
})
export class IncidentEditAgencyMaintenanceUnitHoseComponent {

  QUERY_SESSION = 'Session.OS.Query.AgencyMaintenanceUnitHose';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  formGroup: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private qs: QueryService) {
    this.createForm();
  }

  private createForm () {
    this.formGroup = this.fb.group({
      unitNumber: '',
      hoseNumber: '',
      type: '',
      size: '',
      length: '',
      testDuration: '',
      testPSI: ''
    });
  }

  submit(buttonType) {
    // Need to fix the date format from what the form gives us
    // if query
    const rawValue = this.formGroup.getRawValue();
    this.qs.setQueryParams(this.QUERY_SESSION, rawValue);
    this.router.navigate(['/incident/list-agency-maintenance-unit-hose']);
    // if add -> goto edit page
    this.router.navigate(['/incident/edit-agency-maintenance-unit-hose']);
  }
}


