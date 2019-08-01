import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../../core/services/data-service.service';
import { FormStateService } from '../../core/services/form-state.service';
import { IncidentResourcesNarrativeOverwriteModalDialogComponent } from '../components/incident-resources-narrative-overwrite-modal-dialog/incident-resources-narrative-overwrite-modal-dialog.component';
import { NarrativeTemplate, NarrativeType} from '../model/narrative-template';
import { UserService } from 'app/core/services/user.service';
import { DataUtils } from 'app/core/services/data-utils';
import * as Mustache from 'mustache';
import { ResourcesUnit } from '../model/resources-unit';
import { BasicResponse } from '../model/basic-response';
import { ResourcesUnitNarrative } from '../model/resources-unit-narrative';
import { LookupService } from 'app/core/services/lookup.service';

@Injectable({
  providedIn: 'root'
})
export class NarrativeTemplateService {

  /**
   *
   */
  private narrativeTemplateData: BehaviorSubject<Map<NarrativeType, NarrativeTemplate>> =
    new BehaviorSubject<Map<NarrativeType, NarrativeTemplate>>(new Map<NarrativeType, NarrativeTemplate>());

  /**
   *
   * @param ds
   * @param fss
   * @param us
   * @param dialog
   */
  constructor(private ds: DataService,
              private fss: FormStateService,
              private ls: LookupService,
              private us: UserService,
              public dialog: MatDialog) {
    this.ds.getNarrativeTemplates().subscribe( response => {
        const loadedTemplates = new Map<NarrativeType, NarrativeTemplate>();
        response.forEach(templateData => {
          const template = new NarrativeTemplate(templateData.name, templateData.session, templateData.type, templateData.templateString);
          loadedTemplates.set(template.type, template);
        });
        this.narrativeTemplateData.next(loadedTemplates);
      });
  }

  /**
   *
   * @param fullReport
   * @param narrativeCtrl
   * @param id
   */
  public handleResponsibleForChange(fullReport: boolean, resourcesNarrativeControls: Map<string, FormControl>, id: string) {
    const narrativeControl = resourcesNarrativeControls.get('Narrative');
    if (narrativeControl.value != null && narrativeControl.value.toString().length > 0) {
      this.openDialog(fullReport, resourcesNarrativeControls, id);
    } else {
      this.updateNarrativeText(fullReport, resourcesNarrativeControls, id);
    }
  }

  /**
   *
   */
  private openDialog(fullReport: boolean, resourcesNarrativeControls: Map<string, FormControl>, id: string): void {
    const dialogRef = this.dialog.open(IncidentResourcesNarrativeOverwriteModalDialogComponent, {
      width: '300px'
    });
    const sub = dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateNarrativeText(fullReport, resourcesNarrativeControls, id);
      }
      dialogRef.close();
      sub.unsubscribe();
    });
  }

  /**
   *
   */
  private updateNarrativeText(fullReport: boolean, resourcesNarrativeControls: Map<string, FormControl>, id: string) {
    const narrativeControl = resourcesNarrativeControls.get('Narrative');
    resourcesNarrativeControls.get('UnitReportByFirstName').setValue(this.us.user.firstName);
    resourcesNarrativeControls.get('UnitReportByFirstName').markAsDirty();
    resourcesNarrativeControls.get('UnitReportByLastName').setValue(this.us.user.lastName);
    resourcesNarrativeControls.get('UnitReportByLastName').markAsDirty();
    resourcesNarrativeControls.get('UnitReportByRank').setValue(this.us.user.rank);
    resourcesNarrativeControls.get('UnitReportByRank').markAsDirty();
    resourcesNarrativeControls.get('AuthorityDate').setValue(DataUtils.formatDate(new Date()));
    resourcesNarrativeControls.get('AuthorityDate').markAsDirty();
    resourcesNarrativeControls.get('Assignment').setValue(this.ls.getOptionForSessionAndCode('Lookup.OS.IM.UsualAssignment', '1'));
    resourcesNarrativeControls.get('Assignment').markAsDirty();
    if (fullReport) {
      narrativeControl.setValue(this.compileTemplate(this.narrativeTemplateData.value.get(NarrativeType.RESPONSIBLE_FOR), id));
      narrativeControl.markAsDirty();
    } else {
      narrativeControl.setValue(this.compileTemplate(this.narrativeTemplateData.value.get(NarrativeType.SHORT), id));
      narrativeControl.markAsDirty();
    }
  }

  /**
   *
   * @param narrativeTemplate
   * @param id
   */
   private compileTemplate(narrativeTemplate: NarrativeTemplate, id?: string) {
    const context = {};
    context['basicResponse'] = this.fss.getSessionFormState(BasicResponse.SESSION_NAME, null, true, false);
    context['units'] = this.fss.getSessionFormState(ResourcesUnit.SESSION_NAME, null, true, false)[ResourcesUnit.SESSION_NAME];
    context['narrative'] = this.fss.getSessionFormState(ResourcesUnitNarrative.SESSION_NAME, id, true, false);
    context['responsibleUnit'] = this.fss.getSessionFormState(ResourcesUnit.SESSION_NAME, id, true, false);
    context['dayFromDatetime'] = function () {
      return function(text, render) {
        return DataUtils.formatDateFoS(render(text));
      }
    };
    context['timeFromDatetime'] = function () {
      return function(text, render) {
        return DataUtils.formatTimeFoS(render(text));
      }
    };
    const lookupService = this.ls;
    context['lookupDescriptionFromCode'] = function () {
      return function(text, render) {
        const parts = text.split(',');
        return lookupService.getDescriptionForCode(parts[0], render(parts[1]));
      }
    };
    return Mustache.render(narrativeTemplate.templateString, context);
  }
}
