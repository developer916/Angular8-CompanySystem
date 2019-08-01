import { FormControl } from '@angular/forms';
import { LookupService } from '../../core/services/lookup.service';
import { FormStateService } from '../../core/services/form-state.service';

export class ArsonAgencyReferredTo {

  public static readonly SESSION_NAME = 'Session.OS.IM.ArsonAgencyReferredTo';

  private referredToNone: boolean;
  private referredToAgency: string;
  private referredToCaseNumber: string;
  private referredToORI: string;
  private referredToNumber: string;
  private referredToStreetPrefix: string;
  private referredToStreetHighway: string;
  private referredToStreetType: string;
  private referredToStreetSuffix: string;
  private referredToFID: string;
  private referredToPOBox: string;
  private referredToApartment: string;
  private referredToCity: string;
  private referredToState: string;
  private referredToZipCode: string;
  private referredToFDID: string;
  private referredToPhone: string;
  private referredToEmail: string;


  /**
   * Create a ArsonJuvenileFiresetter Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    ReferredToNone?: boolean,
    ReferredToAgency?: string,
    ReferredToCaseNumber?: string,
    ReferredToORI?: string,
    ReferredToNumber?: string,
    ReferredToStreetPrefix?: string,
    ReferredToStreetHighway?: string,
    ReferredToStreetType?: string,
    ReferredToStreetSuffix?: string,
    ReferredToFID?: string,
    ReferredToPOBox?: string,
    ReferredToApartment?: string,
    ReferredToCity?: string,
    ReferredToState?: string,
    ReferredToZipCode?: string,
    ReferredToFDID?: string,
    ReferredToPhone?: string,
    ReferredToEmail?: string,
  }) {
    const arsonAgencyReferredTo: ArsonAgencyReferredTo = new ArsonAgencyReferredTo();
    arsonAgencyReferredTo.referredToNone = session.ReferredToNone;
    arsonAgencyReferredTo.referredToAgency = session.ReferredToAgency;
    arsonAgencyReferredTo.referredToCaseNumber = session.ReferredToCaseNumber;
    arsonAgencyReferredTo.referredToORI = session.ReferredToORI;
    arsonAgencyReferredTo.referredToNumber = session.ReferredToNumber;
    arsonAgencyReferredTo.referredToStreetPrefix = session.ReferredToStreetPrefix;
    arsonAgencyReferredTo.referredToStreetHighway = session.ReferredToStreetHighway;
    arsonAgencyReferredTo.referredToStreetType = session.ReferredToStreetType;
    arsonAgencyReferredTo.referredToStreetSuffix = session.ReferredToStreetSuffix;
    arsonAgencyReferredTo.referredToFID = session.ReferredToFID;
    arsonAgencyReferredTo.referredToPOBox = session.ReferredToPOBox;
    arsonAgencyReferredTo.referredToApartment = session.ReferredToApartment;
    arsonAgencyReferredTo.referredToCity = session.ReferredToCity;
    arsonAgencyReferredTo.referredToState = session.ReferredToState;
    arsonAgencyReferredTo.referredToZipCode = session.ReferredToZipCode;
    arsonAgencyReferredTo.referredToFDID = session.ReferredToFDID;
    arsonAgencyReferredTo.referredToPhone = session.ReferredToPhone;
    arsonAgencyReferredTo.referredToEmail = session.ReferredToEmail;
    return arsonAgencyReferredTo;
  }

  /**
   * Populates the Incident ArsonAgencyReferredTo Case Details form controls
   *
   * @param formControls
   * @param ols
   */
  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('ReferredToNone'), this.referredToNone);
    FormStateService.initializeFormControlValue(formControls.get('ReferredToAgency'), this.referredToAgency);
    FormStateService.initializeFormControlValue(formControls.get('ReferredToCaseNumber'), this.referredToCaseNumber);
    FormStateService.initializeFormControlValue(formControls.get('ReferredToORI'), this.referredToORI);
    FormStateService.initializeFormControlValue(formControls.get('ReferredToNumber'), this.referredToNumber);
    FormStateService.initializeFormControlValue(formControls.get('ReferredToStreetPrefix'), ols.getOptionForSessionAndCode('Lookup.OS.IM.StreetPrefixSuffix', this.referredToStreetPrefix));
    FormStateService.initializeFormControlValue(formControls.get('ReferredToStreetHighway'), this.referredToStreetHighway);
    FormStateService.initializeFormControlValue(formControls.get('ReferredToStreetType'), ols.getOptionForSessionAndCode('Lookup.OS.IM.StreetType', this.referredToStreetType));
    FormStateService.initializeFormControlValue(formControls.get('ReferredToStreetSuffix'), ols.getOptionForSessionAndCode('Lookup.OS.IM.StreetPrefixSuffix', this.referredToStreetSuffix));
    FormStateService.initializeFormControlValue(formControls.get('ReferredToFID'), this.referredToFID);
    FormStateService.initializeFormControlValue(formControls.get('ReferredToPOBox'), this.referredToPOBox);
    FormStateService.initializeFormControlValue(formControls.get('ReferredToApartment'), this.referredToApartment);
    FormStateService.initializeFormControlValue(formControls.get('ReferredToCity'), this.referredToCity);
    FormStateService.initializeFormControlValue(formControls.get('ReferredToState'), ols.getOptionForSessionAndCode('Lookup.OS.IM.StateTerritory', this.referredToState));
    FormStateService.initializeFormControlValue(formControls.get('ReferredToZipCode'), this.referredToZipCode);
    FormStateService.initializeFormControlValue(formControls.get('ReferredToFDID'), this.referredToFDID);
    FormStateService.initializeFormControlValue(formControls.get('ReferredToPhone'), this.referredToPhone);
    FormStateService.initializeFormControlValue(formControls.get('ReferredToEmail'), this.referredToEmail);
  }
}
