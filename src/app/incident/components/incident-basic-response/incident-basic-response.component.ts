import { Component } from '@angular/core';
import { UIBuildService } from '../../../core/services/ui-build.service';
import { IncidentTab } from '../incident-tab/incident-tab';

@Component({
  selector: 'app-incident-basic-response',
  templateUrl: './incident-basic-response.component.html',
  styleUrls: ['./incident-basic-response.component.css']
})
export class IncidentBasicResponseComponent extends IncidentTab {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.BasicResponse');
  }
}
