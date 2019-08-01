import { FormControl } from '@angular/forms';
import { LookupService } from '../../core/services/lookup.service';
import { FormStateService } from '../../core/services/form-state.service';

export class ArsonCaseDetails {

  public static readonly SESSION_NAME = 'Session.OS.IM.ArsonCaseDetails';

  caseStatusCode: string;
  apparentGroupInvolvementNone: boolean;
  apparentGroupInvolvement1Code: string;
  apparentGroupInvolvement2Code: string;
  apparentGroupInvolvement3Code: string;
  suspectedMotivationFactor1Code: string;
  suspectedMotivationFactor2Code: string;
  suspectedMotivationFactor3Code: string;
  availabilityMaterialFirstIgnitedCode: string;
  entryMethodCode: string;
  extentFireInvolvementCode: string;
  propertyOwnershipCode: string;
  incendiaryDevicesContainerCode: string;
  incendiaryDevicesContainerNone: boolean;
  incendiaryDevicesIgnitionCode: string;
  incendiaryDevicesIgnitionNone: boolean;
  incendiaryDevicesFuelCode: string;
  incendiaryDevicesFuelNone: boolean;
  laboratoryUsedNone: boolean;
  laboratoryUsedLocal: boolean;
  laboratoryUsedFBI: boolean;
  laboratoryUsedState: boolean;
  laboratoryUsedOtherFederal: boolean;
  laboratoryUsedATF: boolean;
  laboratoryUsedPrivate: boolean;
  otherInvestigativeCodeViolation: boolean;
  otherInvestigativeDrugActivity: boolean;
  otherInvestigativeStructureForSale: boolean;
  otherInvestigativeChangeInInsurance: boolean;
  otherInvestigativeStructureVacant: boolean;
  otherInvestigativeFinancialProblem: boolean;
  otherInvestigativeCrimeInvolved: boolean;
  otherInvestigativeCriminalActions: boolean;
  initialObservationWindowsAjar: boolean;
  initialObservationFireDeptForcedEntry: boolean;
  initialObservationDoorsAjar: boolean;
  initialObservationEntryPriorToArrival: boolean;
  initialObservationDoorsLocked: boolean;
  initialObservationSecuritySystemActive: boolean;
  initialObservationDoorsUnlocked: boolean;
  initialObservationSecuritySystemNotActive: boolean;


