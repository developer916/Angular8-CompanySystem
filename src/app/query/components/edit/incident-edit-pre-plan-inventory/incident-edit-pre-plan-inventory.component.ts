import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {QueryService} from '../../../services/query.service';

@Component({
  selector: 'app-incident-edit-pre-plan-inventory',
  templateUrl: './incident-edit-pre-plan-inventory.component.html',
  styleUrls: ['./incident-edit-pre-plan-inventory.component.css']
})
export class IncidentEditPrePlanInventoryComponent {

  QUERY_SESSION = 'Session.OS.Query.PrePlanInventory';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  formGroup: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private qs: QueryService) {
    this.createForm();
  }

  private createForm () {
    this.formGroup = this.fb.group({
      prePlan: '',
      district: '',
      group: '',
      inspectionCycle: '',
      location: '',
      city: '',
      name: '',
      version: '',
      stage: '',
      sentDate: '',
      receivedDate: ''
    });
  }

  submit(buttonType) {
    // Need to fix the date format from what the form gives us
    // if query
    const rawValue = this.formGroup.getRawValue();
    this.qs.setQueryParams(this.QUERY_SESSION, rawValue);
    this.router.navigate(['/incident/list-pre-plan-inventory']);
    // if add -> goto edit page
    this.router.navigate(['/incident/edit-pre-plan-inventory']);
  }
}

