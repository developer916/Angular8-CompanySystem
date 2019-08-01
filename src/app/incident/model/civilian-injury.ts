import { FormControl } from '@angular/forms';
import { LookupService } from '../../core/services/lookup.service';
import { FormStateService } from '../../core/services/form-state.service';
import { DataUtils } from '../../core/services/data-utils';

export class CivilianInjury {

  public static readonly SESSION_NAME = 'Session.OS.IM.CivilianInjury';

  namePrefix: string;
  firstName: string;
  middleInitial: string;
  lastName: string;
  nameSuffix: string;
  casualtyDateTime: string;
  age: string;
  ageInMonths: boolean;
  birthDate: string;
  severityCode: string;
  genderCode: string;
  raceCode: string;
  affiliationCode: string;
  ethnicityCode: string;
  primarySymptomCode: string;
  primaryBodyPartCode: string;
  transportToEMS: boolean;
  hazMatInvolved: boolean;
  dispositionComment: string;


  /**
   * Create a CivilianInjury Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    NamePrefix: string,
    FirstName: string,
    MiddleInitial: string,
    LastName: string,
    NameSuffix: string,
    CasualtyDateTime: string,
    Age: string,
    AgeInMonths: boolean,
    BirthDate: string,
    Severity: string,
    Gender: string,
    Race: string,
    Affiliation: string,
    Ethnicity: string,
    PrimarySymptom: string,
    PrimaryBodyPart: string,
    TransportToEMSFacility: boolean,
    HazMatInvolvedInInjury: boolean,
    DispositionComment: string
  }) {
    const civilianInjury: CivilianInjury = new CivilianInjury();
    civilianInjury.namePrefix = session.NamePrefix;
    civilianInjury.firstName = session.FirstName;
    civilianInjury.middleInitial = session.MiddleInitial;
    civilianInjury.lastName = session.LastName;
    civilianInjury.nameSuffix = session.NameSuffix;
    civilianInjury.casualtyDateTime = session.CasualtyDateTime;
    civilianInjury.age = session.Age;
    civilianInjury.ageInMonths = session.AgeInMonths;
    civilianInjury.birthDate = session.BirthDate;
    civilianInjury.severityCode = session.Severity;
    civilianInjury.genderCode = session.Gender;
    civilianInjury.raceCode = session.Race;
    civilianInjury.affiliationCode = session.Affiliation;
    civilianInjury.ethnicityCode = session.Ethnicity;
    civilianInjury.primarySymptomCode = session.PrimarySymptom;
    civilianInjury.primaryBodyPartCode = session.PrimaryBodyPart;
    civilianInjury.transportToEMS = session.TransportToEMSFacility;
    civilianInjury.hazMatInvolved = session.HazMatInvolvedInInjury;
    civilianInjury.dispositionComment = session.DispositionComment;
    return civilianInjury;
  }

  /**
   *
   * @param {Map<string, FormControl>} formControls
   * @param {LookupService} ols
   */
  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('NamePrefix'), ols.getOptionForSessionAndCode('Lookup.OS.IM.NamePrefix', this.namePrefix));
    FormStateService.initializeFormControlValue(formControls.get('FirstName'), this.firstName);
    FormStateService.initializeFormControlValue(formControls.get('MiddleInitial'), this.middleInitial);
    FormStateService.initializeFormControlValue(formControls.get('LastName'), this.lastName);
    FormStateService.initializeFormControlValue(formControls.get('NameSuffix'), ols.getOptionForSessionAndCode('Lookup.OS.IM.NameSuffix', this.nameSuffix));
    FormStateService.initializeFormControlValue(formControls.get('CasualtyDateTime'), DataUtils.formatDateTime(this.casualtyDateTime));
    FormStateService.initializeFormControlValue(formControls.get('AgeInMonths'), this.ageInMonths);
    FormStateService.initializeFormControlValue(formControls.get('Age'), this.age);
    FormStateService.initializeFormControlValue(formControls.get('BirthDate'), DataUtils.formatDateString(this.birthDate));
    FormStateService.initializeFormControlValue(formControls.get('Severity'), ols.getOptionForSessionAndCode('Lookup.OS.IM.Severity', this.severityCode));
    FormStateService.initializeFormControlValue(formControls.get('Gender'), ols.getOptionForSessionAndCode('Lookup.OS.IM.Gender', this.genderCode));
    FormStateService.initializeFormControlValue(formControls.get('Race'), ols.getOptionForSessionAndCode('Lookup.OS.IM.Race', this.raceCode));
    FormStateService.initializeFormControlValue(formControls.get('Affiliation'), ols.getOptionForSessionAndCode('Lookup.OS.IM.Affiliation', this.affiliationCode));
    FormStateService.initializeFormControlValue(formControls.get('Ethnicity'), ols.getOptionForSessionAndCode('Lookup.OS.IM.Ethnicity', this.ethnicityCode));
    FormStateService.initializeFormControlValue(formControls.get('PrimarySymptom'), ols.getOptionForSessionAndCode('Lookup.OS.IM.PrimarySymptom', this.primarySymptomCode));
    FormStateService.initializeFormControlValue(formControls.get('PrimaryBodyPart'), ols.getOptionForSessionAndCode('Lookup.OS.IM.PrimaryBodyPart', this.primaryBodyPartCode));
    FormStateService.initializeFormControlValue(formControls.get('TransportToEMSFacility'), this.transportToEMS);
    FormStateService.initializeFormControlValue(formControls.get('HazMatInvolvedInInjury'), this.hazMatInvolved);
    FormStateService.initializeFormControlValue(formControls.get('DispositionComment'), this.dispositionComment);
  }
}
