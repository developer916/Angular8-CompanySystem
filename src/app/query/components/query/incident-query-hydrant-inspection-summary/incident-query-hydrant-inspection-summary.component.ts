import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-hydrant-inspection-summary',
  templateUrl: './incident-query-hydrant-inspection-summary.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryHydrantInspectionSummaryComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.HydrantInspectionSummary';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      inspectionQuarter: '',
      year: '',
      beginDate: '',
      endDate: '',
      stationId: '',
      shift: '',
      hydrantId: '',
      hydrantGroup: '',
      mapPage: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/hydrant-inspection-summary';
  }
}
