import { Component, OnInit } from '@angular/core';
import {IncidentTab} from '../../../incident/components/incident-tab/incident-tab';
import {UIBuildService} from '../../../core/services/ui-build.service';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html'
})
export class AgencyComponent extends IncidentTab {
  public static SESSION_NAME = 'Session.OS.HZ.Agency';
  
  constructor(ubs: UIBuildService) {
    super(ubs, AgencyComponent.SESSION_NAME);
  }

}
