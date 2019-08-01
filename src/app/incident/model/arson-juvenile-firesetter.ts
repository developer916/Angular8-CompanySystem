import { Entity } from 'ng2-hallelujah';
import { FormControl } from '@angular/forms';
import { LookupService } from '../../core/services/lookup.service';
import { FormStateService } from '../../core/services/form-state.service';
import { Arson } from './arson';
import { REST } from 'app/core/model/REST';
import { DataUtils } from 'app/core/services/data-utils';

export class ArsonJuvenileFiresetter extends Entity {

  public static readonly SESSION_NAME = 'Session.OS.IM.ArsonJuvenileFiresetter';
  public static readonly REL_NAME = 'arsonJuvenileFiresetter';

  @REST.ForeignEntityRef({isOwner: true})
  arson: Arson;

  idHash: string;
  displayOrder: number;
  subjectNumber: string;
  age: string;
  birthDate: string;
  genderCode: string;
  raceCode: string;
  ethnicityCode: string;
  familyTypeCode: string;
  dispositionPersonUnder18Code: string;
  motivationRiskFactorsCode: string;
  motivationRiskFactorsADD: boolean;
  motivationRiskFactorsAssault: boolean;
  motivationRiskFactorsOther: boolean;
  motivationRiskFactorsSchool: boolean;
  motivationRiskFactorsFiresetting: boolean;
  motivationRiskFactorsUnknown: boolean;
  motivationRiskFactorsStealing: boolean;
  motivationRiskFactorsTransiency: boolean;


  /**
   * Create a ArsonJuvenileFiresetter Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    DisplayOrder: string,
    SubjectNumber: string,
    Age: string,
    BirthDate: string,
    Gender: string,
    Race: string,
    Ethnicity: string,
    FamilyType: string,
    DispositionPersonUnder18: string,
    MotivationRiskFactors: string,
    MotivationRiskFactorsADD: boolean,
    MotivationRiskFactorsAssault: boolean;
    MotivationRiskFactorsOther: boolean;
    MotivationRiskFactorsSchool: boolean;
    MotivationRiskFactorsFiresetting: boolean;
    MotivationRiskFactorsUnknown: boolean;
    MotivationRiskFactorsStealing: boolean;
    MotivationRiskFactorsTransiency: boolean;
  }) {
    const arsonJuvenileFiresetter: ArsonJuvenileFiresetter = new ArsonJuvenileFiresetter();
    arsonJuvenileFiresetter.displayOrder = parseInt(session.DisplayOrder, 10);
    arsonJuvenileFiresetter.subjectNumber = session.SubjectNumber;
    arsonJuvenileFiresetter.age = session.Age;
    arsonJuvenileFiresetter.birthDate = session.BirthDate;
    arsonJuvenileFiresetter.genderCode = session.Gender;
    arsonJuvenileFiresetter.raceCode = session.Race;
    arsonJuvenileFiresetter.ethnicityCode = session.Ethnicity;
    arsonJuvenileFiresetter.familyTypeCode = session.FamilyType;
    arsonJuvenileFiresetter.dispositionPersonUnder18Code = session.DispositionPersonUnder18;
    arsonJuvenileFiresetter.motivationRiskFactorsCode = session.MotivationRiskFactors;
    arsonJuvenileFiresetter.motivationRiskFactorsADD = session.MotivationRiskFactorsADD;
    arsonJuvenileFiresetter.motivationRiskFactorsAssault = session.MotivationRiskFactorsAssault;
    arsonJuvenileFiresetter.motivationRiskFactorsOther = session.MotivationRiskFactorsOther;
    arsonJuvenileFiresetter.motivationRiskFactorsSchool = session.MotivationRiskFactorsSchool;
    arsonJuvenileFiresetter.motivationRiskFactorsFiresetting = session.MotivationRiskFactorsFiresetting;
    arsonJuvenileFiresetter.motivationRiskFactorsUnknown = session.MotivationRiskFactorsUnknown;
    arsonJuvenileFiresetter.motivationRiskFactorsStealing = session.MotivationRiskFactorsStealing;
    arsonJuvenileFiresetter.motivationRiskFactorsTransiency = session.MotivationRiskFactorsTransiency;
    return arsonJuvenileFiresetter;
  }

  /**
   * Populates the Incident ArsonJuvenileFiresetter Case Details form controls
   *
   * @param formControls
   * @param ols
   */
  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('SubjectNumber'), this.subjectNumber);
    FormStateService.initializeFormControlValue(formControls.get('Age'), this.age);
    FormStateService.initializeFormControlValue(formControls.get('BirthDate'), DataUtils.formatDateString(this.birthDate));
    FormStateService.initializeFormControlValue(formControls.get('Gender'), ols.getOptionForSessionAndCode('Lookup.OS.IM.Gender', this.genderCode));
    FormStateService.initializeFormControlValue(formControls.get('Race'), ols.getOptionForSessionAndCode('Lookup.OS.IM.Race', this.raceCode));
    FormStateService.initializeFormControlValue(formControls.get('Ethnicity'), ols.getOptionForSessionAndCode('Lookup.OS.IM.Ethnicity', this.ethnicityCode));
    FormStateService.initializeFormControlValue(formControls.get('FamilyType'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FamilyType', this.familyTypeCode));
    FormStateService.initializeFormControlValue(formControls.get('DispositionPersonUnder18'), ols.getOptionForSessionAndCode('Lookup.OS.IM.DispositionPersonUnder', this.dispositionPersonUnder18Code));
    FormStateService.initializeFormControlValue(formControls.get('MotivationRiskFactors'), ols.getOptionForSessionAndCode('Lookup.OS.IM.MotivationRiskFactors', this.motivationRiskFactorsCode));
    FormStateService.initializeFormControlValue(formControls.get('MotivationRiskFactorsADD'), this.motivationRiskFactorsADD);
    FormStateService.initializeFormControlValue(formControls.get('MotivationRiskFactorsAssault'), this.motivationRiskFactorsAssault);
    FormStateService.initializeFormControlValue(formControls.get('MotivationRiskFactorsOther'), this.motivationRiskFactorsOther);
    FormStateService.initializeFormControlValue(formControls.get('MotivationRiskFactorsSchool'), this.motivationRiskFactorsSchool);
    FormStateService.initializeFormControlValue(formControls.get('MotivationRiskFactorsFiresetting'), this.motivationRiskFactorsFiresetting);
    FormStateService.initializeFormControlValue(formControls.get('MotivationRiskFactorsUnknown'), this.motivationRiskFactorsUnknown);
    FormStateService.initializeFormControlValue(formControls.get('MotivationRiskFactorsStealing'), this.motivationRiskFactorsStealing);
    FormStateService.initializeFormControlValue(formControls.get('MotivationRiskFactorsTransiency'), this.motivationRiskFactorsTransiency);
  }
}
