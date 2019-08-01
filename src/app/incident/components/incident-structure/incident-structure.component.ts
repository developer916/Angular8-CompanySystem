import { Component } from '@angular/core';
import { IncidentTab } from '../incident-tab/incident-tab';
import { UIBuildService } from '../../../core/services/ui-build.service';


@Component({
  selector: 'app-incident-structure',
  templateUrl: './incident-structure.component.html',
  styleUrls: ['./incident-structure.component.css']
})
export class IncidentStructureComponent extends IncidentTab  {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */

  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.Structure');
  }
}
