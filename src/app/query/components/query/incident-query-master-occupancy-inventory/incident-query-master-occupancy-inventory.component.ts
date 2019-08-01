import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-master-occupancy-inventory',
  templateUrl: './incident-query-master-occupancy-inventory.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryMasterOccupancyInventoryComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.MasterOccupancyInventory';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      occupancyNumbers: '',
      rowCount: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/master-occupancy-inventory';
  }
}
