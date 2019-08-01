import { FormControl } from '@angular/forms';
import { LookupService } from '../../core/services/lookup.service';
import { FormStateService } from '../../core/services/form-state.service';
import {DataUtils} from "../../core/services/data-utils";

export class WildlandPropertyDetails {

  public static readonly SESSION_NAME = 'Session.OS.IM.WildlandPropertyDetails';

  areaTypeCode: string;
  mobilePropertyTypeCode: string;
  equipmentInvolvedInIgnitionCode: string;
  propertyUndetermined: boolean;
  propertyUndeterminedAcresBurnedPercent: number;
  propertyTaxPaying: boolean;
  propertyTaxPayingAcresBurnedPercent: number;
  propertyNonTaxPaying: boolean;
  propertyNonTaxPayingAcresBurnedPercent: number;
  propertyCity: boolean;
  propertyCityAcresBurnedPercent: number;
  propertyCountyParish: boolean;
  propertyCountyParishAcresBurnedPercent: number;
  propertyStateProvince: boolean;
  propertyStateProvinceAcresBurnedPercent: number;
  propertyFederal: boolean;
  propertyFederalAgencyCode: string;
  propertyFederalAcresBurnedPercent: number;
  propertyForeign: boolean;
  propertyForeignAcresBurnedPercent: number;
  propertyMilitary: boolean;
  propertyMilitaryAcresBurnedPercent: number;
  propertyOther: boolean;
  propertyOtherAcresBurnedPercent: number;
  buildingsIgnited: string;
  buildingsThreatened: string;
  totalAcresBurned: string;
  typeOfRightOfWayNone: boolean;
  typeOfRightOfWayCode: string;
  horizontalDistanceFromRightOfWay: string;
  responsibleKnownCode: string;
  responsibleGenderCode: string;
  responsibleAge: string;
  responsibleBirthDate: string;
  responsibleActivityCode: string;
  primaryCropBurned1: string;
  primaryCropBurned2: string;
  primaryCropBurned3: string;


