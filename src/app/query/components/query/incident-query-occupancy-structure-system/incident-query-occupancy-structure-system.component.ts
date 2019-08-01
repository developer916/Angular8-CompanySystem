import { Component } from '@angular/core';
import { IncidentQueryComponent } from '../incident-query/incident-query.component';

@Component({
  selector: 'app-incident-query-occupancy-structure-system',
  templateUrl: './incident-query-occupancy-structure-system.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryOccupancyStructureSystemComponent extends IncidentQueryComponent {

  QUERY_SESSION = 'Session.OS.Query.OccupancyStructureSystem';  // TODO: Check that this is the correct value as defined in OnScene (if we care)


  createForm() {
    this.formGroup = this.fb.group({
      occupancyClass: '',
      inspectionZone: '',
      district: '',
      zone: '',
      propertyUse: '',
      squareFeet: '',
      engineeredSystem: '',
      hoodDuct: '',
      sprayBooth: '',
      systemType: '',
      month: '',
      previousMonth: '',
      nextMonth: '',
      beginDate: '',
      singleDay: '',
      year: '',
      endDate: '',
      lastXDays: '',
      rowCount: ''
    });
  }

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/occupancy-structure-system';
  }
}

