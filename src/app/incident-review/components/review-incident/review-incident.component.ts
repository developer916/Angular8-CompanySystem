import { Component, OnInit } from '@angular/core';
import {IncidentTab} from '../../../incident/components/incident-tab/incident-tab';
import {UIBuildService} from '../../../core/services/ui-build.service';

@Component({
  selector: 'app-review-incident',
  templateUrl: './review-incident.component.html'
})
export class ReviewIncidentComponent extends IncidentTab {

  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.RV.ReviewIncident');
  }

}
