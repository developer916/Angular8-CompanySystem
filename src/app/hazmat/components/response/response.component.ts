import { Component, OnInit } from '@angular/core';
import {IncidentTab} from '../../../incident/components/incident-tab/incident-tab';
import {UIBuildService} from '../../../core/services/ui-build.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html'
})
export class ResponseComponent extends IncidentTab {

  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.HZ.Response');
  }

}
