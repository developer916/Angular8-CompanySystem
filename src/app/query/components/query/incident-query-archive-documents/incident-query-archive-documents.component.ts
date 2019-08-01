import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-archive-documents',
  templateUrl: './incident-query-archive-documents.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryArchiveDocumentsComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.ArchiveDocuments';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      beginDate: '',
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
    return '/list/archive-reports';
  }
}
