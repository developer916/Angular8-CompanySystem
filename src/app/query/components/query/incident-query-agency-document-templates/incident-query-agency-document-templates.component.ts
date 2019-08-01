import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-agency-document-templates',
  templateUrl: './incident-query-agency-document-templates.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryAgencyDocumentTemplatesComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.AgencyDocumentTemplate';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  /**
   * @see IncidentQueryComponent#createForm
   */
  createForm() {
    this.formGroup = this.fb.group({
      templateName: '',
      templateType: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/agency-document-templates';
  }
}
