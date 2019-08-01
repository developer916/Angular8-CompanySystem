import { Component } from '@angular/core';
import { UIBuildService } from '../../../core/services/ui-build.service';
import { IncidentTab } from '../incident-tab/incident-tab';

@Component({
  selector: 'app-incident-hazmat-special-unit-report',
  templateUrl: './incident-hazmat-special-unit-report.component.html',
  styleUrls: ['./incident-hazmat-special-unit-report.component.css']
})
export class IncidentHazmatSpecialUnitReportComponent extends IncidentTab {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super( ubs, 'Session.OS.IM.HazMatSpecialUnitReport');
  }
}
