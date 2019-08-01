import { FormControl } from '@angular/forms';
import { LookupService } from '../../core/services/lookup.service';
import { FormStateService } from '../../core/services/form-state.service';

export class FireIgnitionDetails {

  public static readonly SESSION_NAME = 'Session.OS.IM.FireIgnitionDetails';

  buildingsNotInvolved: boolean;
  notResidential: boolean;
  acresBurnedNone: boolean;
  lessThanOneAcreBurned: boolean;
  arsonCaseNumber: string;
  restrictedAccess: string;
  buildingsInvolved: string;
  residentialUnits: string;
  acresBurned: string;
  structureTypeCode: string;
  areaOfOriginCode: string;
  heatSourceCode: string;
  itemFirstIgnitedCode: string;
  typeOfMaterialFirstIgnitedCode: string;
  confinedToOrigin: boolean;
  causeOfIgnitionCode: string;
  factorContributingToIgnition1Code: string;
  factorContributingToIgnition2Code: string;
  factorContributingToIgnitionNone: boolean;
  fireSuppressionFactor1Code: string;
  fireSuppressionFactor2Code: string;
  fireSuppressionFactor3Code: string;
  fireSuppressionFactorNone: boolean;
  humanFactorAsleep: boolean;
  humanFactorPossibleAlcohol: boolean;
  humanFactorUnattendedPerson: boolean;
  humanFactorMentallyDisabled: boolean;
  humanFactorPhysicallyDisabled: boolean;
  humanFactorMultiplePersons: boolean;
  humanFactorAgeFactor: boolean;
  humanFactorNone: boolean;
  humanFactorGenderCode: string;
  humanFactorAge: string;
  onSiteMaterialNone: boolean;
  onSiteMaterial1Code: string;
  onSiteMaterial2Code: string;
  onSiteMaterial3Code: string;
  onSiteMaterialStorageUse1Code: string;
  onSiteMaterialStorageUse2Code: string;
  onSiteMaterialStorageUse3Code: string;


