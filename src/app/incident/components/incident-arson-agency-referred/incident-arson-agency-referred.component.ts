import { Component } from '@angular/core';
import { UIBuildService } from '../../../core/services/ui-build.service';
import { IncidentTab } from '../incident-tab/incident-tab';

@Component({
  selector: 'app-incident-arson-agency-referred',
  templateUrl: './incident-arson-agency-referred.component.html',
  styleUrls: ['./incident-arson-agency-referred.component.css']
})
export class IncidentArsonAgencyReferredComponent extends IncidentTab {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.ArsonAgencyReferredTo');
  }
}
