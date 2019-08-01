import { Component, OnInit } from '@angular/core';
import {IncidentTab} from '../../../incident/components/incident-tab/incident-tab';
import {UIBuildService} from '../../../core/services/ui-build.service';

@Component({
  selector: 'app-items-and-equipment',
  templateUrl: './items-and-equipment.component.html'
})
export class ItemsAndEquipmentComponent extends IncidentTab {
  public static SESSION_NAME: string = 'Session.OS.HZ.ItemsEquipment';
  constructor(ubs: UIBuildService) {
    super(ubs, ItemsAndEquipmentComponent.SESSION_NAME);
  }

}
