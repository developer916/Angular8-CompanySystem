import { FormControl } from '@angular/forms';
import { LookupService } from '../../core/services/lookup.service';
import { FormStateService } from '../../core/services/form-state.service';

export class WildlandIgnitionDetails {

  public static readonly SESSION_NAME = 'Session.OS.IM.WildlandIgnitionDetails';

  wildlandFireCauseCode: string;
  heatSourceCode: string;
  fuelModelAtOriginCode: string;
  humanFactorNone: boolean;
  humanFactorMentallyDisabled: boolean;
  humanFactorUnattendedPerson: boolean;
  humanFactorAsleep: boolean;
  humanFactorPhysicallyDisabled: boolean;
  humanFactorMultiplePersons: boolean;
  humanFactorAlcoholDrug: boolean;
  humanFactorAgeRelated: boolean;
  factorContributingToIgnition1Code: string;
  factorContributingToIgnition2Code: string;
  weatherStationId: string;
  weatherFireDangerCode: string;
  weatherTypeCode: string;
  weatherWindDirectionCode: string;
  weatherWindSpeedMilesPerHour: string;
  weatherAirTemperatureDegreeFahrenheit: string;
  weatherRelativeHumidityPercent: string;
  weatherFuelMoisturePercent: string;
  fireSuppressionFactor1Code: string;
  fireSuppressionFactor2Code: string;
  fireSuppressionFactor3Code: string;
  fireBehaviorElevationInFeet: string;
  fireBehaviorRelativePositionCode: string;
  fireBehaviorAspectCode: string;
  fireBehaviorFlameLengthInFeet: string;
  fireBehaviorRateOfSpreadChainsPerHour: string;


