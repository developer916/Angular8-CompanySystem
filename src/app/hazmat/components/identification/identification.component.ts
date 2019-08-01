import { Component, OnInit } from '@angular/core';
import {IncidentTab} from '../../../incident/components/incident-tab/incident-tab';
import {UIBuildService} from '../../../core/services/ui-build.service';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html'
})
export class IdentificationComponent extends IncidentTab {

  public static readonly SESSION_NAME: string = 'Session.OS.HZ.Identification';

  constructor(ubs: UIBuildService) {
    super(ubs, IdentificationComponent.SESSION_NAME);
  }

}
