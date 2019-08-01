import { Component } from '@angular/core';
import { UIBuildService } from '../../../core/services/ui-build.service';
import { IncidentTab } from '../incident-tab/incident-tab';

@Component({
  selector: 'app-incident-resources-personnel',
  templateUrl: './incident-resources-personnel.component.html',
  styleUrls: ['./incident-resources-personnel.component.css']
})
export class IncidentResourcesPersonnelComponent extends IncidentTab {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.ResourcesUnitPersonnel');
  }
}
