import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-agency-maintenance-unit-hose',
  templateUrl: './incident-query-agency-maintenance-unit-hose.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryAgencyMaintenanceUnitHoseComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.AgencyMaintenanceUnitHose';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  createForm() {
    this.formGroup = this.fb.group({
      unitMaintenanceNumber: '',
      engineType: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/edit-agency-maintenance-unit-hose';
  }
}
