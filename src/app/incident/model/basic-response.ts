import { FormControl } from '@angular/forms';
import { DataUtils } from '../../core/services/data-utils';
import { LookupService } from '../../core/services/lookup.service';
import { FormStateService } from '../../core/services/form-state.service';


/**
 * Possible incident status states
 */
export enum BasicResponseStatus {
  OPEN = 'Open',
  CLOSED = 'Closed'
}

/**
 * Model Object representing that Basic Response data. Note that field names are meant to match those as returned from
 * the AlwaysOnScene API.
 */
export class BasicResponse {

  public static readonly SESSION_NAME = 'Session.OS.IM.BasicResponse';

  actionTaken1Code: string;
  actionTaken2Code: string;
  actionTaken3Code: string;
  alarmDateTime: string;
  alarmsCount: string;
  arrivalDateTime: string;
  casualties: boolean;
  census: string;
  city: string;
  lastUnitClearedDateTime: string;
  contentLoss: string;
  contentValue: string;
  controlledDateTime: string;
  detectorCode: string;
  directions: string;
  districtCode: string;
  emsProvided: boolean;
  eastWestDirection: string;
  exposureNumber: string;
  gpsLocation: string;
  hazMatReleasedCode: string;
  incidentTypeCode: string;
  latitude: string;
  locationTypeCode: string;
  longitude: string;
  meridian: string;
  mixedUseCode: string;
  mutualAidCode: string;
  northSouthDirection: string;
  propertyLoss: string;
  propertyUseCode: string;
  propertyValue: string;
  range: string;
  section: string;
  shift: string;
  state: string;
  station: string;
  status: string;
  streetAddress: {
    streetHighway: string;
    numberOrMile: string;
    apartment: string;
    streetPrefix: string;
    streetSuffix: string;
    streetType: string;
  };
  subSection: string;
  township: string;
  zipCode: string;


