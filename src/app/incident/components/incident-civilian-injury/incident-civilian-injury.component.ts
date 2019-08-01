import { Component } from '@angular/core';
import { UIBuildService } from '../../../core/services/ui-build.service';
import { IncidentTab } from '../incident-tab/incident-tab';

@Component({
  selector: 'app-incident-civilian-injury',
  templateUrl: './incident-civilian-injury.component.html',
  styleUrls: ['./incident-civilian-injury.component.css']
})
export class IncidentCivilianInjuryComponent extends IncidentTab {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.CivilianInjury');
  }
}
