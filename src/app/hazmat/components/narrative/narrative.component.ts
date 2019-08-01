import { Component, OnInit } from '@angular/core';
import {IncidentTab} from '../../../incident/components/incident-tab/incident-tab';
import {UIBuildService} from '../../../core/services/ui-build.service';

@Component({
  selector: 'app-narrative',
  templateUrl: './narrative.component.html'
})
export class NarrativeComponent extends IncidentTab {
  public static SESSION_NAME: string = 'Session.OS.HZ.Narrative';

  constructor(ubs: UIBuildService) {
    super(ubs, NarrativeComponent.SESSION_NAME);
  }

}
