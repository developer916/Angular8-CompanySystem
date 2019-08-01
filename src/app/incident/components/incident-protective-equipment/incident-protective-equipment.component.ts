import { Component } from '@angular/core';
import { UIBuildService } from '../../../core/services/ui-build.service';
import { IncidentTab } from '../incident-tab/incident-tab';
import {ProtectiveEquipmentFailure} from "../../model/protective-equipment-failure";

@Component({
  selector: 'app-incident-protective-equipment',
  templateUrl: './incident-protective-equipment.component.html',
  styleUrls: ['./incident-protective-equipment.component.css']
})
export class IncidentProtectiveEquipmentComponent extends IncidentTab {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, ProtectiveEquipmentFailure.SESSION_NAME);
  }
}
