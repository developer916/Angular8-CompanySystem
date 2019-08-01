import { Component } from '@angular/core';
import { IncidentTab } from '../incident-tab/incident-tab';
import { UIBuildService } from '../../../core/services/ui-build.service';

@Component({
  selector: 'app-incident-wildland',
  templateUrl: './incident-wildland.component.html',
  styleUrls: ['./incident-wildland.component.css']
})
export class IncidentWildlandComponent  extends IncidentTab  {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */

  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.Wildland');
  }
}
