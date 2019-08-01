import { Component, OnInit } from '@angular/core';
import {IncidentTab} from '../../../incident/components/incident-tab/incident-tab';
import {UIBuildService} from '../../../core/services/ui-build.service';

@Component({
  selector: 'app-cad',
  templateUrl: './cad.component.html'
})
export class CadComponent extends IncidentTab {

  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.HZ.CAD');
  }

}
