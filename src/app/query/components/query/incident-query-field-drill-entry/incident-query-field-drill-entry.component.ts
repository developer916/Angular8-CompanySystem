import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-field-drill-entry',
  templateUrl: './incident-query-field-drill-entry.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryFieldDrillEntryComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.FieldDrillEntry';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
      this.formGroup = this.fb.group( {
        month: '',
        previousMonth: '',
        nextMonth: '',
        year: '',
        rowCount: '',
        status: ''
      });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/field-drill-entry';
  }
}
