import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-controlled-substance-inventory',
  templateUrl: './incident-query-controlled-substance-inventory.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryControlledSubstanceInventoryComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.ControlledSubstanceInventory';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      beginDate: '',
      endDate: '',
      lastXDays: '',
      unitMaintenanceNumber: '',
      stationId: '',
      unitIDs: '',
      useLoginID: '',
      personnelId: '',
      rowCount: '',
      status: '',
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/controlled-substance-inventory';
  }
}
