import { Component } from '@angular/core';
import { IncidentTab } from '../incident-tab/incident-tab';
import { UIBuildService } from '../../../core/services/ui-build.service';

@Component({
  selector: 'app-incident-resources-unit',
  templateUrl: './incident-resources-unit.component.html',
  styleUrls: ['./incident-resources-unit.component.css']
})
export class IncidentResourcesUnitComponent extends IncidentTab {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.ResourcesUnit');
  }
}
