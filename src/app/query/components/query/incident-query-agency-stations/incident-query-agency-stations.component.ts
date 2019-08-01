import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-agency-stations',
  templateUrl: './incident-query-agency-stations.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryAgencyStationsComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.AgencyStations';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      stationId: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/agency-stations';
  }

  /**
   * This gets called when we are adding instead of querying
   */
  submitAdd() {
    const rawValue = this.formGroup.getRawValue();
    this.qs.setQueryParams(this.QUERY_SESSION, rawValue);
    this.router.navigate(['incident/edit-agency-stations'])
  }
}
