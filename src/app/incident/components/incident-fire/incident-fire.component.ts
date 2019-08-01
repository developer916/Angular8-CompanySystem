import { Component } from '@angular/core';
import { IncidentTab } from '../incident-tab/incident-tab';
import { UIBuildService } from '../../../core/services/ui-build.service';

@Component({
  selector: 'app-incident-fire',
  templateUrl: './incident-fire.component.html',
  styleUrls: ['./incident-fire.component.css']
})
export class IncidentFireComponent extends IncidentTab  {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.Fire');
  }
}
