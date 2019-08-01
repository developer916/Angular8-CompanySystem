import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-manage-incident-archive-attachments',
  templateUrl: './incident-query-manage-incident-archive-attachments.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryManageIncidentArchiveAttachmentsComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.ManageIncidentArchiveAttachments';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      beginDate: '',
      singleDay: '',
      endDate: '',
      lastXDays: '',
      unitIDs: '',
      stationId: '',
      battalion: '',
      division: '',
      incidentNumber: '',
      exposureNumber: '',
      year: '',
      incidentAddress: '',
      city: '',
      rowCount: '',
      status: '',
      shift: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/manage-incident-archive-attachments';
  }
}
