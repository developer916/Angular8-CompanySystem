import { FormControl } from '@angular/forms';
import { LookupService } from '../../core/services/lookup.service';
import { FormStateService } from '../../core/services/form-state.service';

export class FireEquipmentDetails {

  public static readonly SESSION_NAME = 'Session.OS.IM.FireEquipmentDetails';

  equipmentInvolvedInIgnitionNone: boolean;
  equipmentInvolvedBrand: string;
  equipmentInvolvedModel: string;
  equipmentInvolvedSerialNumber: string;
  equipmentInvolvedTypeCode: string;
  equipmentInvolvedPowerCode: string;
  equipmentInvolvedPortabilityCode: string;
  equipmentInvolvedYear: string;
  mobilePropertyInvolvedNone: boolean;
  mobilePropertyInvolvedCode: string;
  mobilePropertyTypeCode: string;
  mobilePropertyMakeCode: string;
  mobilePropertyModel: string;
  mobilePropertyYear: string;
  mobilePropertyVehicleVIN: string;
  mobilePropertyLicensePlate: string;
  mobilePropertyState: string;


  /**
   * Create a FireEquipmentDetails Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    EquipmentInvolvedInIgnitionNone?: boolean,
    EquipmentInvolvedBrand?: string,
    EquipmentInvolvedModel?: string,
    EquipmentInvolvedSerialNumber?: string,
    EquipmentInvolvedType?: string,
    EquipmentInvolvedPower?: string,
    EquipmentInvolvedPortability?: string,
    EquipmentInvolvedYear?: string,
    MobilePropertyInvolvedNone?: boolean,
    MobilePropertyInvolved?: string,
    MobilePropertyType?: string,
    MobilePropertyMake?: string,
    MobilePropertyModel?: string,
    MobilePropertyYear?: string,
    MobilePropertyVehicleVIN?: string,
    MobilePropertyLicensePlate?: string,
    MobilePropertyState?: string
  }) {
    const fireEquipmentDetails: FireEquipmentDetails = new FireEquipmentDetails();
    fireEquipmentDetails.equipmentInvolvedInIgnitionNone = session.EquipmentInvolvedInIgnitionNone;
    fireEquipmentDetails.equipmentInvolvedBrand = session.EquipmentInvolvedBrand;
    fireEquipmentDetails.equipmentInvolvedModel = session.EquipmentInvolvedModel;
    fireEquipmentDetails.equipmentInvolvedSerialNumber = session.EquipmentInvolvedSerialNumber;
    fireEquipmentDetails.equipmentInvolvedTypeCode = session.EquipmentInvolvedType;
    fireEquipmentDetails.equipmentInvolvedPowerCode = session.EquipmentInvolvedPower;
    fireEquipmentDetails.equipmentInvolvedPortabilityCode = session.EquipmentInvolvedPortability;
    fireEquipmentDetails.equipmentInvolvedYear = session.EquipmentInvolvedYear;
    fireEquipmentDetails.mobilePropertyInvolvedNone = session.MobilePropertyInvolvedNone;
    fireEquipmentDetails.mobilePropertyInvolvedCode = session.MobilePropertyInvolved;
    fireEquipmentDetails.mobilePropertyTypeCode = session.MobilePropertyType;
    fireEquipmentDetails.mobilePropertyMakeCode = session.MobilePropertyMake;
    fireEquipmentDetails.mobilePropertyModel = session.MobilePropertyModel;
    fireEquipmentDetails.mobilePropertyYear = session.MobilePropertyYear;
    fireEquipmentDetails.mobilePropertyVehicleVIN = session.MobilePropertyVehicleVIN;
    fireEquipmentDetails.mobilePropertyLicensePlate = session.MobilePropertyLicensePlate;
    fireEquipmentDetails.mobilePropertyState = session.MobilePropertyState;
    return fireEquipmentDetails;
  }

  /**
   *
   * @param {Map<string, FormControl>} formControls
   * @param {LookupService} ols
   */
  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('EquipmentInvolvedInIgnitionNone'), this.equipmentInvolvedInIgnitionNone);
    FormStateService.initializeFormControlValue(formControls.get('EquipmentInvolvedBrand'), this.equipmentInvolvedBrand);
    FormStateService.initializeFormControlValue(formControls.get('EquipmentInvolvedModel'), this.equipmentInvolvedModel);
    FormStateService.initializeFormControlValue(formControls.get('EquipmentInvolvedSerialNumber'), this.equipmentInvolvedSerialNumber);
    FormStateService.initializeFormControlValue(formControls.get('EquipmentInvolvedType'), ols.getOptionForSessionAndCode('Lookup.OS.IM.EquipmentInvolvedInIgnition', this.equipmentInvolvedTypeCode));
    FormStateService.initializeFormControlValue(formControls.get('EquipmentInvolvedPower'), ols.getOptionForSessionAndCode('Lookup.OS.IM.EquipmentInvolvedPower', this.equipmentInvolvedPowerCode));
    FormStateService.initializeFormControlValue(formControls.get('EquipmentInvolvedPortability'), ols.getOptionForSessionAndCode('Lookup.OS.IM.EquipmentInvolvedPortability', this.equipmentInvolvedPortabilityCode));
    FormStateService.initializeFormControlValue(formControls.get('EquipmentInvolvedYear'), this.equipmentInvolvedYear);
    FormStateService.initializeFormControlValue(formControls.get('MobilePropertyInvolvedNone'), this.mobilePropertyInvolvedNone);
    FormStateService.initializeFormControlValue(formControls.get('MobilePropertyInvolved'), ols.getOptionForSessionAndCode('Lookup.OS.IM.MobilePropertyInvolved', this.mobilePropertyInvolvedCode));
    FormStateService.initializeFormControlValue(formControls.get('MobilePropertyType'), ols.getOptionForSessionAndCode('Lookup.OS.IM.MobilePropertyType', this.mobilePropertyTypeCode));
    FormStateService.initializeFormControlValue(formControls.get('MobilePropertyMake'), ols.getOptionForSessionAndCode('Lookup.OS.IM.MobilePropertyMake', this.mobilePropertyMakeCode));
    FormStateService.initializeFormControlValue(formControls.get('MobilePropertyModel'), this.mobilePropertyModel);
    FormStateService.initializeFormControlValue(formControls.get('MobilePropertyYear'), this.mobilePropertyYear);
    FormStateService.initializeFormControlValue(formControls.get('MobilePropertyVehicleVIN'), this.mobilePropertyVehicleVIN);
    FormStateService.initializeFormControlValue(formControls.get('MobilePropertyLicensePlate'), this.mobilePropertyLicensePlate);
    FormStateService.initializeFormControlValue(formControls.get('MobilePropertyState'), ols.getOptionForSessionAndCode( 'Lookup.OS.IM.StateTerritory', this.mobilePropertyState) );
  }
}
