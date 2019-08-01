import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-hose-test-summary',
  templateUrl: './incident-query-hose-test-summary.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryHoseTestSummaryComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.HoseTestSummary';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


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
    return '/list/hose-test-summary';
  }
}
