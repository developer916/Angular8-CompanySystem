import { Component, OnInit } from '@angular/core';
import {IncidentTab} from '../../../incident/components/incident-tab/incident-tab';
import {UIBuildService} from '../../../core/services/ui-build.service';

@Component({
  selector: 'app-involved',
  templateUrl: './involved.component.html'
})
export class InvolvedComponent extends IncidentTab {

  public static readonly SESSION_NAME: string = 'Session.OS.HZ.Involved';

  constructor(ubs: UIBuildService) {
    super(ubs, InvolvedComponent.SESSION_NAME);
  }

}
