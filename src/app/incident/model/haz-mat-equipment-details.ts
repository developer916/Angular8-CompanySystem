import { FormStateService } from 'app/core/services/form-state.service';
import { LookupService } from 'app/core/services/lookup.service';
import { FormControl } from '@angular/forms';

export class HazMatEquipmentDetails {
    equipmentInvolvedNone: boolean;
    equipmentInvolvedCode: string;
    equipmentInvolvedBrand: string;
    equipmentInvolvedModel: string;
    equipmentInvolvedYear: number;
    equipmentInvolvedSerialNumber: string;

    mobilePropertyInvolvedNone: boolean;
    mobilePropertyTypeCode: string;
    mobilePropertyMakeCode: string;
    mobilePropertyModel: string;
    mobilePropertyYear: number;
    mobilePropertyState: string;
    mobilePropertyLicensePlate: string;
    mobilePropertyDotNumber: string;

    public static fromSessionState(session: {
        EquipNone?: boolean,
        EquipType?: string,
        EquipBrand?: string,
        EquipModel?: string,
        EquipYear?: number,
        EquipSerialNo?: string,
        MobilePropNone?: boolean,
        MobilePropType?: string,
        MobilePropMake?: string,
        MobilePropModel?: string,
        MobilePropYear?: number,
        MobilePropState?: string,
        MobilePropLicense?: string,
        MobilePropDOT?: string
    }){
        const equip: HazMatEquipmentDetails = new HazMatEquipmentDetails();
        equip.equipmentInvolvedNone = session.EquipNone;
        equip.equipmentInvolvedCode = session.EquipType;
        equip.equipmentInvolvedBrand = session.EquipBrand;
        equip.equipmentInvolvedModel = session.EquipModel;
        equip.equipmentInvolvedYear = session.EquipYear;
        equip.equipmentInvolvedSerialNumber = session.EquipSerialNo;

        equip.mobilePropertyInvolvedNone = session.MobilePropNone;
        equip.mobilePropertyTypeCode = session.MobilePropType;
        equip.mobilePropertyMakeCode = session.MobilePropMake;
        equip.mobilePropertyModel = session.MobilePropModel;
        equip.mobilePropertyYear = session.MobilePropYear;
        equip.mobilePropertyState = session.MobilePropState;
        equip.mobilePropertyLicensePlate = session.MobilePropLicense;
        equip.mobilePropertyDotNumber = session.MobilePropDOT;
        return equip;
    }

    
    public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
        FormStateService.initializeFormControlValue(formControls.get('EquipNone'), this.equipmentInvolvedNone);
        FormStateService.initializeFormControlValue(formControls.get('EquipType'), ols.getOptionForSessionAndCode('Lookup.OS.IM.EquipmentInvolvedInIgnition', this.equipmentInvolvedCode));
        FormStateService.initializeFormControlValue(formControls.get('EquipBrand'), this.equipmentInvolvedBrand);
        FormStateService.initializeFormControlValue(formControls.get('EquipModel'), this.equipmentInvolvedModel);
        FormStateService.initializeFormControlValue(formControls.get('EquipYear'), this.equipmentInvolvedYear);
        FormStateService.initializeFormControlValue(formControls.get('EquipSerialNo'), this.equipmentInvolvedSerialNumber);
        
        FormStateService.initializeFormControlValue(formControls.get('MobilePropNone'), this.mobilePropertyInvolvedNone);
        FormStateService.initializeFormControlValue(formControls.get('MobilePropType'), ols.getOptionForSessionAndCode('Lookup.OS.IM.MobilePropertyType', this.mobilePropertyTypeCode));
        FormStateService.initializeFormControlValue(formControls.get('MobilePropMake'), ols.getOptionForSessionAndCode('Lookup.OS.IM.MobilePropertyMake', this.mobilePropertyMakeCode));
        FormStateService.initializeFormControlValue(formControls.get('MobilePropModel'), this.equipmentInvolvedModel);
        FormStateService.initializeFormControlValue(formControls.get('MobilePropYear'), this.equipmentInvolvedYear);
        FormStateService.initializeFormControlValue(formControls.get('MobilePropState'), ols.getOptionForSessionAndCode('Lookup.OS.IM.StateTerritory', this.mobilePropertyState));
        FormStateService.initializeFormControlValue(formControls.get('MobilePropLicense'), this.mobilePropertyLicensePlate);
        FormStateService.initializeFormControlValue(formControls.get('MobilePropDOT'), this.mobilePropertyDotNumber);
    }
    

}