  /**
   * Create a WildlandIgnitionDetails Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    WildlandFireCause?: string,
    HeatSource?: string,
    FuelModelAtOrigin?: string,
    HumanFactorNone?: boolean,
    HumanFactorMentallyDisabled?: boolean,
    HumanFactorUnattendedPerson?: boolean,
    HumanFactorAsleep?: boolean,
    HumanFactorPhysicallyDisabled?: boolean,
    HumanFactorMultiplePersons?: boolean,
    HumanFactorAlcoholDrug?: boolean,
    HumanFactorAgeRelated?: boolean,
    FactorContributingToIgnition1?: string,
    FactorContributingToIgnition2?: string,
    WeatherStationID?: string,
    WeatherFireDanger?: string,
    WeatherType?: string,
    WeatherWindDirection?: string,
    WeatherWindSpeedMilesPerHour?: string,
    WeatherAirTemperatureDegreeFahrenheit?: string,
    WeatherRelativeHumidityPercent?: string,
    WeatherFuelMoisturePercent?: string,
    SuppressionFactor1?: string,
    SuppressionFactor2?: string,
    SuppressionFactor3?: string,
    FireBehaviorElevationInFeet?: string,
    FireBehaviorRelativePosition?: string,
    FireBehaviorAspect?: string,
    FireBehaviorFlameLengthInFeet?: string,
    FireBehaviorRateOfSpreadChainsPerHour?: string,
  }) {
    const wildlandIgnitionDetails: WildlandIgnitionDetails = new WildlandIgnitionDetails();
    wildlandIgnitionDetails.wildlandFireCauseCode = session.WildlandFireCause;
    wildlandIgnitionDetails.heatSourceCode = session.HeatSource;
    wildlandIgnitionDetails.fuelModelAtOriginCode = session.FuelModelAtOrigin;
    wildlandIgnitionDetails.humanFactorNone = session.HumanFactorNone;
    wildlandIgnitionDetails.humanFactorMentallyDisabled = session.HumanFactorMentallyDisabled;
    wildlandIgnitionDetails.humanFactorUnattendedPerson = session.HumanFactorUnattendedPerson;
    wildlandIgnitionDetails.humanFactorAsleep = session.HumanFactorAsleep;
    wildlandIgnitionDetails.humanFactorPhysicallyDisabled = session.HumanFactorPhysicallyDisabled;
    wildlandIgnitionDetails.humanFactorMultiplePersons = session.HumanFactorMultiplePersons;
    wildlandIgnitionDetails.humanFactorAlcoholDrug = session.HumanFactorAlcoholDrug;
    wildlandIgnitionDetails.humanFactorAgeRelated = session.HumanFactorAgeRelated;
    wildlandIgnitionDetails.factorContributingToIgnition1Code = session.FactorContributingToIgnition1;
    wildlandIgnitionDetails.factorContributingToIgnition2Code = session.FactorContributingToIgnition2;
    wildlandIgnitionDetails.weatherStationId = session.WeatherStationID;
    wildlandIgnitionDetails.weatherFireDangerCode = session.WeatherFireDanger;
    wildlandIgnitionDetails.weatherTypeCode = session.WeatherType;
    wildlandIgnitionDetails.weatherWindDirectionCode = session.WeatherWindDirection;
    wildlandIgnitionDetails.weatherWindSpeedMilesPerHour = session.WeatherWindSpeedMilesPerHour;
    wildlandIgnitionDetails.weatherAirTemperatureDegreeFahrenheit = session.WeatherAirTemperatureDegreeFahrenheit;
    wildlandIgnitionDetails.weatherRelativeHumidityPercent = session.WeatherRelativeHumidityPercent;
    wildlandIgnitionDetails.weatherFuelMoisturePercent = session.WeatherFuelMoisturePercent;
    wildlandIgnitionDetails.fireSuppressionFactor1Code = session.SuppressionFactor1;
    wildlandIgnitionDetails.fireSuppressionFactor2Code = session.SuppressionFactor2;
    wildlandIgnitionDetails.fireSuppressionFactor3Code = session.SuppressionFactor3;
    wildlandIgnitionDetails.fireBehaviorElevationInFeet = session.FireBehaviorElevationInFeet;
    wildlandIgnitionDetails.fireBehaviorRelativePositionCode = session.FireBehaviorRelativePosition;
    wildlandIgnitionDetails.fireBehaviorAspectCode = session.FireBehaviorAspect;
    wildlandIgnitionDetails.fireBehaviorFlameLengthInFeet = session.FireBehaviorFlameLengthInFeet;
    wildlandIgnitionDetails.fireBehaviorRateOfSpreadChainsPerHour = session.FireBehaviorRateOfSpreadChainsPerHour;
    return wildlandIgnitionDetails;
  }

  /**
   *
   * @param {Map<string, FormControl>} formControls
   * @param {LookupService} ols
   */
  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('WildlandFireCause'), ols.getOptionForSessionAndCode('Lookup.OS.IM.WildlandFireCause', this.wildlandFireCauseCode));
    FormStateService.initializeFormControlValue(formControls.get('HeatSource'), ols.getOptionForSessionAndCode('Lookup.OS.IM.HeatSource', this.heatSourceCode));
    FormStateService.initializeFormControlValue(formControls.get('FuelModelAtOrigin'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FuelModelAtOrigin', this.fuelModelAtOriginCode));
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorNone'), !!this.humanFactorNone);    // We need to always pass this as non-null (i.e. the !!) to make sure a rule triggers
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorMentallyDisabled'), this.humanFactorMentallyDisabled);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorUnattendedPerson'), this.humanFactorUnattendedPerson);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorAsleep'), this.humanFactorAsleep);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorPhysicallyDisabled'), this.humanFactorPhysicallyDisabled);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorMultiplePersons'), this.humanFactorMultiplePersons);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorAlcoholDrug'), this.humanFactorAlcoholDrug);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorAgeRelated'), this.humanFactorAgeRelated);
    FormStateService.initializeFormControlValue(formControls.get('FactorContributingToIgnition1'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FactorContributingToIgnition', this.factorContributingToIgnition1Code));
    FormStateService.initializeFormControlValue(formControls.get('FactorContributingToIgnition2'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FactorContributingToIgnition', this.factorContributingToIgnition2Code));
    FormStateService.initializeFormControlValue(formControls.get('WeatherStationID'), this.weatherStationId);
    FormStateService.initializeFormControlValue(formControls.get('WeatherFireDanger'), ols.getOptionForSessionAndCode('Lookup.OS.IM.WeatherFireDanger', this.weatherFireDangerCode));
    FormStateService.initializeFormControlValue(formControls.get('WeatherType'), ols.getOptionForSessionAndCode('Lookup.OS.IM.WeatherType', this.weatherTypeCode));
    FormStateService.initializeFormControlValue(formControls.get('WeatherWindDirection'), ols.getOptionForSessionAndCode('Lookup.OS.IM.WeatherWindDirection', this.weatherWindDirectionCode));
    FormStateService.initializeFormControlValue(formControls.get('WeatherWindSpeedMilesPerHour'), this.weatherWindSpeedMilesPerHour);
    FormStateService.initializeFormControlValue(formControls.get('WeatherAirTemperatureDegreeFahrenheit'), this.weatherAirTemperatureDegreeFahrenheit);
    FormStateService.initializeFormControlValue(formControls.get('WeatherRelativeHumidityPercent'), this.weatherRelativeHumidityPercent);
    FormStateService.initializeFormControlValue(formControls.get('WeatherFuelMoisturePercent'), this.weatherFuelMoisturePercent);
    FormStateService.initializeFormControlValue(formControls.get('SuppressionFactor1'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FireSuppressionFactor', this.fireSuppressionFactor1Code));
    FormStateService.initializeFormControlValue(formControls.get('SuppressionFactor2'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FireSuppressionFactor', this.fireSuppressionFactor2Code));
    FormStateService.initializeFormControlValue(formControls.get('SuppressionFactor3'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FireSuppressionFactor', this.fireSuppressionFactor3Code));
    FormStateService.initializeFormControlValue(formControls.get('FireBehaviorElevationInFeet'), this.fireBehaviorElevationInFeet);
    FormStateService.initializeFormControlValue(formControls.get('FireBehaviorRelativePosition'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FireBehaviorRelativePosition', this.fireBehaviorRelativePositionCode));
    FormStateService.initializeFormControlValue(formControls.get('FireBehaviorAspect'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FireBehaviorAspect', this.fireBehaviorAspectCode));
    FormStateService.initializeFormControlValue(formControls.get('FireBehaviorFlameLengthInFeet'), this.fireBehaviorFlameLengthInFeet);
    FormStateService.initializeFormControlValue(formControls.get('FireBehaviorRateOfSpreadChainsPerHour'), this.fireBehaviorRateOfSpreadChainsPerHour);
  }
}
