import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-extract-incidents-nfirs',
  templateUrl: './incident-query-extract-incidents-nfirs.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryExtractIncidentsNfirsComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.ExtractIncidentNfirs';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      inspectionQuarter: '',
      month: '',
      year: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/extract-incidents-nfirs';
  }
}
