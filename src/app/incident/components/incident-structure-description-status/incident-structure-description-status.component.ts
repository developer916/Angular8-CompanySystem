import { Component } from '@angular/core';
import { UIBuildService } from '../../../core/services/ui-build.service';
import { IncidentTab } from '../incident-tab/incident-tab';

@Component({
  selector: 'app-incident-structure-description-status',
  templateUrl: './incident-structure-description-status.component.html',
  styleUrls: ['./incident-structure-description-status.component.css']
})
export class IncidentStructureDescriptionStatusComponent extends IncidentTab {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.StructureDescriptionStatus');
  }
}
