import { Component } from '@angular/core';
import { UIBuildService } from '../../../core/services/ui-build.service';
import { IncidentTab } from '../incident-tab/incident-tab';

@Component({
  selector: 'app-incident-basic-persons-involved',
  templateUrl: './incident-basic-persons-involved.component.html',
  styleUrls: ['./incident-basic-persons-involved.component.css']
})
export class IncidentBasicPersonsInvolvedComponent extends IncidentTab {
  public static readonly SESSION_NAME = 'Session.OS.IM.BasicPersonsInvolved';
  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, IncidentBasicPersonsInvolvedComponent.SESSION_NAME);
  }
}
