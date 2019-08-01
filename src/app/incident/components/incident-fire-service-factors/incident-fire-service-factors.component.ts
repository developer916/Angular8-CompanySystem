import { Component } from '@angular/core';
import { UIBuildService } from '../../../core/services/ui-build.service';
import { IncidentTab } from '../incident-tab/incident-tab';

@Component({
  selector: 'app-incident-fire-service-factors',
  templateUrl: './incident-fire-service-factors.component.html',
  styleUrls: ['./incident-fire-service-factors.component.css']
})
export class IncidentFireServiceFactorsComponent extends IncidentTab {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.FireServiceFactors');
  }
}
