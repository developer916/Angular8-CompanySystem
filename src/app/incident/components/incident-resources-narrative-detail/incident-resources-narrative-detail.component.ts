import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormStateService } from '../../../core/services/form-state.service';
import { NarrativeTemplateService } from '../../services/narrative-template.service';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-incident-resources-narrative-detail',
  templateUrl: './incident-resources-narrative-detail.component.html',
  styleUrls: ['./incident-resources-narrative-detail.component.css']
})
export class IncidentResourcesNarrativeDetailComponent implements OnInit, OnDestroy {

  private idSub: Subscription;

  constructor(private route: ActivatedRoute,
              private fss: FormStateService,
              private us: UserService,
              private nts: NarrativeTemplateService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    const resourcesNarrativeControls = this.fss.getAllFormControlsForSession('Session.OS.IM.ResourcesUnitNarrative', id);

    // Setup the Personnel Count
    const idKey = this.fss.getIdKeyForSession('Session.OS.IM.ResourcesUnit');
    const personnelCount = this.fss.getListDetailFormArrayForSession('Session.OS.IM.ResourcesUnitPersonnel').controls
      .filter(control => (<FormGroup>control).controls[idKey].value === id &&
        ((<FormGroup>control).controls['ACTION'] == null || (<FormGroup>control).controls['ACTION'].value !== 'DELETE')).length;
    resourcesNarrativeControls.get('Personnel').setValue(personnelCount);

    // Setup the Narrative Template listener
    const idControl = resourcesNarrativeControls.get('UnitReportByPersonnelID');
    const fullReportControl = resourcesNarrativeControls.get('ResponsibleFullReport');
    this.idSub = idControl.valueChanges.subscribe(value => {
      if (idControl.value.length > 0) {
        if (idControl.value === this.us.user.userId) {
          this.nts.handleResponsibleForChange(fullReportControl.value, resourcesNarrativeControls, id);
        } else {
          idControl.setErrors({invalidUserId: true});
        }
      }
    });
  }
  //

  ngOnDestroy(): void {
    if (this.idSub != null) {
      this.idSub.unsubscribe();
    }
  }
}

