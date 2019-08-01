import { Component } from '@angular/core';
import { IncidentTab } from '../incident-tab/incident-tab';
import { UIBuildService } from '../../../core/services/ui-build.service';

@Component({
  selector: 'app-incident-civilian',
  templateUrl: './incident-civilian.component.html',
  styleUrls: ['./incident-civilian.component.css']
})
export class IncidentCivilianComponent extends IncidentTab  {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.Civilian');
  }
}
