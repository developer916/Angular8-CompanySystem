import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-pre-plan-inventory',
  templateUrl: './incident-query-pre-plan-inventory.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryPrePlanInventoryComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.PrePlanInventory';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      prePlanNumber: '',
      group: '',
      inspectionCycle: ''
    });
  }

  submitAdd() {
    const rawValue = this.formGroup.getRawValue();
    this.qs.setQueryParams(this.QUERY_SESSION, rawValue);
    this.router.navigate(['incident/edit-pre-plan-inventory'])
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/pre-plan-inventory';
  }
}
