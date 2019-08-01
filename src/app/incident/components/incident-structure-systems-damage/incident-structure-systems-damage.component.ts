import { Component } from '@angular/core';
import { IncidentTab } from '../incident-tab/incident-tab';
import { UIBuildService } from '../../../core/services/ui-build.service';

@Component({
  selector: 'app-incident-structure-systems-damage',
  templateUrl: './incident-structure-systems-damage.component.html',
  styleUrls: ['./incident-structure-systems-damage.component.css']
})
export class IncidentStructureSystemsDamageComponent extends IncidentTab  {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */

  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.StructureSystemsDamage');
  }
}
