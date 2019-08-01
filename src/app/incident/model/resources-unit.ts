import { DataUtils } from '../../core/services/data-utils';
import { FormControl } from '@angular/forms';
import { LookupService } from '../../core/services/lookup.service';
import { FormStateService } from '../../core/services/form-state.service';


/**
 * Object that encapsulates Unit information in the Resources Session
 */
export class ResourcesUnit {

  public static readonly SESSION_NAME = 'Session.OS.IM.ResourcesUnit';

  unitReportStatus: string;
  unitId: string;
  unitTypeCode: string;
  unitUseCode: string;
  displayOrder: number;
  actionTaken1Code: string;
  actionTaken2Code: string;
  actionTaken3Code: string;
  actionTaken4Code: string;
  personnelName: string;
  priorityEnrouteCode: string;
  priorityArrivalCode: string;
  priorityArrivalFacilityCode: string;
  priorityEnrouteFacilityCode: string;
  dispatchDateTime: string;
  arrivalDateTime: string;
  enrouteDateTime: string;
  enrouteFacilityDateTime: string;
  arrivedFacilityDateTime: string;
  clearDateTime: string;
  arrivedAtPatientSideDateTime: string;
  reflexDuration: number;
  travelDuration: number;
  responseDuration: number;
  transportDuration: number;
  totalUnitDuration: number;
  specialHazMatUnitReport: boolean;
  twoInTwoOut: boolean;
  fromQuarters: boolean;
  didNotArrive: boolean;

