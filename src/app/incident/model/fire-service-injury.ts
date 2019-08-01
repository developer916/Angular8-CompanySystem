import { FormControl } from '@angular/forms';
import { LookupService } from '../../core/services/lookup.service';
import { FormStateService } from '../../core/services/form-state.service';
import { DataUtils } from '../../core/services/data-utils';

export class FireServiceInjury {

  public static readonly SESSION_NAME = 'Session.OS.IM.FireServiceInjury';

  injuryDateTime: string;
  personnelId: string;
  rank: string;
  firstName: string;
  middleInitial: string;
  lastName: string;
  nameSuffix: string;
  responsesCount: string;
  age: string;
  birthDate: string;
  genderCode: string;
  careerCode: string;
  protectiveEquipmentFactor: boolean;
  primarySymptomCode: string;
  primaryBodyPartNone: boolean;
  primaryBodyPartCode: string;
  usualAssignmentCode: string;
  severityCode: string;
  physicalConditionPriorCode: string;
  notTransported: boolean;
  takenToCode: string;


  /**
   * Create a FireServiceInjury Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    PersonnelName: string,
    InjuryDateTime: string,
    PersonnelID: string,
    Rank: string,
    FirstName: string,
    MiddleInitial: string,
    LastName: string,
    NameSuffix: string,
    ResponsesCount: string,
    Age: string,
    BirthDate: string,
    Gender: string,
    Career: string,
    ProtectiveEquipmentFactor: boolean,
    PrimarySymptom: string,
    PrimaryBodyPartNone: boolean,
    PrimaryBodyPart: string,
    UsualAssignment: string,
    Severity: string,
    PhysicalConditionPrior: string,
    NotTransported: boolean,
    TakenTo: string
  }) {
    const fireServiceInjury: FireServiceInjury = new FireServiceInjury();
    fireServiceInjury.personnelId = session.PersonnelName;
    fireServiceInjury.injuryDateTime = session.InjuryDateTime;
    fireServiceInjury.rank = session.Rank;
    fireServiceInjury.firstName = session.FirstName;
    fireServiceInjury.middleInitial = session.MiddleInitial;
    fireServiceInjury.lastName = session.LastName;
    fireServiceInjury.nameSuffix = session.NameSuffix;
    fireServiceInjury.responsesCount = session.ResponsesCount;
    fireServiceInjury.age = session.Age;
    fireServiceInjury.birthDate = session.BirthDate;
    fireServiceInjury.genderCode = session.Gender;
    fireServiceInjury.careerCode = session.Career;
    fireServiceInjury.protectiveEquipmentFactor = session.ProtectiveEquipmentFactor;
    fireServiceInjury.primarySymptomCode = session.PrimarySymptom;
    fireServiceInjury.primaryBodyPartNone = session.PrimaryBodyPartNone;
    fireServiceInjury.primaryBodyPartCode = session.PrimaryBodyPart;
    fireServiceInjury.usualAssignmentCode = session.UsualAssignment;
    fireServiceInjury.severityCode = session.Severity;
    fireServiceInjury.physicalConditionPriorCode = session.PhysicalConditionPrior;
    fireServiceInjury.notTransported = session.NotTransported;
    fireServiceInjury.takenToCode = session.TakenTo;
    return fireServiceInjury;
  }

  /**
   *
   * @param {Map<string, FormControl>} formControls
   * @param {LookupService} ols
   */
  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('PersonnelName'), ols.getOptionForSessionAndCode('Lookup.OS.AM.AgencyPersonnel', this.personnelId));
    FormStateService.initializeFormControlValue(formControls.get('InjuryDateTime'), DataUtils.formatDateTime(this.injuryDateTime));
    FormStateService.initializeFormControlValue(formControls.get('Rank'), this.rank);
    FormStateService.initializeFormControlValue(formControls.get('FirstName'), this.firstName);
    FormStateService.initializeFormControlValue(formControls.get('MiddleInitial'), this.middleInitial);
    FormStateService.initializeFormControlValue(formControls.get('LastName'), this.lastName);
    FormStateService.initializeFormControlValue(formControls.get('NameSuffix'), ols.getOptionForSessionAndCode('Lookup.OS.IM.NameSuffix', this.nameSuffix));
    FormStateService.initializeFormControlValue(formControls.get('ResponsesCount'), this.responsesCount);
    FormStateService.initializeFormControlValue(formControls.get('Age'), this.age);
    FormStateService.initializeFormControlValue(formControls.get('BirthDate'), DataUtils.formatDateString(this.birthDate));
    FormStateService.initializeFormControlValue(formControls.get('Gender'), ols.getOptionForSessionAndCode('Lookup.OS.IM.Gender', this.genderCode));
    FormStateService.initializeFormControlValue(formControls.get('Career'), ols.getOptionForSessionAndCode('Lookup.OS.IM.Career', this.careerCode));
    FormStateService.initializeFormControlValue(formControls.get('ProtectiveEquipmentFactor'), this.protectiveEquipmentFactor);
    FormStateService.initializeFormControlValue(formControls.get('PrimarySymptom'), ols.getOptionForSessionAndCode('Lookup.OS.IM.PrimarySymptom', this.primarySymptomCode));
    FormStateService.initializeFormControlValue(formControls.get('PrimaryBodyPartNone'), this.primaryBodyPartNone);
    FormStateService.initializeFormControlValue(formControls.get('PrimaryBodyPart'), ols.getOptionForSessionAndCode('Lookup.OS.IM.BodyPartInjured', this.primaryBodyPartCode));
    FormStateService.initializeFormControlValue(formControls.get('UsualAssignment'), ols.getOptionForSessionAndCode('Lookup.OS.IM.UsualAssignment', this.usualAssignmentCode));
    FormStateService.initializeFormControlValue(formControls.get('Severity'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FirefighterSeverity', this.severityCode));
    FormStateService.initializeFormControlValue(formControls.get('PhysicalConditionPrior'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ConditionPrior', this.physicalConditionPriorCode));
    FormStateService.initializeFormControlValue(formControls.get('NotTransported'), this.notTransported);
    FormStateService.initializeFormControlValue(formControls.get('TakenTo'), ols.getOptionForSessionAndCode('Lookup.OS.IM.TakenTo', this.takenToCode));

  }
}
