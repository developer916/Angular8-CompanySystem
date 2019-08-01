import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-controlled-substance-drug-control-number',
  templateUrl: './incident-query-controlled-substance-drug-control-number.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryControlledSubstanceDrugControlNumberComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.ControlledSubstanceDrubControlNumber';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      beginDate: '',
      endDate: '',
      singleDay: '',
      lastXDays: '',
      morphineControlName: '',
      midazolameControlNumber: '',
      rowCount: '',
      status: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/controlled-substance-drug-control';
  }
}
