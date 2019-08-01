import { Component } from '@angular/core';
import { IncidentTab } from '../incident-tab/incident-tab';
import { UIBuildService } from '../../../core/services/ui-build.service';


@Component({
  selector: 'app-incident-arson',
  templateUrl: './incident-arson.component.html',
  styleUrls: ['./incident-arson.component.css']
})
export class IncidentArsonComponent extends IncidentTab  {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.Arson');
  }
}