  /**
   * Create a CivilianInjury Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    BuildingsNotInvolved?: boolean,
    NotResidential?: boolean,
    AcresBurnedNone?: boolean,
    LessThanOneAcreBurned?: boolean,
    ArsonCaseNumber?: string,
    RestrictedAccess?: string,
    BuildingsInvolved?: string,
    ResidentialUnits?: string,
    AcresBurned?: string,
    StructureType?: string,
    AreaOfOrigin?: string,
    HeatSource?: string,
    ItemFirstIgnited?: string,
    TypeOfMaterialFirstIgnited?: string,
    FireSpread?: boolean,
    CauseOfIgnition?: string,
    FactorContributingToIgnition1?: string,
    FactorContributingToIgnition2?: string,
    FactorContributingToIgnitionNone?: boolean,
    SuppressionFactor1?: string,
    SuppressionFactor2?: string,
    SuppressionFactor3?: string,
    SuppressionFactorNone?: boolean,
    HumanFactorAsleep?: boolean,
    HumanFactorPossibleAlcohol?: boolean,
    HumanFactorUnattendedPerson?: boolean,
    HumanFactorMentallyDisabled?: boolean,
    HumanFactorPhysicallyDisabled?: boolean,
    HumanFactorMultiplePersons?: boolean,
    HumanFactorAgeFactor?: boolean,
    HumanFactorNone?: boolean,
    HumanFactorGender?: string,
    HumanFactorAge?: string,
    OnSiteMaterialNone?: boolean,
    OnSiteMaterial1?: string,
    OnSiteMaterial2?: string,
    OnSiteMaterial3?: string,
    OnSiteMaterialStorageUse1?: string,
    OnSiteMaterialStorageUse2?: string,
    OnSiteMaterialStorageUse3?: string,
  }) {
    const fireIgnitionDetails: FireIgnitionDetails = new FireIgnitionDetails();
    fireIgnitionDetails.buildingsNotInvolved = session.BuildingsNotInvolved;
    fireIgnitionDetails.notResidential = session.NotResidential;
    fireIgnitionDetails.acresBurnedNone = session.AcresBurnedNone;
    fireIgnitionDetails.lessThanOneAcreBurned = session.LessThanOneAcreBurned;
    fireIgnitionDetails.arsonCaseNumber = session.ArsonCaseNumber;
    fireIgnitionDetails.restrictedAccess = session.RestrictedAccess;
    fireIgnitionDetails.buildingsInvolved = session.BuildingsInvolved;
    fireIgnitionDetails.residentialUnits = session.ResidentialUnits;
    fireIgnitionDetails.acresBurned = session.AcresBurned;
    fireIgnitionDetails.structureTypeCode = session.StructureType;
    fireIgnitionDetails.areaOfOriginCode = session.AreaOfOrigin;
    fireIgnitionDetails.heatSourceCode = session.HeatSource;
    fireIgnitionDetails.itemFirstIgnitedCode = session.ItemFirstIgnited;
    fireIgnitionDetails.typeOfMaterialFirstIgnitedCode = session.TypeOfMaterialFirstIgnited;
    fireIgnitionDetails.confinedToOrigin = session.FireSpread;
    fireIgnitionDetails.causeOfIgnitionCode = session.CauseOfIgnition;
    fireIgnitionDetails.factorContributingToIgnition1Code = session.FactorContributingToIgnition1;
    fireIgnitionDetails.factorContributingToIgnition2Code = session.FactorContributingToIgnition2;
    fireIgnitionDetails.factorContributingToIgnitionNone = session.FactorContributingToIgnitionNone;
    fireIgnitionDetails.fireSuppressionFactor1Code = session.SuppressionFactor1;
    fireIgnitionDetails.fireSuppressionFactor2Code = session.SuppressionFactor2;
    fireIgnitionDetails.fireSuppressionFactor3Code = session.SuppressionFactor3;
    fireIgnitionDetails.fireSuppressionFactorNone = session.SuppressionFactorNone;
    fireIgnitionDetails.humanFactorAsleep = session.HumanFactorAsleep;
    fireIgnitionDetails.humanFactorPossibleAlcohol = session.HumanFactorPossibleAlcohol;
    fireIgnitionDetails.humanFactorUnattendedPerson = session.HumanFactorUnattendedPerson;
    fireIgnitionDetails.humanFactorMentallyDisabled = session.HumanFactorMentallyDisabled;
    fireIgnitionDetails.humanFactorPhysicallyDisabled = session.HumanFactorPhysicallyDisabled;
    fireIgnitionDetails.humanFactorMultiplePersons = session.HumanFactorMultiplePersons;
    fireIgnitionDetails.humanFactorAgeFactor = session.HumanFactorAgeFactor;
    fireIgnitionDetails.humanFactorNone = session.HumanFactorNone;
    fireIgnitionDetails.humanFactorGenderCode = session.HumanFactorGender;
    fireIgnitionDetails.humanFactorAge = session.HumanFactorAge;
    fireIgnitionDetails.onSiteMaterialNone = session.OnSiteMaterialNone;
    fireIgnitionDetails.onSiteMaterial1Code = session.OnSiteMaterial1;
    fireIgnitionDetails.onSiteMaterial2Code = session.OnSiteMaterial2;
    fireIgnitionDetails.onSiteMaterial3Code = session.OnSiteMaterial3;
    fireIgnitionDetails.onSiteMaterialStorageUse1Code = session.OnSiteMaterialStorageUse1;
    fireIgnitionDetails.onSiteMaterialStorageUse2Code = session.OnSiteMaterialStorageUse2;
    fireIgnitionDetails.onSiteMaterialStorageUse3Code = session.OnSiteMaterialStorageUse3;
    return fireIgnitionDetails;
  }

  /**
   *
   * @param {Map<string, FormControl>} formControls
   * @param {LookupService} ols
   */
  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('BuildingsNotInvolved'), this.buildingsNotInvolved);
    FormStateService.initializeFormControlValue(formControls.get('NotResidential'), this.notResidential);
    FormStateService.initializeFormControlValue(formControls.get('AcresBurnedNone'), this.acresBurnedNone);
    FormStateService.initializeFormControlValue(formControls.get('LessThanOneAcreBurned'), this.lessThanOneAcreBurned);
    FormStateService.initializeFormControlValue(formControls.get('ArsonCaseNumber'), this.arsonCaseNumber);
    FormStateService.initializeFormControlValue(formControls.get('RestrictedAccess'), this.restrictedAccess);
    FormStateService.initializeFormControlValue(formControls.get('BuildingsInvolved'), this.buildingsInvolved);
    FormStateService.initializeFormControlValue(formControls.get('ResidentialUnits'), this.residentialUnits);
    FormStateService.initializeFormControlValue(formControls.get('AcresBurned'), this.acresBurned);
    FormStateService.initializeFormControlValue(formControls.get('StructureType'), ols.getOptionForSessionAndCode('Lookup.OS.IM.StructureType', this.structureTypeCode));
    FormStateService.initializeFormControlValue(formControls.get('AreaOfOrigin'), ols.getOptionForSessionAndCode('Lookup.OS.IM.AreaOfOrigin', this.areaOfOriginCode));
    FormStateService.initializeFormControlValue(formControls.get('HeatSource'), ols.getOptionForSessionAndCode('Lookup.OS.IM.HeatSource', this.heatSourceCode));
    FormStateService.initializeFormControlValue(formControls.get('ItemFirstIgnited'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ItemFirstIgnited', this.itemFirstIgnitedCode));
    FormStateService.initializeFormControlValue(formControls.get('TypeOfMaterialFirstIgnited'), ols.getOptionForSessionAndCode('Lookup.OS.IM.TypeOfMaterialFirstIgnited', this.typeOfMaterialFirstIgnitedCode));
    FormStateService.initializeFormControlValue(formControls.get('FireSpread'), this.confinedToOrigin);
    FormStateService.initializeFormControlValue(formControls.get('CauseOfIgnition'), ols.getOptionForSessionAndCode('Lookup.OS.IM.CauseOfIgnition', this.causeOfIgnitionCode));
    FormStateService.initializeFormControlValue(formControls.get('FactorContributingToIgnition1'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FactorContributingToIgnition', this.factorContributingToIgnition1Code));
    FormStateService.initializeFormControlValue(formControls.get('FactorContributingToIgnition2'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FactorContributingToIgnition', this.factorContributingToIgnition2Code));
    FormStateService.initializeFormControlValue(formControls.get('FactorContributingToIgnitionNone'), this.factorContributingToIgnitionNone);
    FormStateService.initializeFormControlValue(formControls.get('SuppressionFactor1'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FireSuppressionFactor', this.fireSuppressionFactor1Code));
    FormStateService.initializeFormControlValue(formControls.get('SuppressionFactor2'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FireSuppressionFactor', this.fireSuppressionFactor2Code));
    FormStateService.initializeFormControlValue(formControls.get('SuppressionFactor3'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FireSuppressionFactor', this.fireSuppressionFactor3Code));
    FormStateService.initializeFormControlValue(formControls.get('SuppressionFactorNone'), this.fireSuppressionFactorNone);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorAsleep'), this.humanFactorAsleep);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorPossibleAlcohol'), this.humanFactorPossibleAlcohol);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorUnattendedPerson'), this.humanFactorUnattendedPerson);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorMentallyDisabled'), this.humanFactorMentallyDisabled);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorPhysicallyDisabled'), this.humanFactorPhysicallyDisabled);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorMultiplePersons'), this.humanFactorMultiplePersons);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorAgeFactor'), this.humanFactorAgeFactor);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorNone'), !!this.humanFactorNone);    // We need to always pass this as non-null (i.e. the !!) to make sure a rule triggers
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorGender'), ols.getOptionForSessionAndCode('Lookup.OS.IM.HumanFactorGender', this.humanFactorGenderCode));
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorAge'), this.humanFactorAge);
    FormStateService.initializeFormControlValue(formControls.get('OnSiteMaterialNone'), this.onSiteMaterialNone);
    FormStateService.initializeFormControlValue(formControls.get('OnSiteMaterial1'), ols.getOptionForSessionAndCode('Lookup.OS.IM.OnSiteMaterial', this.onSiteMaterial1Code));
    FormStateService.initializeFormControlValue(formControls.get('OnSiteMaterial2'), ols.getOptionForSessionAndCode('Lookup.OS.IM.OnSiteMaterial', this.onSiteMaterial2Code));
    FormStateService.initializeFormControlValue(formControls.get('OnSiteMaterial3'), ols.getOptionForSessionAndCode('Lookup.OS.IM.OnSiteMaterial', this.onSiteMaterial3Code));
    FormStateService.initializeFormControlValue(formControls.get('OnSiteMaterialStorageUse1'), ols.getOptionForSessionAndCode('Lookup.OS.IM.OnSiteMaterialStorageUse', this.onSiteMaterialStorageUse1Code));
    FormStateService.initializeFormControlValue(formControls.get('OnSiteMaterialStorageUse2'), ols.getOptionForSessionAndCode('Lookup.OS.IM.OnSiteMaterialStorageUse', this.onSiteMaterialStorageUse2Code));
    FormStateService.initializeFormControlValue(formControls.get('OnSiteMaterialStorageUse3'), ols.getOptionForSessionAndCode('Lookup.OS.IM.OnSiteMaterialStorageUse', this.onSiteMaterialStorageUse3Code));
  }
}