  /**
   * Create a WildlandPropertyDetails Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    AreaType?: string,
    MobilePropertyType?: string,
    EquipmentInvolvedInIgnition?: string,
    PropertyUndetermined?: boolean,
    PropertyUndeterminedAcresBurnedPercent?: string,
    PropertyTaxPaying?: boolean,
    PropertyTaxPayingAcresBurnedPercent?: string,
    PropertyNonTaxPaying?: boolean,
    PropertyNonTaxPayingAcresBurnedPercent?: string,
    PropertyCity?: boolean,
    PropertyCityAcresBurnedPercent?: string,
    PropertyCounty?: boolean,
    PropertyCountyParishAcresBurnedPercent?: string,
    PropertyState?: boolean,
    PropertyStateProvinceAcresBurnedPercent?: string,
    PropertyFederal?: boolean,
    PropertyFederalAgency?: string,
    PropertyFederalAcresBurnedPercent?: string,
    PropertyForeign?: boolean,
    PropertyForeignAcresBurnedPercent?: string,
    PropertyMilitary?: boolean,
    PropertyMilitaryAcresBurnedPercent?: string,
    PropertyOther?: boolean,
    PropertyOtherAcresBurnedPercent?: string,
    BuildingsIgnitedCount?: string,
    BuildingsThreatenedCount?: string,
    TotalAcresBurned?: string,
    TypeOfRightOfWayNone?: boolean,
    TypeOfRightOfWay?: string,
    HorizontalDistanceFromRightOfWay?: string,
    PersonResponsible?: string,
    ResponsibleGender?: string,
    ResponsibleAge?: string,
    ResponsibleBirthDate?: string,
    ResponsibleActivity?: string,
    PrimaryCropBurned1?: string,
    PrimaryCropBurned2?: string,
    PrimaryCropBurned3?: string
  }) {
    const wildlandPropertyDetails: WildlandPropertyDetails = new WildlandPropertyDetails();
    wildlandPropertyDetails.areaTypeCode = session.AreaType;
    wildlandPropertyDetails.mobilePropertyTypeCode = session.MobilePropertyType;
    wildlandPropertyDetails.equipmentInvolvedInIgnitionCode = session.EquipmentInvolvedInIgnition;
    wildlandPropertyDetails.propertyUndetermined = session.PropertyUndetermined;
    wildlandPropertyDetails.propertyUndeterminedAcresBurnedPercent = parseInt(session.PropertyUndeterminedAcresBurnedPercent) || undefined;
    wildlandPropertyDetails.propertyTaxPaying = session.PropertyTaxPaying;
    wildlandPropertyDetails.propertyTaxPayingAcresBurnedPercent = parseInt(session.PropertyTaxPayingAcresBurnedPercent) || undefined;
    wildlandPropertyDetails.propertyNonTaxPaying = session.PropertyNonTaxPaying;
    wildlandPropertyDetails.propertyNonTaxPayingAcresBurnedPercent = parseInt(session.PropertyNonTaxPayingAcresBurnedPercent) || undefined;
    wildlandPropertyDetails.propertyCity = session.PropertyCity;
    wildlandPropertyDetails.propertyCityAcresBurnedPercent = parseInt(session.PropertyCityAcresBurnedPercent) || undefined;
    wildlandPropertyDetails.propertyCountyParish = session.PropertyCounty;
    wildlandPropertyDetails.propertyCountyParishAcresBurnedPercent = parseInt(session.PropertyCountyParishAcresBurnedPercent) || undefined;
    wildlandPropertyDetails.propertyStateProvince = session.PropertyState;
    wildlandPropertyDetails.propertyStateProvinceAcresBurnedPercent = parseInt(session.PropertyStateProvinceAcresBurnedPercent) || undefined;
    wildlandPropertyDetails.propertyFederal = session.PropertyFederal;
    wildlandPropertyDetails.propertyFederalAgencyCode = session.PropertyFederalAgency;
    wildlandPropertyDetails.propertyFederalAcresBurnedPercent = parseInt(session.PropertyFederalAcresBurnedPercent) || undefined;
    wildlandPropertyDetails.propertyForeign = session.PropertyForeign;
    wildlandPropertyDetails.propertyForeignAcresBurnedPercent = parseInt(session.PropertyForeignAcresBurnedPercent) || undefined;
    wildlandPropertyDetails.propertyMilitary = session.PropertyMilitary;
    wildlandPropertyDetails.propertyMilitaryAcresBurnedPercent = parseInt(session.PropertyMilitaryAcresBurnedPercent) || undefined;
    wildlandPropertyDetails.propertyOther = session.PropertyOther;
    wildlandPropertyDetails.propertyOtherAcresBurnedPercent = parseInt(session.PropertyOtherAcresBurnedPercent) || undefined;
    wildlandPropertyDetails.buildingsIgnited = session.BuildingsIgnitedCount;
    wildlandPropertyDetails.buildingsThreatened = session.BuildingsThreatenedCount;
    wildlandPropertyDetails.totalAcresBurned = session.TotalAcresBurned;
    wildlandPropertyDetails.typeOfRightOfWayNone = session.TypeOfRightOfWayNone;
    wildlandPropertyDetails.typeOfRightOfWayCode = session.TypeOfRightOfWay;
    wildlandPropertyDetails.horizontalDistanceFromRightOfWay = session.HorizontalDistanceFromRightOfWay;
    wildlandPropertyDetails.responsibleKnownCode = session.PersonResponsible;
    wildlandPropertyDetails.responsibleGenderCode = session.ResponsibleGender;
    wildlandPropertyDetails.responsibleAge = session.ResponsibleAge;
    wildlandPropertyDetails.responsibleBirthDate = session.ResponsibleBirthDate;
    wildlandPropertyDetails.responsibleActivityCode = session.ResponsibleActivity;
    wildlandPropertyDetails.primaryCropBurned1 = session.PrimaryCropBurned1;
    wildlandPropertyDetails.primaryCropBurned2 = session.PrimaryCropBurned2;
    wildlandPropertyDetails.primaryCropBurned3 = session.PrimaryCropBurned3;
    return wildlandPropertyDetails;
  }

  /**
   *
   * @param {Map<string, FormControl>} formControls
   * @param {LookupService} ols
   */
  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('AreaType'), ols.getOptionForSessionAndCode('Lookup.OS.IM.AreaType', this.areaTypeCode));
    FormStateService.initializeFormControlValue(formControls.get('MobilePropertyType'), ols.getOptionForSessionAndCode('Lookup.OS.IM.MobilePropertyType', this.mobilePropertyTypeCode));
    FormStateService.initializeFormControlValue(formControls.get('EquipmentInvolvedInIgnition'), ols.getOptionForSessionAndCode('Lookup.OS.IM.EquipmentInvolvedInIgnition', this.equipmentInvolvedInIgnitionCode));
    FormStateService.initializeFormControlValue(formControls.get('PropertyUndetermined'), this.propertyUndetermined);
    FormStateService.initializeFormControlValue(formControls.get('PropertyUndeterminedAcresBurnedPercent'), this.propertyUndeterminedAcresBurnedPercent * 100);
    FormStateService.initializeFormControlValue(formControls.get('PropertyTaxPaying'), this.propertyTaxPaying);
    FormStateService.initializeFormControlValue(formControls.get('PropertyTaxPayingAcresBurnedPercent'), this.propertyTaxPayingAcresBurnedPercent * 100);
    FormStateService.initializeFormControlValue(formControls.get('PropertyNonTaxPaying'), this.propertyNonTaxPaying);
    FormStateService.initializeFormControlValue(formControls.get('PropertyNonTaxPayingAcresBurnedPercent'), this.propertyNonTaxPayingAcresBurnedPercent * 100);
    FormStateService.initializeFormControlValue(formControls.get('PropertyCity'), this.propertyCity);
    FormStateService.initializeFormControlValue(formControls.get('PropertyCityAcresBurnedPercent'), this.propertyCityAcresBurnedPercent * 100 );
    FormStateService.initializeFormControlValue(formControls.get('PropertyCounty'), this.propertyCountyParish);
    FormStateService.initializeFormControlValue(formControls.get('PropertyCountyParishAcresBurnedPercent'), this.propertyCountyParishAcresBurnedPercent * 100);
    FormStateService.initializeFormControlValue(formControls.get('PropertyState'), this.propertyStateProvince);
    FormStateService.initializeFormControlValue(formControls.get('PropertyStateProvinceAcresBurnedPercent'), this.propertyStateProvinceAcresBurnedPercent * 100);
    FormStateService.initializeFormControlValue(formControls.get('PropertyFederal'), this.propertyFederal);
    FormStateService.initializeFormControlValue(formControls.get('PropertyFederalAgency'), ols.getOptionForSessionAndCode('Lookup.NFIRS.IM.WildlandFederalAgencyCodes', this.propertyFederalAgencyCode));
    FormStateService.initializeFormControlValue(formControls.get('PropertyFederalAcresBurnedPercent'), this.propertyFederalAcresBurnedPercent * 100);
    FormStateService.initializeFormControlValue(formControls.get('PropertyForeign'), this.propertyForeign);
    FormStateService.initializeFormControlValue(formControls.get('PropertyForeignAcresBurnedPercent'), this.propertyForeignAcresBurnedPercent * 100);
    FormStateService.initializeFormControlValue(formControls.get('PropertyMilitary'), this.propertyMilitary);
    FormStateService.initializeFormControlValue(formControls.get('PropertyMilitaryAcresBurnedPercent'), this.propertyMilitaryAcresBurnedPercent * 100);
    FormStateService.initializeFormControlValue(formControls.get('PropertyOther'), this.propertyOther);
    FormStateService.initializeFormControlValue(formControls.get('PropertyOtherAcresBurnedPercent'), this.propertyOtherAcresBurnedPercent * 100);
    FormStateService.initializeFormControlValue(formControls.get('BuildingsIgnitedCount'), this.buildingsIgnited);
    FormStateService.initializeFormControlValue(formControls.get('BuildingsThreatenedCount'), this.buildingsThreatened);
    FormStateService.initializeFormControlValue(formControls.get('TotalAcresBurned'), this.totalAcresBurned);
    FormStateService.initializeFormControlValue(formControls.get('TypeOfRightOfWayNone'), this.typeOfRightOfWayNone);
    FormStateService.initializeFormControlValue(formControls.get('TypeOfRightOfWay'), ols.getOptionForSessionAndCode('Lookup.OS.IM.TypeOfRightOfWay', this.typeOfRightOfWayCode));
    FormStateService.initializeFormControlValue(formControls.get('HorizontalDistanceFromRightOfWay'), this.horizontalDistanceFromRightOfWay);
    FormStateService.initializeFormControlValue(formControls.get('PersonResponsible'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ResponsiblePerson', this.responsibleKnownCode));
    FormStateService.initializeFormControlValue(formControls.get('ResponsibleGender'), ols.getOptionForSessionAndCode('Lookup.OS.IM.Gender', this.responsibleGenderCode));
    FormStateService.initializeFormControlValue(formControls.get('ResponsibleAge'), this.responsibleAge);
    FormStateService.initializeFormControlValue(formControls.get('ResponsibleBirthDate'), DataUtils.formatDateString(this.responsibleBirthDate));
    FormStateService.initializeFormControlValue(formControls.get('ResponsibleActivity'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ResponsibleActivity', this.responsibleActivityCode));
    FormStateService.initializeFormControlValue(formControls.get('PrimaryCropBurned1'), this.primaryCropBurned1);
    FormStateService.initializeFormControlValue(formControls.get('PrimaryCropBurned2'), this.primaryCropBurned2);
    FormStateService.initializeFormControlValue(formControls.get('PrimaryCropBurned3'), this.primaryCropBurned3);
  }
}
