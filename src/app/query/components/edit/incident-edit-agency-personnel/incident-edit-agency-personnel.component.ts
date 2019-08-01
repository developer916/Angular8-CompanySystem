import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QueryService} from '../../../services/query.service';

@Component({
  selector: 'app-incident-edit-agency-personnel',
  templateUrl: './incident-edit-agency-personnel.component.html',
  styleUrls: ['./incident-edit-agency-personnel.component.css']
})
export class IncidentEditAgencyPersonnelComponent {

  QUERY_SESSION = 'Session.OS.Query.AgencyPersonnel';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  formGroup: FormGroup;

  constructor(private router: Router,  private fb: FormBuilder, private qs: QueryService) {
    this.createForm();
  }

  private createForm () {
    this.formGroup = this.fb.group({
      personnelID: '',
      firstName: '',
      middleInitial: '',
      lastName: '',
      suffix: '',
      rank: '',
      title: '',
      level: '',
      birthDate: '',
      gender: '',
      employmentDate: '',
      type: '',
      shift: '',
      unitID: '',
      officePhone: '',
      mobile: '',
      email: '',
      recruit: '',
      newDriverOperator: '',
      paramedic: '',
      emt: ''
    });
  }

    submit(buttonType) {
      // Need to fix the date format from what the form gives us
      // if query
      const rawValue = this.formGroup.getRawValue();
      this.qs.setQueryParams(this.QUERY_SESSION, rawValue);
      this.router.navigate(['/incident/list-agency-personnel']);
      // if add -> goto edit page
      this.router.navigate(['/incident/edit-agency-personnel']);
    }
}
