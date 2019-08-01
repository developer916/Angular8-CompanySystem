import { Component, OnInit } from '@angular/core';
import {IncidentTab} from '../../../incident/components/incident-tab/incident-tab';
import {UIBuildService} from '../../../core/services/ui-build.service';

@Component({
  selector: 'app-detection-and-devices',
  templateUrl: './detection-and-devices.component.html'
})
export class DetectionAndDevicesComponent extends IncidentTab {

  public static SESSION_NAME: string = 'Session.OS.HZ.DetectionDevices';
  
  constructor(ubs: UIBuildService) {
    super(ubs, DetectionAndDevicesComponent.SESSION_NAME);
  }

}