  /**
   * Create a BasicResponse Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    ActionTaken1?: string,
    ActionTaken2?: string,
    ActionTaken3?: string,
    ApartmentSuite?: string,
    Casualties?: boolean,
    Census?: string,
    City?: string,
    ContentLoss?: string,
    ContentValue?: string,
    ControlledDateTime?: string,
    Detector?: string,
    Directions?: string,
    EMSProvided?: boolean,
    EastWestDirection?: string,
    GPSLocation?: string,
    HazMatReleased?: string,
    IncidentType?: string,
    Latitude?: string,
    Location?: string,
    Longitude?: string,
    Meridian?: string,
    MixedUse?: string,
    MutualAid?: string,
    NorthSouthDirection?: string,
    PropertyLoss?: string,
    PropertyUse?: string,
    PropertyValue?: string,
    Range?: string,
    Section?: string,
    Shift?: string,
    State?: string,
    StreetHighway?: string,
    StreetNumber?: string,
    StreetPrefix?: string,
    StreetSuffix?: string,
    StreetType?: string,
    SubSection?: string,
    Township?: string,
    ZipCode?: string
  }): BasicResponse {
    const basicResponse: BasicResponse = new BasicResponse();
    basicResponse.actionTaken1Code = session.ActionTaken1;
    basicResponse.actionTaken2Code = session.ActionTaken2;
    basicResponse.actionTaken3Code = session.ActionTaken3;
    basicResponse.casualties = session.Casualties;
    basicResponse.census = session.Census;
    basicResponse.city = session.City;
    basicResponse.contentLoss = session.ContentLoss;
    basicResponse.contentValue = session.ContentValue;
    basicResponse.controlledDateTime = session.ControlledDateTime;
    basicResponse.detectorCode = session.Detector;
    basicResponse.directions = session.Directions;
    basicResponse.emsProvided = session.EMSProvided;
    basicResponse.eastWestDirection = session.EastWestDirection;
    basicResponse.gpsLocation = session.GPSLocation;
    basicResponse.hazMatReleasedCode = session.HazMatReleased;
    basicResponse.incidentTypeCode = session.IncidentType;
    basicResponse.latitude = session.Latitude;
    basicResponse.locationTypeCode = session.Location;
    basicResponse.longitude = session.Longitude;
    basicResponse.meridian = session.Meridian;
    basicResponse.mixedUseCode = session.MixedUse;
    basicResponse.mutualAidCode = session.MutualAid;
    basicResponse.northSouthDirection = session.NorthSouthDirection;
    basicResponse.propertyLoss = session.PropertyLoss;
    basicResponse.propertyUseCode = session.PropertyUse;
    basicResponse.propertyValue = session.PropertyValue;
    basicResponse.range = session.Range;
    basicResponse.section = session.Section;
    basicResponse.shift = session.Shift;
    basicResponse.state = session.State;
    if (session.StreetHighway != null || session.StreetNumber != null || session.ApartmentSuite != null || session.StreetPrefix != null || session.StreetSuffix != null || session.StreetType != null) {
      basicResponse.streetAddress = {
        streetHighway: session.StreetHighway,
        numberOrMile: session.StreetNumber,
        apartment: session.ApartmentSuite,
        streetPrefix: session.StreetPrefix,
        streetSuffix: session.StreetSuffix,
        streetType: session.StreetType
      };
    }
    basicResponse.subSection = session.SubSection;
    basicResponse.township = session.Township;
    basicResponse.zipCode = session.ZipCode;
    return basicResponse;
  }

  /**
   * Populates the Incident Basic Response form controls
   *
   * TODO: Need to get datetimes in proper timezone - everything is now in GMT
   *
   * @param formControls
   * @param ols
   */
  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('ActionTaken1'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ActionsTaken', this.actionTaken1Code));
    FormStateService.initializeFormControlValue(formControls.get('ActionTaken2'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ActionsTaken', this.actionTaken2Code));
    FormStateService.initializeFormControlValue(formControls.get('ActionTaken3'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ActionsTaken', this.actionTaken3Code));
    FormStateService.initializeFormControlValue(formControls.get('AlarmDateTime'), DataUtils.formatDateTime(this.alarmDateTime));
    FormStateService.initializeFormControlValue(formControls.get('Alarms'), this.alarmsCount);
    FormStateService.initializeFormControlValue(formControls.get('ArrivalDateTime'), DataUtils.formatDateTime(this.arrivalDateTime));
    FormStateService.initializeFormControlValue(formControls.get('Casualties'), !!this.casualties);
    FormStateService.initializeFormControlValue(formControls.get('Census'), this.census);
    FormStateService.initializeFormControlValue(formControls.get('City'), this.city);
    FormStateService.initializeFormControlValue(formControls.get('ClearedDateTime'), DataUtils.formatDateTime(this.lastUnitClearedDateTime));
    FormStateService.initializeFormControlValue(formControls.get('ContentLoss'), this.contentLoss);
    FormStateService.initializeFormControlValue(formControls.get('ContentValue'), this.contentValue);
    FormStateService.initializeFormControlValue(formControls.get('ControlledDateTime'), DataUtils.formatDateTime(this.controlledDateTime));
    FormStateService.initializeFormControlValue(formControls.get('Detector'), ols.getOptionForSessionAndCode('Lookup.OS.IM.Detector', this.detectorCode));
    FormStateService.initializeFormControlValue(formControls.get('Directions'), this.directions);
    FormStateService.initializeFormControlValue(formControls.get('District'), this.districtCode);
    FormStateService.initializeFormControlValue(formControls.get('EMSProvided'), !!this.emsProvided);
    FormStateService.initializeFormControlValue(formControls.get('EastWestDirection'), ols.getOptionForSessionAndCode('Lookup.OS.IM.EastWest', this.eastWestDirection));
    FormStateService.initializeFormControlValue(formControls.get('GPSLocation'), this.gpsLocation);
    FormStateService.initializeFormControlValue(formControls.get('HazMatReleased'), ols.getOptionForSessionAndCode('Lookup.OS.IM.HazMatReleased', this.hazMatReleasedCode));
    FormStateService.initializeFormControlValue(formControls.get('IncidentType'), ols.getOptionForSessionAndCode('Lookup.OS.IM.IncidentType', this.incidentTypeCode));
    FormStateService.initializeFormControlValue(formControls.get('Latitude'), this.latitude);
    FormStateService.initializeFormControlValue(formControls.get('Location'), this.locationTypeCode);
    FormStateService.initializeFormControlValue(formControls.get('Longitude'), this.longitude);
    FormStateService.initializeFormControlValue(formControls.get('Meridian'), ols.getOptionForSessionAndCode('Lookup.OS.IM.Meridian', this.meridian));
    FormStateService.initializeFormControlValue(formControls.get('MixedUse'), ols.getOptionForSessionAndCode('Lookup.OS.IM.MixedUse', this.mixedUseCode));
    FormStateService.initializeFormControlValue(formControls.get('MutualAid'), ols.getOptionForSessionAndCode('Lookup.OS.IM.MutualAid', this.mutualAidCode));
    FormStateService.initializeFormControlValue(formControls.get('NorthSouthDirection'), ols.getOptionForSessionAndCode('Lookup.OS.IM.NorthSouth', this.northSouthDirection));
    FormStateService.initializeFormControlValue(formControls.get('PropertyLoss'), this.propertyLoss);
    FormStateService.initializeFormControlValue(formControls.get('PropertyUse'), ols.getOptionForSessionAndCode('Lookup.OS.IM.PropertyUse', this.propertyUseCode));
    FormStateService.initializeFormControlValue(formControls.get('PropertyValue'), this.propertyValue);
    FormStateService.initializeFormControlValue(formControls.get('Range'), this.range);
    FormStateService.initializeFormControlValue(formControls.get('Section'), this.section);
    FormStateService.initializeFormControlValue(formControls.get('Shift'), ols.getOptionForSessionAndCode('Lookup.OS.AM.Shift', this.shift));
    FormStateService.initializeFormControlValue(formControls.get('State'), ols.getOptionForSessionAndCode('Lookup.OS.IM.StateTerritory', this.state == null ? null : this.state.toUpperCase()));
    FormStateService.initializeFormControlValue(formControls.get('Station'), this.station);
    if (this.streetAddress != null) {
      FormStateService.initializeFormControlValue(formControls.get('StreetHighway'), this.streetAddress.streetHighway);
      FormStateService.initializeFormControlValue(formControls.get('StreetNumber'), this.streetAddress.numberOrMile);
      FormStateService.initializeFormControlValue(formControls.get('ApartmentSuite'), this.streetAddress.apartment);
      FormStateService.initializeFormControlValue(formControls.get('StreetPrefix'), ols.getOptionForSessionAndCode('Lookup.OS.IM.StreetPrefixSuffix', this.streetAddress.streetPrefix));
      FormStateService.initializeFormControlValue(formControls.get('StreetSuffix'), ols.getOptionForSessionAndCode('Lookup.OS.IM.StreetPrefixSuffix', this.streetAddress.streetSuffix));
      FormStateService.initializeFormControlValue(formControls.get('StreetType'), ols.getOptionForSessionAndCode('Lookup.OS.IM.StreetType', this.streetAddress.streetType));
    }
    FormStateService.initializeFormControlValue(formControls.get('SubSection'), ols.getOptionForSessionAndCode('Lookup.OS.IM.SubSection', this.subSection));
    FormStateService.initializeFormControlValue(formControls.get('Township'), this.township);
    FormStateService.initializeFormControlValue(formControls.get('ZipCode'), this.zipCode);
  }

}
