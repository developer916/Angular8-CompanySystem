import { FormControl } from '@angular/forms';
import { DataUtils } from '../../core/services/data-utils';
import { LookupService } from '../../core/services/lookup.service';
import { FormStateService } from '../../core/services/form-state.service';

export class BasicSummary {

  public static readonly SESSION_NAME = 'Session.OS.IM.BasicSummary';

  civilianDeaths: number;
  civilianInjuries: number;
  fireServiceDeaths: number;
  fireServiceInjuries: number;
  mutualAidPersonnelEMS: number;
  mutualAidPersonnelOther: number;
  mutualAidPersonnelSuppression: number;
  mutualAidUnitEMS: number;
  mutualAidUnitOther: number;
  mutualAidUnitSuppression: number;
  officerAssignmentCode: string;
  officerAssignmentDesc: string;
  officerDate: string;
  officerFirstName: string;
  officerLastName: string;
  officerMiddleInitial: string;
  officerNameSuffix: string;
  officerPersonnelId: string;
  officerRank: string;
  personnelEMS: number;
  personnelOther: number;
  personnelSuppression: number;
  unitEMS: number;
  unitOther: number;
  unitSuppression: number;


  /**
   * Create a BasicSummary Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    CivilianDeaths?: number;
    CivilianInjuries?: number;
    FireServiceDeaths?: number;
    FireServiceInjuries?: number;
    MutualAidPersonnelEMS?: number;
    MutualAidPersonnelOther?: number;
    MutualAidPersonnelSuppression?: number;
    MutualAidUnitEMS?: number;
    MutualAidUnitOther?: number;
    MutualAidUnitSuppression?: number;
    OfficerAssignment?: string;
    OfficerDate?: string;
    PersonnelName?: string;
    PersonnelEMS?: number;
    PersonnelOther?: number;
    PersonnelSuppression?: number;
    UnitEMS?: number;
    UnitOther?: number;
    UnitSuppression?: number;
  }) {
    const basicSummary: BasicSummary = new BasicSummary();
    basicSummary.civilianDeaths = session.CivilianDeaths;
    basicSummary.civilianInjuries = session.CivilianInjuries;
    basicSummary.fireServiceDeaths = session.FireServiceDeaths;
    basicSummary.fireServiceInjuries = session.FireServiceInjuries;
    basicSummary.mutualAidPersonnelEMS = session.MutualAidPersonnelEMS;
    basicSummary.mutualAidPersonnelOther = session.MutualAidPersonnelOther;
    basicSummary.mutualAidPersonnelSuppression = session.MutualAidPersonnelSuppression;
    basicSummary.mutualAidUnitEMS = session.MutualAidUnitEMS;
    basicSummary.mutualAidUnitOther = session.MutualAidUnitOther;
    basicSummary.mutualAidUnitSuppression = session.MutualAidUnitSuppression;
    basicSummary.officerAssignmentCode = session.OfficerAssignment;
    basicSummary.officerDate = session.OfficerDate;
    basicSummary.officerPersonnelId = session.PersonnelName;
    basicSummary.personnelEMS = session.PersonnelEMS;
    basicSummary.personnelOther = session.PersonnelOther;
    basicSummary.personnelSuppression = session.PersonnelSuppression;
    basicSummary.unitEMS = session.UnitEMS;
    basicSummary.unitOther = session.UnitOther;
    basicSummary.unitSuppression = session.UnitSuppression;
    return basicSummary;
  }

  /**
   *
   * @param {Map<string, FormControl>} formControls
   * @param ols
   */
  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('PersonnelName'), ols.getOptionForSessionAndCode('Lookup.OS.AM.AgencyPersonnel', this.officerPersonnelId));
    FormStateService.initializeFormControlValue(formControls.get('OfficerAssignment'), ols.getOptionForSessionAndCode('Lookup.OS.IM.UsualAssignment', this.officerAssignmentCode));
    FormStateService.initializeFormControlValue(formControls.get('OfficerDate'), DataUtils.formatDateString(this.officerDate));
    FormStateService.initializeFormControlValue(formControls.get('MutualAidUnitSuppression'), this.mutualAidUnitSuppression);
    FormStateService.initializeFormControlValue(formControls.get('MutualAidUnitEMS'), this.mutualAidUnitEMS);
    FormStateService.initializeFormControlValue(formControls.get('MutualAidUnitOther'), this.mutualAidUnitOther);
    FormStateService.initializeFormControlValue(formControls.get('MutualAidPersonnelSuppression'), this.mutualAidPersonnelSuppression);
    FormStateService.initializeFormControlValue(formControls.get('MutualAidPersonnelEMS'), this.mutualAidPersonnelEMS);
    FormStateService.initializeFormControlValue(formControls.get('MutualAidPersonnelOther'), this.mutualAidPersonnelOther);
    FormStateService.initializeFormControlValue(formControls.get('FireServiceDeaths'), this.fireServiceDeaths);
    FormStateService.initializeFormControlValue(formControls.get('CivilianDeaths'), this.civilianDeaths);
    FormStateService.initializeFormControlValue(formControls.get('FireServiceInjuries'), this.fireServiceInjuries);
    FormStateService.initializeFormControlValue(formControls.get('CivilianInjuries'), this.civilianInjuries);
    FormStateService.initializeFormControlValue(formControls.get('UnitSuppression'), this.unitSuppression);
    FormStateService.initializeFormControlValue(formControls.get('UnitEMS'), this.unitEMS);
    FormStateService.initializeFormControlValue(formControls.get('UnitOther'), this.unitOther);
    FormStateService.initializeFormControlValue(formControls.get('PersonnelSuppression'), this.personnelSuppression);
    FormStateService.initializeFormControlValue(formControls.get('PersonnelEMS'), this.personnelEMS);
    FormStateService.initializeFormControlValue(formControls.get('PersonnelOther'), this.personnelOther);
  }
}
