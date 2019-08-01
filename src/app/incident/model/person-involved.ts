import { Entity } from 'ng2-hallelujah';
import { LookupService } from '../../core/services/lookup.service';
import { FormControl } from '@angular/forms';
import { FormStateService } from '../../core/services/form-state.service';
import { Incident } from './incident';
import { REST } from '../../core/model/REST';
import { Observable } from 'rxjs';
import { AosEntity } from '../../core/model/aos-entity';
import { tap } from 'rxjs/operators';


/**
 * Object that encapsulates PersonsInvolved information in the Basic Session
 */
export class PersonInvolved extends Entity implements AosEntity<PersonInvolved> {

  public static readonly REL_NAME = 'personsInvolved';
  public static readonly API_PATH_NAME = 'personInvolved';


  @REST.ForeignEntityRef({isOwner: true})
  incident: Incident;

  idHash: string;
  displayOrder: number;
  personName: string;
  ownerPersonCode: string;
  nameSuffix: string;
  namePrefix: string;
  state: string;
  responsible: boolean;
  sameAddressAsIncidentLocation: boolean;
  gpsLocation: string;
  firstName: string;
  middleInitial: string;
  lastName: string;
  businessName: string;
  phone: string;
  mobilePhone: string;
  email: string;
  streetAddress: {
    streetHighway: string;
    numberOrMile: string;
    apartment: string;
    streetPrefix: string;
    streetSuffix: string;
    streetType: string;
  };
  poBox: string;
  city: string;
  province: string;
  region: string;
  zipCode: string;
  postalCode: string;
  country: string;


  /**
   * Create a BasicPersonsInvolved Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    DisplayOrder: string,
    InvolvementType: string,
    NameSuffix: string,
    NamePrefix: string,
    State: string,
    StreetPrefix: string,
    StreetType: string,
    StreetSuffix: string,
    Responsible: boolean,
    SameAddressAsIncidentLocation: boolean,
    GPSLocation: string,
    FirstName: string,
    MiddleInitial: string,
    LastName: string,
    BusinessName: string,
    Phone: string,
    MobilePhone: string,
    Email: string,
    StreetNumber: string,
    StreetHighway: string,
    ApartmentSuite: string,
    POBox: string,
    City: string,
    ZipCode: string,
  }) {
    const basicPersonInvolved: PersonInvolved = new PersonInvolved();
    basicPersonInvolved.displayOrder = parseInt(session.DisplayOrder, 10);
    basicPersonInvolved.ownerPersonCode = session.InvolvementType;
    basicPersonInvolved.nameSuffix = session.NameSuffix;
    basicPersonInvolved.namePrefix = session.NamePrefix;
    basicPersonInvolved.state = session.State;
    basicPersonInvolved.responsible = session.Responsible;
    basicPersonInvolved.sameAddressAsIncidentLocation = session.SameAddressAsIncidentLocation;
    basicPersonInvolved.gpsLocation = session.GPSLocation;
    basicPersonInvolved.firstName = session.FirstName;
    basicPersonInvolved.middleInitial = session.MiddleInitial;
    basicPersonInvolved.lastName = session.LastName;
    basicPersonInvolved.businessName = session.BusinessName;
    basicPersonInvolved.phone = session.Phone;
    basicPersonInvolved.mobilePhone = session.MobilePhone;
    basicPersonInvolved.email = session.Email;
    if (session.StreetHighway != null || session.StreetNumber != null || session.ApartmentSuite != null || session.StreetPrefix != null || session.StreetSuffix != null || session.StreetType != null) {
      basicPersonInvolved.streetAddress = {
        streetHighway: session.StreetHighway,
        numberOrMile: session.StreetNumber,
        apartment: session.ApartmentSuite,
        streetPrefix: session.StreetPrefix,
        streetSuffix: session.StreetSuffix,
        streetType: session.StreetType
      };
    }
    basicPersonInvolved.poBox = session.POBox;
    basicPersonInvolved.city = session.City;
    basicPersonInvolved.zipCode = session.ZipCode;
    return basicPersonInvolved;
  }

  /**
   * Populates the Incident Basic Persons Involved data
   *
   * These fields are currently not being handled because their is no associated form control:
   *
   * personName
   * province
   * region
   * postalCode
   * country
   *
   * @param formControls
   * @param ols
   */
  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('InvolvementType'), ols.getOptionForSessionAndCode('Lookup.OS.IM.OwnerPerson', this.ownerPersonCode));
    FormStateService.initializeFormControlValue(formControls.get('NameSuffix'), ols.getOptionForSessionAndCode('Lookup.OS.IM.NameSuffix', this.nameSuffix));
    FormStateService.initializeFormControlValue(formControls.get('NamePrefix'), ols.getOptionForSessionAndCode('Lookup.OS.IM.NamePrefix', this.namePrefix));
    FormStateService.initializeFormControlValue(formControls.get('State'), ols.getOptionForSessionAndCode('Lookup.OS.IM.StateTerritory', this.state == null ? null : this.state.toUpperCase()));
    FormStateService.initializeFormControlValue(formControls.get('Responsible'), this.responsible);
    FormStateService.initializeFormControlValue(formControls.get('SameAddressAsIncidentLocation'), this.sameAddressAsIncidentLocation);
    FormStateService.initializeFormControlValue(formControls.get('GPSLocation'), this.gpsLocation);
    FormStateService.initializeFormControlValue(formControls.get('FirstName'), this.firstName);
    FormStateService.initializeFormControlValue(formControls.get('MiddleInitial'), this.middleInitial);
    FormStateService.initializeFormControlValue(formControls.get('LastName'), this.lastName);
    FormStateService.initializeFormControlValue(formControls.get('BusinessName'), this.businessName);
    FormStateService.initializeFormControlValue(formControls.get('Phone'), this.phone);
    FormStateService.initializeFormControlValue(formControls.get('MobilePhone'), this.mobilePhone);
    FormStateService.initializeFormControlValue(formControls.get('Email'), this.email);
    if (this.streetAddress != null) {
      FormStateService.initializeFormControlValue(formControls.get('StreetHighway'), this.streetAddress.streetHighway);
      FormStateService.initializeFormControlValue(formControls.get('StreetNumber'), this.streetAddress.numberOrMile);
      FormStateService.initializeFormControlValue(formControls.get('ApartmentSuite'), this.streetAddress.apartment);
      FormStateService.initializeFormControlValue(formControls.get('StreetPrefix'), ols.getOptionForSessionAndCode('Lookup.OS.IM.StreetPrefixSuffix', this.streetAddress.streetPrefix));
      FormStateService.initializeFormControlValue(formControls.get('StreetSuffix'), ols.getOptionForSessionAndCode('Lookup.OS.IM.StreetPrefixSuffix', this.streetAddress.streetSuffix));
      FormStateService.initializeFormControlValue(formControls.get('StreetType'), ols.getOptionForSessionAndCode('Lookup.OS.IM.StreetType', this.streetAddress.streetType));
    }
    FormStateService.initializeFormControlValue(formControls.get('POBox'), this.poBox);
    FormStateService.initializeFormControlValue(formControls.get('City'), this.city);
    FormStateService.initializeFormControlValue(formControls.get('ZipCode'), this.zipCode);
  }

  /**
   *
   * @param personInvolvedUpdate
   */
  public update(personInvolvedUpdate: PersonInvolved): Observable<void> {
    const updateObject = REST.transformEntityForSave(personInvolvedUpdate);
    return super.update(updateObject).pipe(
      tap(() => {
        Object.assign(this, updateObject);
      })
    );
  }
}
