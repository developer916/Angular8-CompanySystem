import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {QueryService} from '../../../services/query.service';

@Component({
  selector: 'app-incident-edit-agency-hydrant-inventory',
  templateUrl: './incident-edit-agency-hydrant-inventory.component.html',
  styleUrls: ['./incident-edit-agency-hydrant-inventory.component.css']
})
export class IncidentEditAgencyHydrantInventoryComponent {

  QUERY_SESSION = 'Session.OS.Query.HydrantInventory'; 

  formGroup: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private qs: QueryService) {
    this.createForm();
  }

  private createForm() {
    this.formGroup = this.fb.group({
      hydrantNumber: '',
      mapPage: '',
      hydrantGroup: '',
      inspectionCycle: '',
      station: '',
      city: '',
      streetHighway: '',
      crossStreet: ''
    });
  }

  submit(buttonType) {
    // Need to fix the date format from what the form gives us
    // if query
    const rawValue = this.formGroup.getRawValue();
    this.qs.setQueryParams(this.QUERY_SESSION, rawValue);
    this.router.navigate(['/incident/list-hydrant-inventory']);
    // if add -> goto edit page
    this.router.navigate(['/incident/edit-agency-hydrant-inventory']);
  }
}
