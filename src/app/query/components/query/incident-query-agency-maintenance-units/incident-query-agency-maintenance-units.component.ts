import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-agency-maintenance-units',
  templateUrl: './incident-query-agency-maintenance-units.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryAgencyMaintenanceUnitsComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.AgencyMaintenanceUnits';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      unitMaintenanceNumber: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/agency-maintenance-units';
  }

  /**
   * This gets called when we are adding instead of querying
   */
  submitAdd() {
    const rawValue = this.formGroup.getRawValue();
    this.qs.setQueryParams(this.QUERY_SESSION, rawValue);
    this.router.navigate(['incident/edit-agency-maintenance-units'])
  }
}
