import { FormControl } from '@angular/forms';
import { LookupService } from '../../core/services/lookup.service';
import { FormStateService } from '../../core/services/form-state.service';
import { DataUtils } from 'app/core/services/data-utils';

export class ResourcesUnitNarrative {

  public static readonly SESSION_NAME = 'Session.OS.IM.ResourcesUnitNarrative';

  unitReportStatus: string;
  unitId: string;
  displayOrder: number;
  personnel: string;
  personnelName: string;
  mutualAidUnit: boolean;
  responsibleFullReport: string;
  noReport: boolean;
  narrativeText: string;
  unitReportByPersonnelId: string;
  unitReportByRank: string;
  unitReportByFirstName: string;
  unitReportByLastName: string;
  unitReportByMiddleInitial: string;
  assignmentCode: string;
  authorityDate: string;


  /**
   * Create a ResourcesUnitNarrative Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    DisplayOrder?: number,
    Personnel?: string,
    ResponsibleFullReport?: string,
    NoReport?: boolean,
    Narrative?: string,
    UnitReportByPersonnelID?: string,
    Assignment?: string,
    AuthorityDate?: string
  }) {
    const resourcesUnitNarrative: ResourcesUnitNarrative = new ResourcesUnitNarrative();
    resourcesUnitNarrative.displayOrder = session.DisplayOrder;
    resourcesUnitNarrative.personnel = session.Personnel;
    resourcesUnitNarrative.responsibleFullReport = session.ResponsibleFullReport;
    resourcesUnitNarrative.noReport = session.NoReport;
    resourcesUnitNarrative.narrativeText = session.Narrative;
    resourcesUnitNarrative.unitReportByPersonnelId = session.UnitReportByPersonnelID;
    resourcesUnitNarrative.assignmentCode = session.Assignment;
    resourcesUnitNarrative.authorityDate = session.AuthorityDate;
    return resourcesUnitNarrative;
  }

  /**
   * Populates the Incident Resources Unit Narrative data
   *
   * These fields are currently not being handled because their is no associated form control:
   *
   * UnitReportStatus
   * personnelName
   * MutualAidUnit
   *
   * @param {Map<string, FormControl>} formControls
   * @param ols
   */
  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('Unit'), this.unitId);
    FormStateService.initializeFormControlValue(formControls.get('Personnel'), this.personnel);
    FormStateService.initializeFormControlValue(formControls.get('ResponsibleFullReport'), this.responsibleFullReport);
    FormStateService.initializeFormControlValue(formControls.get('NoReport'), this.noReport);
    FormStateService.initializeFormControlValue(formControls.get('Narrative'), this.narrativeText);
    FormStateService.initializeFormControlValue(formControls.get('UnitReportByPersonnelID'), this.unitReportByPersonnelId);
    FormStateService.initializeFormControlValue(formControls.get('UnitReportByRank'), this.unitReportByRank);
    FormStateService.initializeFormControlValue(formControls.get('UnitReportByFirstName'), this.unitReportByFirstName);
    FormStateService.initializeFormControlValue(formControls.get('UnitReportByLastName'), this.unitReportByLastName);
    FormStateService.initializeFormControlValue(formControls.get('UnitReportByMiddleInitial'), this.unitReportByMiddleInitial);
    FormStateService.initializeFormControlValue(formControls.get('Assignment'), ols.getOptionForSessionAndCode('Lookup.OS.IM.UsualAssignment', this.assignmentCode));
    FormStateService.initializeFormControlValue(formControls.get('AuthorityDate'), DataUtils.formatDateString(this.authorityDate));
  }
}
