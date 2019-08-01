import { Component } from '@angular/core';
import { UIBuildService } from '../../../core/services/ui-build.service';
import { IncidentTab } from '../incident-tab/incident-tab';

@Component({
  selector: 'app-incident-fire-ignition-details',
  templateUrl: './incident-fire-ignition-details.component.html',
  styleUrls: ['./incident-fire-ignition-details.component.css']
})
export class IncidentFireIgnitionDetailsComponent extends IncidentTab {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.FireIgnitionDetails');
  }
}
