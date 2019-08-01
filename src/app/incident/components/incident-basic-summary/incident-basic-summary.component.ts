import { Component } from '@angular/core';
import { UIBuildService } from '../../../core/services/ui-build.service';
import { IncidentTab } from '../incident-tab/incident-tab';

@Component({
  selector: 'app-incident-basic-summary',
  templateUrl: './incident-basic-summary.component.html',
  styleUrls: ['./incident-basic-summary.component.css']
})
export class IncidentBasicSummaryComponent extends IncidentTab {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.BasicSummary');
  }
}
