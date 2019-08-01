import { Component } from '@angular/core';
import { IncidentTab } from '../incident-tab/incident-tab';
import { DataService } from '../../../core/services/data-service.service';
import { UIBuildService } from '../../../core/services/ui-build.service';

@Component({
  selector: 'app-incident-fire-service',
  templateUrl: './incident-fire-service.component.html',
  styleUrls: ['./incident-fire-service.component.css']
})
export class IncidentFireServiceComponent extends IncidentTab  {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.FireService');
  }
}
