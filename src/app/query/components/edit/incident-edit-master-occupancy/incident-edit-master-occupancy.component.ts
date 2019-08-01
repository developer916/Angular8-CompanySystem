import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {QueryService} from '../../../services/query.service';

@Component({
  selector: 'app-incident-edit-master-occupancy',
  templateUrl: './incident-edit-master-occupancy.component.html',
  styleUrls: ['./incident-edit-master-occupancy.component.css']
})
export class IncidentEditMasterOccupancyComponent {

  QUERY_SESSION = 'Session.OS.Query.MasterOccupancy';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  formGroup: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private qs: QueryService) {
    this.createForm();
  }

  private createForm () {
    this.formGroup = this.fb.group({
      prePlanNumber: '',
      location: '',
      district: '',
      city: ''
    });
  }

  submit(buttonType) {
    // Need to fix the date format from what the form gives us
    // if query
    const rawValue = this.formGroup.getRawValue();
    this.qs.setQueryParams(this.QUERY_SESSION, rawValue);
    this.router.navigate(['/incident/list-master-occupancy']);
    // if add -> goto edit page
    this.router.navigate(['/incident/edit-master-occupancy']);
  }
}


