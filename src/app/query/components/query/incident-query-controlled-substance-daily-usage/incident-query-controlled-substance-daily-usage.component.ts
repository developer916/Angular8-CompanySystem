import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-controlled-substance-daily-usage',
  templateUrl: './incident-query-controlled-substance-daily-usage.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryControlledSubstanceDailyUsageComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.ControlledSubstanceDailyUsage';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      beginDate: '',
      singleDay: '',
      endDate: '',
      lastXDays: '',
      unitMaintenanceNumber: '',
      unitIDs: '',
      loginID: '',
      personnelId: '',
      rowCount: '',
      status: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/controlled-substance-daily-usage';
  }
}
