import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-manage-hazmat-document-archive-attachments',
  templateUrl: './incident-query-manage-hazmat-document-archive-attachments.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryManageHazmatDocumentArchiveAttachmentsComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.ManageHazmatDocumentArchiveAttachement';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      beginDate: '',
      singleDay: '',
      endDate: '',
      lastXDays: '',
      incidentNumber: '',
      exposureNumber: '',
      year: '',
      unitIDs: '',
      personnelId: '',
      chemicalName: '',
      dotClass: '',
      chemicalId: '',
      containerType: '',
      unNumber: '',
      incidentAddress: '',
      city: '',
      rowCount: '',
      status: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/manage-hazmat-document-archive-attachments';
  }
}
