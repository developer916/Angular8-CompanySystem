import { Component } from '@angular/core';
import { UIBuildService } from '../../../core/services/ui-build.service';
import { IncidentTab } from '../incident-tab/incident-tab';

@Component({
  selector: 'app-incident-civilian-factors',
  templateUrl: './incident-civilian-factors.component.html',
  styleUrls: ['./incident-civilian-factors.component.css']
})
export class IncidentCivilianFactorsComponent extends IncidentTab {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.CivilianFactors');
  }
}
