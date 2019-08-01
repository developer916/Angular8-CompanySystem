import { Component } from '@angular/core';
import { IncidentTab } from '../incident-tab/incident-tab';
import { UIBuildService } from '../../../core/services/ui-build.service';

@Component({
  selector: 'app-incident-resources',
  templateUrl: './incident-resources.component.html',
  styleUrls: ['./incident-resources.component.css']
})
export class IncidentResourcesComponent extends IncidentTab {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.Resources');
  }
}
