import { Component } from '@angular/core';
import { UIBuildService } from '../../../core/services/ui-build.service';
import { IncidentTab } from '../incident-tab/incident-tab';

@Component({
  selector: 'app-incident-arson-case-details',
  templateUrl: './incident-arson-case-details.component.html',
  styleUrls: ['./incident-arson-case-details.component.css']
})
export class IncidentArsonCaseDetailsComponent extends IncidentTab {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.ArsonCaseDetails');
  }
}
