import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';


@Component({
  selector: 'app-incident-query-review-controlled-substance-inventory',
  templateUrl: './incident-query-review-controlled-substance-inventory.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryReviewControlledSubstanceInventoryComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.ReviewControlledSubstanceInventory';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      beginDate: '',
      endDate: '',
      unitMaintenanceNumber: '',
      unitId: '',
      useLoginID: '',
      personnelId: '',
      rowCount: '',
      status: '',
    });
  }

  getRoute(): string {
    return '/list/review-controlled-substance-inventory';
  }
}
