import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-hose-test-record',
  templateUrl: './incident-query-hose-test-record.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryHoseTestRecordComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.HoseTestRecords';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      year: '',
      beginDate: '',
      endDate: '',
      unitMaintenanceNumber: '',
      unitIDs: '',
      stationId: '',
      personnelId: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/hose-test-records';
  }
}
