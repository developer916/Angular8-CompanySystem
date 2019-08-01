import { Component } from '@angular/core';
import { UIBuildService } from '../../../core/services/ui-build.service';
import { IncidentTab } from '../incident-tab/incident-tab';

@Component({
  selector: 'app-incident-arson-juvenile-firesetter',
  templateUrl: './incident-arson-juvenile-firesetter.component.html',
  styleUrls: ['./incident-arson-juvenile-firesetter.component.css']
})
export class IncidentArsonJuvenileFiresetterComponent extends IncidentTab {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */
  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.ArsonJuvenileFiresetter');
  }
}
