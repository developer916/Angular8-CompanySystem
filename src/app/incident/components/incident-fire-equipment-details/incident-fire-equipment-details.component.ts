import { Component } from '@angular/core';
import { UIBuildService } from '../../../core/services/ui-build.service';
import { IncidentTab } from '../incident-tab/incident-tab';

@Component({
  selector: 'app-incident-fire-equipment-details',
  templateUrl: './incident-fire-equipment-details.component.html',
  styleUrls: ['./incident-fire-equipment-details.component.css']
})
export class IncidentFireEquipmentDetailsComponent extends IncidentTab {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.FireEquipmentDetails');
  }
}