  /**
   * Create a ArsonCaseDetails Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    CaseStatus?: string,
    ApparentGroupInvolvementNone?: boolean,
    ApparentGroupInvolvement1?: string,
    ApparentGroupInvolvement2?: string,
    ApparentGroupInvolvement3?: string,
    SuspectedMotivationFactor1?: string,
    SuspectedMotivationFactor2?: string,
    SuspectedMotivationFactor3?: string,
    AvailabilityMaterialFirstIgnited?: string,
    EntryMethod?: string,
    ExtentFireInvolvement?: string,
    PropertyOwnership?: string,
    IncendiaryDevicesContainer?: string,
    IncendiaryDevicesContainerNone?: boolean,
    IncendiaryDevicesIgnition?: string,
    IncendiaryDevicesIgnitionNone?: boolean,
    IncendiaryDevicesFuel?: string,
    IncendiaryDevicesFuelNone?: boolean,
    LaboratoryUsedNone?: boolean,
    LaboratoryUsedLocal?: boolean,
    LaboratoryUsedFBI?: boolean,
    LaboratoryUsedState?: boolean,
    LaboratoryUsedOtherFederal?: boolean,
    LaboratoryUsedATF?: boolean,
    LaboratoryUsedOtherPrivate?: boolean,
    OtherInvestigativeCodeViolation?: boolean,
    OtherInvestigativeDrugActivity?: boolean,
    OtherInvestigativeStructureForSale?: boolean,
    OtherInvestigativeChangeInInsurance?: boolean,
    OtherInvestigativeStructureVacant?: boolean,
    OtherInvestigativeFinancialProblem?: boolean,
    OtherInvestigativeCrimeInvolved?: boolean,
    OtherInvestigativeCriminalActions?: boolean,
    InitialObservationWindowsAjar?: boolean,
    InitialObservationFireDeptForcedEntry?: boolean,
    InitialObservationDoorsLocked?: boolean,
    InitialObservationEntryPriorToArrival?: boolean,
    InitialObservationDoorsAjar?: boolean,
    InitialObservationSecuritySystemActive?: boolean,
    InitialObservationDoorsUnlocked?: boolean,
    InitialObservationSecuritySystemNotActive?: boolean,
  }) {
    const arsonCaseDetails: ArsonCaseDetails = new ArsonCaseDetails();
    arsonCaseDetails.caseStatusCode = session.CaseStatus;
    arsonCaseDetails.apparentGroupInvolvementNone = session.ApparentGroupInvolvementNone;
    arsonCaseDetails.apparentGroupInvolvement1Code = session.ApparentGroupInvolvement1;
    arsonCaseDetails.apparentGroupInvolvement2Code = session.ApparentGroupInvolvement2;
    arsonCaseDetails.apparentGroupInvolvement3Code = session.ApparentGroupInvolvement3;
    arsonCaseDetails.suspectedMotivationFactor1Code = session.SuspectedMotivationFactor1;
    arsonCaseDetails.suspectedMotivationFactor2Code = session.SuspectedMotivationFactor2;
    arsonCaseDetails.suspectedMotivationFactor3Code = session.SuspectedMotivationFactor3;
    arsonCaseDetails.availabilityMaterialFirstIgnitedCode = session.AvailabilityMaterialFirstIgnited;
    arsonCaseDetails.entryMethodCode = session.EntryMethod;
    arsonCaseDetails.extentFireInvolvementCode = session.ExtentFireInvolvement;
    arsonCaseDetails.propertyOwnershipCode = session.PropertyOwnership;
    arsonCaseDetails.incendiaryDevicesContainerCode = session.IncendiaryDevicesContainer;
    arsonCaseDetails.incendiaryDevicesContainerNone = session.IncendiaryDevicesContainerNone;
    arsonCaseDetails.incendiaryDevicesIgnitionCode = session.IncendiaryDevicesIgnition;
    arsonCaseDetails.incendiaryDevicesIgnitionNone = session.IncendiaryDevicesIgnitionNone;
    arsonCaseDetails.incendiaryDevicesFuelCode = session.IncendiaryDevicesFuel;
    arsonCaseDetails.incendiaryDevicesFuelNone = session.IncendiaryDevicesFuelNone;
    arsonCaseDetails.laboratoryUsedNone = session.LaboratoryUsedNone;
    arsonCaseDetails.laboratoryUsedLocal = session.LaboratoryUsedLocal;
    arsonCaseDetails.laboratoryUsedFBI = session.LaboratoryUsedFBI;
    arsonCaseDetails.laboratoryUsedState = session.LaboratoryUsedState;
    arsonCaseDetails.laboratoryUsedOtherFederal = session.LaboratoryUsedOtherFederal;
    arsonCaseDetails.laboratoryUsedATF = session.LaboratoryUsedATF;
    arsonCaseDetails.laboratoryUsedPrivate = session.LaboratoryUsedOtherPrivate;
    arsonCaseDetails.otherInvestigativeCodeViolation = session.OtherInvestigativeCodeViolation;
    arsonCaseDetails.otherInvestigativeDrugActivity = session.OtherInvestigativeDrugActivity;
    arsonCaseDetails.otherInvestigativeStructureForSale = session.OtherInvestigativeStructureForSale;
    arsonCaseDetails.otherInvestigativeChangeInInsurance = session.OtherInvestigativeChangeInInsurance;
    arsonCaseDetails.otherInvestigativeStructureVacant = session.OtherInvestigativeStructureVacant;
    arsonCaseDetails.otherInvestigativeFinancialProblem = session.OtherInvestigativeFinancialProblem;
    arsonCaseDetails.otherInvestigativeCrimeInvolved = session.OtherInvestigativeCrimeInvolved;
    arsonCaseDetails.otherInvestigativeCriminalActions = session.OtherInvestigativeCriminalActions;
    arsonCaseDetails.initialObservationWindowsAjar = session.InitialObservationWindowsAjar;
    arsonCaseDetails.initialObservationFireDeptForcedEntry = session.InitialObservationFireDeptForcedEntry;
    arsonCaseDetails.initialObservationDoorsAjar = session.InitialObservationDoorsAjar;
    arsonCaseDetails.initialObservationEntryPriorToArrival = session.InitialObservationEntryPriorToArrival;
    arsonCaseDetails.initialObservationDoorsLocked = session.InitialObservationDoorsLocked;
    arsonCaseDetails.initialObservationSecuritySystemActive = session.InitialObservationSecuritySystemActive;
    arsonCaseDetails.initialObservationDoorsUnlocked = session.InitialObservationDoorsUnlocked;
    arsonCaseDetails.initialObservationSecuritySystemNotActive = session.InitialObservationSecuritySystemNotActive;
    return arsonCaseDetails;
  }

  /**
   * Populates the Incident Arson Case Details form controls
   *
   * @param formControls
   * @param ols
   */
  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('CaseStatus'), ols.getOptionForSessionAndCode('Lookup.OS.IM.CaseStatus', this.caseStatusCode));
    FormStateService.initializeFormControlValue(formControls.get('ApparentGroupInvolvementNone'), this.apparentGroupInvolvementNone);
    FormStateService.initializeFormControlValue(formControls.get('ApparentGroupInvolvement1'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ApparentGroupInvolvement', this.apparentGroupInvolvement1Code));
    FormStateService.initializeFormControlValue(formControls.get('ApparentGroupInvolvement2'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ApparentGroupInvolvement', this.apparentGroupInvolvement2Code));
    FormStateService.initializeFormControlValue(formControls.get('ApparentGroupInvolvement3'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ApparentGroupInvolvement', this.apparentGroupInvolvement3Code));
    FormStateService.initializeFormControlValue(formControls.get('SuspectedMotivationFactor1'), ols.getOptionForSessionAndCode('Lookup.OS.IM.SuspectedMotivationFactor', this.suspectedMotivationFactor1Code));
    FormStateService.initializeFormControlValue(formControls.get('SuspectedMotivationFactor2'), ols.getOptionForSessionAndCode('Lookup.OS.IM.SuspectedMotivationFactor', this.suspectedMotivationFactor2Code));
    FormStateService.initializeFormControlValue(formControls.get('SuspectedMotivationFactor3'), ols.getOptionForSessionAndCode('Lookup.OS.IM.SuspectedMotivationFactor', this.suspectedMotivationFactor3Code));
    FormStateService.initializeFormControlValue(formControls.get('AvailabilityMaterialFirstIgnited'), ols.getOptionForSessionAndCode('Lookup.OS.IM.AvailabilityMaterialFirstIgnited', this.availabilityMaterialFirstIgnitedCode));
    FormStateService.initializeFormControlValue(formControls.get('EntryMethod'), ols.getOptionForSessionAndCode('Lookup.OS.IM.EntryMethod', this.entryMethodCode));
    FormStateService.initializeFormControlValue(formControls.get('ExtentFireInvolvement'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ExtentFireInvolvement', this.extentFireInvolvementCode));
    FormStateService.initializeFormControlValue(formControls.get('PropertyOwnership'), ols.getOptionForSessionAndCode('Lookup.OS.IM.PropertyOwnership', this.propertyOwnershipCode));
    FormStateService.initializeFormControlValue(formControls.get('IncendiaryDevicesContainer'), ols.getOptionForSessionAndCode('Lookup.OS.IM.IncendiaryDevicesContainer', this.incendiaryDevicesContainerCode));
    FormStateService.initializeFormControlValue(formControls.get('IncendiaryDevicesContainerNone'), this.incendiaryDevicesContainerNone);
    FormStateService.initializeFormControlValue(formControls.get('IncendiaryDevicesIgnition'), ols.getOptionForSessionAndCode('Lookup.OS.IM.IncendiaryDevicesIgnition', this.incendiaryDevicesIgnitionCode));
    FormStateService.initializeFormControlValue(formControls.get('IncendiaryDevicesIgnitionNone'), this.incendiaryDevicesIgnitionNone);
    FormStateService.initializeFormControlValue(formControls.get('IncendiaryDevicesFuel'), ols.getOptionForSessionAndCode('Lookup.OS.IM.IncendiaryDevicesFuel', this.incendiaryDevicesFuelCode));
    FormStateService.initializeFormControlValue(formControls.get('IncendiaryDevicesFuelNone'), this.incendiaryDevicesFuelNone);
    FormStateService.initializeFormControlValue(formControls.get('LaboratoryUsedNone'), this.laboratoryUsedNone);
    FormStateService.initializeFormControlValue(formControls.get('LaboratoryUsedLocal'), this.laboratoryUsedLocal);
    FormStateService.initializeFormControlValue(formControls.get('LaboratoryUsedFBI'), this.laboratoryUsedFBI);
    FormStateService.initializeFormControlValue(formControls.get('LaboratoryUsedState'), this.laboratoryUsedState);
    FormStateService.initializeFormControlValue(formControls.get('LaboratoryUsedOtherFederal'), this.laboratoryUsedOtherFederal);
    FormStateService.initializeFormControlValue(formControls.get('LaboratoryUsedATF'), this.laboratoryUsedATF);
    FormStateService.initializeFormControlValue(formControls.get('LaboratoryUsedOtherPrivate'), this.laboratoryUsedPrivate);
    FormStateService.initializeFormControlValue(formControls.get('OtherInvestigativeCodeViolation'), this.otherInvestigativeCodeViolation);
    FormStateService.initializeFormControlValue(formControls.get('OtherInvestigativeDrugActivity'), this.otherInvestigativeDrugActivity);
    FormStateService.initializeFormControlValue(formControls.get('OtherInvestigativeStructureForSale'), this.otherInvestigativeStructureForSale);
    FormStateService.initializeFormControlValue(formControls.get('OtherInvestigativeChangeInInsurance'), this.otherInvestigativeChangeInInsurance);
    FormStateService.initializeFormControlValue(formControls.get('OtherInvestigativeStructureVacant'), this.otherInvestigativeStructureVacant);
    FormStateService.initializeFormControlValue(formControls.get('OtherInvestigativeFinancialProblem'), this.otherInvestigativeFinancialProblem);
    FormStateService.initializeFormControlValue(formControls.get('OtherInvestigativeCrimeInvolved'), this.otherInvestigativeCrimeInvolved);
    FormStateService.initializeFormControlValue(formControls.get('OtherInvestigativeCriminalActions'), this.otherInvestigativeCriminalActions);
    FormStateService.initializeFormControlValue(formControls.get('InitialObservationWindowsAjar'), this.initialObservationWindowsAjar);
    FormStateService.initializeFormControlValue(formControls.get('InitialObservationFireDeptForcedEntry'), this.initialObservationFireDeptForcedEntry);
    FormStateService.initializeFormControlValue(formControls.get('InitialObservationDoorsLocked'), this.initialObservationDoorsLocked);
    FormStateService.initializeFormControlValue(formControls.get('InitialObservationEntryPriorToArrival'), this.initialObservationEntryPriorToArrival);
    FormStateService.initializeFormControlValue(formControls.get('InitialObservationDoorsAjar'), this.initialObservationDoorsAjar);
    FormStateService.initializeFormControlValue(formControls.get('InitialObservationSecuritySystemActive'), this.initialObservationSecuritySystemActive);
    FormStateService.initializeFormControlValue(formControls.get('InitialObservationDoorsUnlocked'), this.initialObservationDoorsUnlocked);
    FormStateService.initializeFormControlValue(formControls.get('InitialObservationSecuritySystemNotActive'), this.initialObservationSecuritySystemNotActive);
  }
}
