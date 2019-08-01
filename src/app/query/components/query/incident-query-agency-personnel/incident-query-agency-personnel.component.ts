import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-agency-personnel',
  templateUrl: './incident-query-agency-personnel.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryAgencyPersonnelComponent extends IncidentQueryComponent  {

  QUERY_SESSION = 'Session.OS.Query.AgencyPersonnel';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      personnelId: '',
      firstName: '',
      lastName: '',
      rank: '',
      gender: '',
      recruit: '',
      paramedic: '',
      newDriverOperator: '',
      emt: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/agency-personnel';
  }

  /**
   * This gets called when we are adding instead of querying
   */
  submitAdd() {
    const rawValue = this.formGroup.getRawValue();
    this.qs.setQueryParams(this.QUERY_SESSION, rawValue);
    this.router.navigate(['incident/edit-agency-personnel'])
  }
}
