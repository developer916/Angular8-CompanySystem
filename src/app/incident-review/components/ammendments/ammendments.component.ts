import { Component, OnInit } from '@angular/core';
import {IncidentTab} from '../../../incident/components/incident-tab/incident-tab';
import {UIBuildService} from '../../../core/services/ui-build.service';

@Component({
  selector: 'app-ammendments',
  templateUrl: './ammendments.component.html'
})
export class AmmendmentsComponent extends IncidentTab {

  constructor(ubs: UIBuildService) {
    super( ubs, 'Session.OS.RV.Ammendments');
  }

}
