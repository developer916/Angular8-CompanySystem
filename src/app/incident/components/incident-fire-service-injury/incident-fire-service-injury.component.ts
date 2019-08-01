import { Component } from '@angular/core';
import { UIBuildService } from '../../../core/services/ui-build.service';
import { IncidentTab } from '../incident-tab/incident-tab';

@Component({
  selector: 'app-incident-fire-service-injury',
  templateUrl: './incident-fire-service-injury.component.html',
  styleUrls: ['./incident-fire-service-injury.component.css']
})
export class IncidentFireServiceInjuryComponent extends IncidentTab {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.FireServiceInjury');
  }
}
