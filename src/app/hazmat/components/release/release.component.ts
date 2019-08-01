import { Component, OnInit } from '@angular/core';
import {IncidentTab} from '../../../incident/components/incident-tab/incident-tab';
import {UIBuildService} from '../../../core/services/ui-build.service';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html'
})
export class ReleaseComponent extends IncidentTab {
  public static readonly SESSION_NAME: string = 'Session.OS.HZ.Release';
  
  constructor(ubs: UIBuildService) {
    super(ubs, ReleaseComponent.SESSION_NAME);
  }

}
