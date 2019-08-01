import { Component } from '@angular/core';
import { UIBuildService } from '../../../core/services/ui-build.service';
import { IncidentTab } from '../incident-tab/incident-tab';

@Component({
  selector: 'app-incident-resources-narrative',
  templateUrl: './incident-resources-narrative.component.html',
  styleUrls: ['./incident-resources-narrative.component.css']
})
export class IncidentResourcesNarrativeComponent extends IncidentTab {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.ResourcesUnitNarrative');
  }
}
