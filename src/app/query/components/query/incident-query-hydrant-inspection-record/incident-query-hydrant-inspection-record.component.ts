import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';


@Component({
  selector: 'app-incident-query-hydrant-inspection-record',
  templateUrl: './incident-query-hydrant-inspection-record.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryHydrantInspectionRecordComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.HydrantInspectionRecord';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group( {
      inspectionQuarter: '',
      beginDate: '',
      lastXDays: '',
      year: '',
      endDate: '',
      stationId: '',
      shift: '',
      hydrantId: '',
      hydrantGroup: '',
      mapPage: '',
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/hydrant-inspection-record';
  }
}