  /**
   * Create a ResourcesUnit Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    UnitType?: string,
    UnitUse?: string,
    DisplayOrder?: number,
    ActionTaken1?: string,
    ActionTaken2?: string,
    ActionTaken3?: string,
    ActionTaken4?: string,
    PriorityEnroute?: string,
    PriorityArrival?: string,
    PriorityArrivalFacility?: string,
    PriorityEnrouteFacility?: string,
    SpecialHazMatUnitReport?: boolean,
    TwoInTwoOut?: boolean,
    FromQuarters?: string,
    DidNotArrive?: boolean
  }) {
    const resourcesUnit: ResourcesUnit = new ResourcesUnit();
    resourcesUnit.unitTypeCode = session.UnitType;
    resourcesUnit.unitUseCode = session.UnitUse;
    resourcesUnit.displayOrder = session.DisplayOrder;
    resourcesUnit.actionTaken1Code = session.ActionTaken1;
    resourcesUnit.actionTaken2Code = session.ActionTaken2;
    resourcesUnit.actionTaken3Code = session.ActionTaken3;
    resourcesUnit.actionTaken4Code = session.ActionTaken4;
    resourcesUnit.priorityEnrouteCode = session.PriorityEnroute;
    resourcesUnit.priorityArrivalCode = session.PriorityArrival;
    resourcesUnit.priorityArrivalFacilityCode = session.PriorityArrivalFacility;
    resourcesUnit.priorityEnrouteFacilityCode = session.PriorityEnrouteFacility;
    resourcesUnit.specialHazMatUnitReport  = session.SpecialHazMatUnitReport;
    resourcesUnit.twoInTwoOut  = session.TwoInTwoOut;
    resourcesUnit.fromQuarters = ( session.FromQuarters === undefined || session.FromQuarters === '0' ) ? false : true;
    resourcesUnit.didNotArrive  = session.DidNotArrive;
    return resourcesUnit;
  }

  /**
   * Populates the Incident Resources Unit data
   *
   * This also populates all of the subitems: Narrative, Personnel, and Special Unit Report
   *
   * These fields are currently not being handled because their is no associated form control:
   *
   * personnelName
   * SpecialUnitReport
   *
   * @param formControls
   * @param ols
   */
  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('Unit'), this.unitId);
    FormStateService.initializeFormControlValue(formControls.get('UnitType'), ols.getOptionForSessionAndCode('Lookup.OS.IM.UnitType', this.unitTypeCode));
    FormStateService.initializeFormControlValue(formControls.get('UnitUse'), ols.getOptionForSessionAndCode('Lookup.OS.IM.UnitUse', this.unitUseCode));
    FormStateService.initializeFormControlValue(formControls.get('ActionTaken1'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ActionsTaken', this.actionTaken1Code));
    FormStateService.initializeFormControlValue(formControls.get('ActionTaken2'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ActionsTaken', this.actionTaken2Code));
    FormStateService.initializeFormControlValue(formControls.get('ActionTaken3'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ActionsTaken', this.actionTaken3Code));
    FormStateService.initializeFormControlValue(formControls.get('ActionTaken4'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ActionsTaken', this.actionTaken4Code));
    FormStateService.initializeFormControlValue(formControls.get('PriorityEnroute'), ols.getOptionForSessionAndCode('Lookup.OS.IM.PriorityCode', this.priorityEnrouteCode));
    FormStateService.initializeFormControlValue(formControls.get('PriorityArrival'), ols.getOptionForSessionAndCode('Lookup.OS.IM.PriorityCode', this.priorityArrivalCode));
    FormStateService.initializeFormControlValue(formControls.get('PriorityArrivalFacility'), ols.getOptionForSessionAndCode('Lookup.OS.IM.PriorityCode', this.priorityArrivalFacilityCode));
    FormStateService.initializeFormControlValue(formControls.get('PriorityEnrouteFacility'), ols.getOptionForSessionAndCode('Lookup.OS.IM.PriorityCode', this.priorityEnrouteFacilityCode));
    FormStateService.initializeFormControlValue(formControls.get('DispatchDateTime'), DataUtils.formatDateTime(this.dispatchDateTime));
    FormStateService.initializeFormControlValue(formControls.get('ArrivalDateTime'), DataUtils.formatDateTime(this.arrivalDateTime));
    FormStateService.initializeFormControlValue(formControls.get('EnrouteDateTime'), DataUtils.formatDateTime(this.enrouteDateTime));
    FormStateService.initializeFormControlValue(formControls.get('EnrouteFacilityDateTime'), DataUtils.formatDateTime(this.enrouteFacilityDateTime));
    FormStateService.initializeFormControlValue(formControls.get('ArrivedFacilityDateTime'), DataUtils.formatDateTime(this.arrivedFacilityDateTime));
    FormStateService.initializeFormControlValue(formControls.get('ClearedDateTime'), DataUtils.formatDateTime(this.clearDateTime));
    FormStateService.initializeFormControlValue(formControls.get('ArrivedAtPatientSideDateTime'), DataUtils.formatDateTime(this.arrivedAtPatientSideDateTime));
    FormStateService.initializeFormControlValue(formControls.get('ReflexDuration'), DataUtils.formatTimeInSeconds(this.reflexDuration));
    FormStateService.initializeFormControlValue(formControls.get('TravelDuration'), DataUtils.formatTimeInSeconds(this.travelDuration));
    FormStateService.initializeFormControlValue(formControls.get('ResponseDuration'), DataUtils.formatTimeInSeconds(this.responseDuration));
    FormStateService.initializeFormControlValue(formControls.get('TransportDuration'), DataUtils.formatTimeInSeconds(this.transportDuration));
    FormStateService.initializeFormControlValue(formControls.get('TotalUnitDuration'), DataUtils.formatTimeInSeconds(this.totalUnitDuration));
    FormStateService.initializeFormControlValue(formControls.get('SpecialHazMatUnitReport'), this.specialHazMatUnitReport);
    FormStateService.initializeFormControlValue(formControls.get('TwoInTwoOut'), this.twoInTwoOut);
    FormStateService.initializeFormControlValue(formControls.get('FromQuarters'), this.getFromQuarters(ols));
    FormStateService.initializeFormControlValue(formControls.get('DidNotArrive'), this.didNotArrive);
  }

  getFromQuarters( ols: LookupService ) {
    if ( this.fromQuarters === undefined ){
      return null;
    } else if ( this.fromQuarters === true){
      return ols.getOptionForSessionAndCode('Lookup.OS.OS.Flag', '1' );
    } else {
      return ols.getOptionForSessionAndCode('Lookup.OS.OS.Flag', '0' );
    }
  }
}
