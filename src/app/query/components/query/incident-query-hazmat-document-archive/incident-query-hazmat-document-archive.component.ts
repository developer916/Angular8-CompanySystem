import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';


@Component({
  selector: 'app-incident-query-hazmat-document-archive',
  templateUrl: './incident-query-hazmat-document-archive.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryHazmatDocumentArchiveComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.HazmatDocumentArchive';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


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
      chemicalId: '',
      dotClass: '',
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
    return '/list/hazmat-document-archive';
  }
}
