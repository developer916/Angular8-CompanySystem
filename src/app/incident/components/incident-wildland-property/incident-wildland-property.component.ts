import { Component } from '@angular/core';
import { IncidentTab } from '../incident-tab/incident-tab';
import { UIBuildService } from '../../../core/services/ui-build.service';


@Component({
  selector: 'app-incident-wildland-property',
  templateUrl: './incident-wildland-property.component.html',
  styleUrls: ['./incident-wildland-property.component.css']
})
export class IncidentWildlandPropertyComponent extends IncidentTab  {

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   */

  constructor(ubs: UIBuildService) {
    super(ubs, 'Session.OS.IM.WildlandPropertyDetails');
  }
}
