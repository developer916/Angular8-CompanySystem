import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-hydrant-inventory',
  templateUrl: './incident-query-hydrant-inventory.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryHydrantInventoryComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.HydrantInventory';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  createForm() {
    this.formGroup = this.fb.group({
      stationId: '',
      city: '',
      mapPage: '',
      hydrantId: '',
      hydrantGroup: '',
      inspectionCycle: ''
    });
  }

  submitAdd() {
    const rawValue = this.formGroup.getRawValue();
    this.qs.setQueryParams(this.QUERY_SESSION, rawValue);
    this.router.navigate(['incident/edit-agency-hydrant-inventory'])
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/hydrant-inventory';
  }
}
