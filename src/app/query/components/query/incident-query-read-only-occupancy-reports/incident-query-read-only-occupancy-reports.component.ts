import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';


@Component({
  selector: 'app-incident-query-read-only-occupancy-reports',
  templateUrl: './incident-query-read-only-occupancy-reports.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryReadOnlyOccupancyReportsComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.ReadOnlyOccupancyReports';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      businessName: '',
      phone: '',
      occupancyClass: '',
      district: '',
      linkedOccupancy: '',
      incidentAddress: '',
      subdivision: '',
      distance: '',
      parcelNumbers: '',
      idNumbers: '',
      occupancyNumbers: '',
      city: '',
      inspectionZone: '',
      inspectionCycle: '',
      fireManagementZone: '',
      fireSeverityZone: '',
      calendarYear: '',
      fiscalYear: '',
      permit: '',
      inspection: '',
      project: '',
      planReview: '',
      invoice: '',
      stage: '',
      status: '',
      rowCount: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/read-only-occupancy';
  }
}
