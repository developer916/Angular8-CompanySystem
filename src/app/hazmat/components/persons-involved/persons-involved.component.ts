import { Component, OnInit } from '@angular/core';
import {IncidentTab} from '../../../incident/components/incident-tab/incident-tab';
import {UIBuildService} from '../../../core/services/ui-build.service';

@Component({
  selector: 'app-persons-involved',
  templateUrl: './persons-involved.component.html'
})
export class PersonsInvolvedComponent extends IncidentTab {

  public static SESSION_NAME: string = 'Session.OS.HZ.PersonsInvolved';
  
  constructor(ubs: UIBuildService) {
    super(ubs, PersonsInvolvedComponent.SESSION_NAME);
  }

}
