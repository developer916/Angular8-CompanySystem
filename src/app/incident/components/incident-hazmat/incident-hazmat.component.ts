import { Component } from '@angular/core';
import { IncidentTab } from '../incident-tab/incident-tab';
import { UIBuildService } from '../../../core/services/ui-build.service';

@Component({
  selector: 'app-incident-hazmat',
  templateUrl: './incident-hazmat.component.html',
  styleUrls: ['./incident-hazmat.component.css']
})
export class IncidentHazmatComponent extends IncidentTab  {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.HazMat');
  }
}
