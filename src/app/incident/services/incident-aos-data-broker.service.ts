import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, flatMap, tap } from 'rxjs/operators';
import { DataBrokerServiceInterface } from '../../core/model/data-broker-service';
import { REST } from '../../core/model/REST';
import { DataService } from '../../core/services/data-service.service';
import { FormStateService } from '../../core/services/form-state.service';
import { ListDetailService } from '../../core/services/list-detail.service';
import { LookupService } from '../../core/services/lookup.service';
import { Arson } from '../model/arson';
import { ArsonAgencyReferredTo } from '../model/arson-agency-referred-to';
import { ArsonCaseDetails } from '../model/arson-case-details';
import { ArsonJuvenileFiresetter } from '../model/arson-juvenile-firesetter';
import { BasicCAD } from '../model/basic-cad';
import { PersonInvolved } from '../model/person-involved';
import { BasicResponse, BasicResponseStatus } from '../model/basic-response';
import { BasicSummary } from '../model/basic-summary';
import { BasicSummaryMutualAid } from '../model/basic-summary-mutual-aid';
import { Civilian } from '../model/civilian';
import { CivilianFactors } from '../model/civilian-factors';
import { CivilianInjury } from '../model/civilian-injury';
import { Fire } from '../model/fire';
import { FireEquipmentDetails } from '../model/fire-equipment-details';
import { FireIgnitionDetails } from '../model/fire-ignition-details';
import { FireService } from '../model/fire-service';
import { FireServiceFactors } from '../model/fire-service-factors';
import { FireServiceInjury } from '../model/fire-service-injury';
import { HazMatSpecialUnitReport } from '../model/haz-mat-special-unit-report';
import { Incident } from '../model/incident';
import { InputFormHeader } from '../model/input-form-header';
import { ProtectiveEquipmentFailure } from '../model/protective-equipment-failure';
import { Resources } from '../model/resources';
import { ResourcesUnit } from '../model/resources-unit';
import { ResourcesUnitNarrative } from '../model/resources-unit-narrative';
import { ResourcesUnitPersonnel } from '../model/resources-unit-personnel';
import { Structure } from '../model/structure';
import { StructureDescriptionStatus } from '../model/structure-description-status';
import { StructureSystemsDamage } from '../model/structure-systems-damage';
import { Wildland } from '../model/wildland';
import { WildlandIgnitionDetails } from '../model/wildland-ignition-details';
import { WildlandPropertyDetails } from '../model/wildland-property-details';
import { HazMat } from '../model/haz-mat';
import { RuleEngineService } from 'app/core/services/rule-engine.service';
import { IncidentBasicPersonsInvolvedComponent } from 'app/incident/components/incident-basic-persons-involved/incident-basic-persons-involved.component';
/**
 * Class that is responsible for loading and saving incident data from the backend API
 *
 * TODO: Remove Object.assign calls and add proper constructors to data model in order to insure type safety
 *
 */
@Injectable()
export class IncidentAosDataBrokerService implements DataBrokerServiceInterface {

  /**
   * Entity model of the incident we are actively editing in the UI. Note that this will ALWAYS represent the state
   * of the incident as reported by the backend API
   */
  private _activeIncidentEntity: Incident;

  /**
   *
   * @param fss
   * @param {ListDetailService} lds
   * @param ols
   * @param {DataService} ds
   */
  constructor(private fss: FormStateService,
    private lds: ListDetailService,
    private ols: LookupService,
    private ds: DataService,
    private res: RuleEngineService,
    private http: HttpClient) {
  }

  /**
   * Getter for activeIncidentEntity
   */
  get activeIncidentEntity(): Incident {
    return this._activeIncidentEntity;
  }

  /**
   * TODO: This should be refactored to use a BehaviorSubject on the incident data map. There is really no need to
   *       make the call to retrieve incident data twice, but for now, since it's easier, we'll stick with this
   *
   * @param {string} incidentId
   * @returns {{name: string; value: string}[]}
   */
  public getIncidentCadData(incidentId: string) {
    return this.ds.getIncidentResource(incidentId).pipe(
      flatMap(incident => {
        return incident.relatedEntity(BasicCAD.REL_NAME).get(BasicCAD);
      }));
  }

  /**
   * Loads HTML snippets from the API. We use the sessionId to determine which API endpoint to hit. Returns null if
   * the sessionId doesn't match a known API endpoint
   *
   * @param sessionId
   */
  getExternalHtml(sessionId: string): Observable<any> {
    if (sessionId.includes('HazMat')) {
      return this.ds.getExternalHtml('hazMat', this._activeIncidentEntity.hazMat.idHash);
    } else {
      return null;
    }
  }

  /**
   * Load the base incident resource
   */
  public loadIncident(incidentId: string) {
    return this.ds.getIncidentResource(incidentId).pipe(
      tap(incident => {
        this._activeIncidentEntity = incident;
        return of(incident);
      }));
  }

  /**
   * Closes the incident. This will trigger a save in order to sync the active incident with the backend API
   */
  public closeIncident(user: any) {
    const incidentUpdate = new Incident();
    incidentUpdate.closedDateTime = new Date().toISOString();
    incidentUpdate.closedUserID = user.userId;
    incidentUpdate.closedUserName = user.username;
    incidentUpdate.closedSession = 'Session.OS.IM.Incident'; // TODO: Figure out what this is actually supposed to be
    return this.saveIncident(incidentUpdate);
  }

  /**
   * Returns TRUE if the active incident is closed
   */
  public isIncidentClosed() {
    return this._activeIncidentEntity.closedDateTime != null;
  }

  /**
   * Load all incident resources
   *
   * @param incidentId
   */
  public loadIncidentResources(incidentObservable: Observable<Incident>) {
    this.resetForm();
    return incidentObservable.pipe(
      flatMap(incident => this.populateBasicSession(incident)),
      flatMap(incident => this.populateResourcesSession(incident)),
      flatMap(incident => this.populateFireSession(incident)),
      flatMap(incident => this.populateCivilianCasualtySession(incident)),
      flatMap(incident => this.populateArsonSession(incident)),
      flatMap(incident => this.populateWildlandSession(incident)),
      flatMap(incident => this.populateHazMatSession(incident)),
      flatMap(incident => this.populateFireServiceCasualtySession(incident))
    );
  }

  /**
   */
  private resetForm() {
    this.res.resetRuleEngine();
    this.fss.resetAll();
    this.lds.resetAll();
  }

  /**
   *
   * @param incident
   */
  private populateBasicSession(incident: Incident) {
    if (incident.response != null) {
      const basicResponse = new BasicResponse();
      Object.assign(basicResponse, incident.response);
      this._activeIncidentEntity.response = basicResponse;
      const formControls = this.fss.getAllFormControlsForSession(BasicResponse.SESSION_NAME);
      basicResponse.populateSession(formControls, this.ols);
    }
    const summaryFormControls = this.fss.getAllFormControlsForSession(BasicSummary.SESSION_NAME);
    if (incident.summary != null) {
      const basicSummary = new BasicSummary();
      Object.assign(basicSummary, incident.summary);
      this._activeIncidentEntity.summary = basicSummary;
      basicSummary.populateSession(summaryFormControls, this.ols);
    }
    if (incident.mutualAid != null) {
      this._activeIncidentEntity.mutualAid = [];
      incident.mutualAid.forEach(mutualAid => {
        const basicSummaryMutualAid = new BasicSummaryMutualAid();
        Object.assign(basicSummaryMutualAid, mutualAid);
        this._activeIncidentEntity.mutualAid.push(basicSummaryMutualAid);
        basicSummaryMutualAid.populateSession(summaryFormControls, this.ols);
      });
    }
    return incident.relatedCollection(PersonInvolved.REL_NAME).get(PersonInvolved).pipe(
      flatMap(personsInvolved => {
        this._activeIncidentEntity.personsInvolved = [];
        const listItemIdKey = 'BasicPersonsInvolved_ID';
        this.fss.setIdKeyForSession(IncidentBasicPersonsInvolvedComponent.SESSION_NAME, listItemIdKey);
        personsInvolved.sort((a, b) => a.displayOrder > b.displayOrder ? a.displayOrder === b.displayOrder ? 0 : 1 : -1);
        personsInvolved.forEach(personInvolved => {
          this._activeIncidentEntity.personsInvolved.push(personInvolved);
          const hiddenControls = [];
          hiddenControls.push({ id: 'DisplayOrder', control: new FormControl(personInvolved.displayOrder) });
          hiddenControls.push({ id: listItemIdKey, control: new FormControl(personInvolved.idHash) });
          hiddenControls.push({ id: '_self', control: new FormControl(personInvolved._links.self.href) });
          const personInvolvedControls =
            this.lds.addListDetailItem(IncidentBasicPersonsInvolvedComponent.SESSION_NAME, listItemIdKey, hiddenControls).formControls;
          personInvolved.populateSession(personInvolvedControls, this.ols);
        });
        return incident.relatedCollection(BasicSummaryMutualAid.REL_NAME).get(BasicSummaryMutualAid);
      }),
      flatMap(mutualAid => {
        this._activeIncidentEntity.mutualAid = [];
        mutualAid.sort((a, b) => a.displayOrder > b.displayOrder ? a.displayOrder === b.displayOrder ? 0 : 1 : -1);
        mutualAid.forEach(mutualAidDept => {
          const basicSummaryMutualAid = new BasicSummaryMutualAid();
          Object.assign(basicSummaryMutualAid, mutualAidDept);
          this._activeIncidentEntity.mutualAid.push(basicSummaryMutualAid);
          basicSummaryMutualAid.populateSession(summaryFormControls, this.ols);
        });
        return of(incident);
      }));
  }

  /**
   *
   * @param incident
   */
  private populateResourcesSession(incident: Incident) {
    this._activeIncidentEntity.units = [];
    const resourceUnitListItemIdKey = 'ResourcesUnit_ID';
    const resourceUnitPersonnelListItemIdKey = 'ResourcesUnitPersonnel_ID';
    const resourceUnitPersonnelListParentIdKey = resourceUnitListItemIdKey;
    this.fss.setIdKeyForSession(ResourcesUnit.SESSION_NAME, resourceUnitListItemIdKey);
    this.fss.setIdKeyForSession(ResourcesUnitNarrative.SESSION_NAME, resourceUnitListItemIdKey);
    this.fss.setIdKeyForSession(ResourcesUnitPersonnel.SESSION_NAME, resourceUnitPersonnelListItemIdKey);
    this.fss.setParentSession(ResourcesUnitPersonnel.SESSION_NAME, ResourcesUnit.SESSION_NAME);
    return incident.relatedCollection(Resources.REL_NAME).get(Resources).pipe(
      flatMap((resources: Resources[]) => {
        const outObservables = [];
        resources.sort((a, b) => a.displayOrder > b.displayOrder ? a.displayOrder === b.displayOrder ? 0 : 1 : -1);
        resources.forEach(resource => {
          const resourcesUnit = new ResourcesUnit();
          Object.assign(resourcesUnit, resource.unit);
          resource.unit = resourcesUnit;
          const resourcesHiddenControls = [];
          resourcesHiddenControls.push({ id: resourceUnitListItemIdKey, control: new FormControl(resource.idHash) });
          resourcesHiddenControls.push({ id: '_self', control: new FormControl(resource._links.self.href) });
          const resourcesUnitControls = this.lds.addListDetailItem(ResourcesUnit.SESSION_NAME, resourceUnitListItemIdKey, resourcesHiddenControls).formControls;
          resourcesUnit.populateSession(resourcesUnitControls, this.ols);
          const resourcesUnitNarrative = new ResourcesUnitNarrative();
          Object.assign(resourcesUnitNarrative, resource.narrative);
          resourcesUnitNarrative.unitId = resource.unit.unitId;
          resource.narrative = resourcesUnitNarrative;
          const resourcesNarrativeControls = this.lds.addListDetailItem(ResourcesUnitNarrative.SESSION_NAME, resourceUnitListItemIdKey, resourcesHiddenControls).formControls;
          resourcesUnitNarrative.populateSession(resourcesNarrativeControls, this.ols);
          this._activeIncidentEntity.units.push(resource);
          const resourceObservables = [];
          resourceObservables.push(of(resource));
          resourceObservables.push(resource.relatedCollection(ResourcesUnitPersonnel.REL_NAME).get(ResourcesUnitPersonnel));
          outObservables.push(forkJoin(resourceObservables));
        });
        return forkJoin(outObservables);
      }),
      flatMap(inObservables => {
        inObservables.forEach(resourceObservable => {
          const resource = resourceObservable[0];
          const personnel = resourceObservable[1];
          resource.personnel = [];
          personnel.sort((a, b) => a.displayOrder > b.displayOrder ? a.displayOrder === b.displayOrder ? 0 : 1 : -1);
          personnel.forEach(person => {
            person.unitId = resource.unit.unitId;
            resource.personnel.push(person);
            const resourcesUnitPersonnelHiddenControls = [];
            resourcesUnitPersonnelHiddenControls.push({ id: 'DisplayOrder', control: new FormControl(person.displayOrder) });
            resourcesUnitPersonnelHiddenControls.push({ id: resourceUnitPersonnelListParentIdKey, control: new FormControl(resource.idHash) });
            resourcesUnitPersonnelHiddenControls.push({ id: resourceUnitPersonnelListItemIdKey, control: new FormControl(person.idHash) });
            resourcesUnitPersonnelHiddenControls.push({ id: '_self', control: new FormControl(person._links.self.href) });
            const resourcesPersonnelControls = this.lds.addListDetailItem(ResourcesUnitPersonnel.SESSION_NAME, resourceUnitPersonnelListItemIdKey, resourcesUnitPersonnelHiddenControls).formControls;
            person.populateSession(resourcesPersonnelControls, this.ols);
          });
        });
        return of(incident);
      }));
  }

  /**
   *
   * @param incident
   */
  private populateFireSession(incident: Incident) {
    let fireEntity;
    return incident.relatedEntity(Fire.REL_NAME).get(Fire).pipe(
      flatMap(fire => {
        fireEntity = fire;
        this._activeIncidentEntity.fire = fireEntity;
        const fireEquipmentDetails = new FireEquipmentDetails();
        Object.assign(fireEquipmentDetails, fire.equipmentDetails);
        fireEntity.equipmentDetails = fireEquipmentDetails;
        const fireEquipmentFormControls = this.fss.getAllFormControlsForSession(FireEquipmentDetails.SESSION_NAME);
        fireEquipmentDetails.populateSession(fireEquipmentFormControls, this.ols);
        const fireIgnitionDetails = new FireIgnitionDetails();
        Object.assign(fireIgnitionDetails, fire.ignitionDetails);
        fireEntity.ignitionDetails = fireIgnitionDetails;
        const fireIgnitionFormControls = this.fss.getAllFormControlsForSession(FireIgnitionDetails.SESSION_NAME);
        fireIgnitionDetails.populateSession(fireIgnitionFormControls, this.ols);
        return fire.relatedEntity(Structure.REL_NAME).get(Structure);
      }),
      flatMap(structure => {
        const structureDescriptionStatus = new StructureDescriptionStatus();
        Object.assign(structureDescriptionStatus, structure.descriptionStatus);
        structure.descriptionStatus = structureDescriptionStatus;
        const structureDescriptionStatusFormControls = this.fss.getAllFormControlsForSession(StructureDescriptionStatus.SESSION_NAME);
        structureDescriptionStatus.populateSession(structureDescriptionStatusFormControls, this.ols);
        const structureSystemsDamage = new StructureSystemsDamage();
        Object.assign(structureSystemsDamage, structure.systemsDamage);
        structure.systemsDamage = structureSystemsDamage;
        const structureSystemsDamageFormControls = this.fss.getAllFormControlsForSession(StructureSystemsDamage.SESSION_NAME);
        structureSystemsDamage.populateSession(structureSystemsDamageFormControls, this.ols);
        fireEntity.structure = structure;
        structure.fire = fireEntity;
        return of(incident);
      }),
      catchError(error => {
        return of(incident);
      }));
  }

  /**
   *
   * @param incident
   */
  private populateCivilianCasualtySession(incident: Incident) {
    const civilianCasualtyListItemIdKey = 'CivilianCasualty_ID';
    this.fss.setIdKeyForSession(CivilianInjury.SESSION_NAME, civilianCasualtyListItemIdKey);
    this.fss.setIdKeyForSession(CivilianFactors.SESSION_NAME, civilianCasualtyListItemIdKey);
    this._activeIncidentEntity.civilianCasualty = [];
    return incident.relatedCollection(Civilian.REL_NAME).get(Civilian).pipe(
      flatMap(civilians => {
        civilians.sort((a, b) => a.displayOrder > b.displayOrder ? a.displayOrder === b.displayOrder ? 0 : 1 : -1);
        civilians.forEach(civilian => {
          const civilianInjury = new CivilianInjury();
          Object.assign(civilianInjury, civilian.injury);
          civilian.injury = civilianInjury;
          const civilianHiddenControls = [];
          civilianHiddenControls.push({ id: 'DisplayOrder', control: new FormControl(civilian.displayOrder) });
          civilianHiddenControls.push({ id: civilianCasualtyListItemIdKey, control: new FormControl(civilian.idHash) });
          civilianHiddenControls.push({ id: '_self', control: new FormControl(civilian._links.self.href) });
          const civilianInjuryControls = this.lds.addListDetailItem(CivilianInjury.SESSION_NAME, civilianCasualtyListItemIdKey, civilianHiddenControls).formControls;
          civilianInjury.populateSession(civilianInjuryControls, this.ols);
          const civilianFactors = new CivilianFactors();
          Object.assign(civilianFactors, civilian.factors);
          civilian.factors = civilianFactors;
          const civilianFactorsControls = this.lds.addListDetailItem(CivilianFactors.SESSION_NAME, civilianCasualtyListItemIdKey, civilianHiddenControls).formControls;
          civilianFactors.populateSession(civilianFactorsControls, this.ols);
          this._activeIncidentEntity.civilianCasualty.push(civilian);
        });
        return of(incident);
      }),
      catchError(error => {
        return of(incident);
      }));
  }

  /**
   *
   * @param incidentprotectiveEquipmentFailure
   */
  private populateFireServiceCasualtySession(incident: Incident) {
    const fireServiceCasualtyListItemIdKey = 'FireServiceCasualty_ID';
    const protectiveEquipmentListItemIdKey = 'ProtectiveEquipment_ID';
    const protectiveEquipmentListParentIdKey = fireServiceCasualtyListItemIdKey;
    this.fss.setIdKeyForSession(FireServiceInjury.SESSION_NAME, fireServiceCasualtyListItemIdKey);
    this.fss.setIdKeyForSession(FireServiceFactors.SESSION_NAME, fireServiceCasualtyListItemIdKey);
    this.fss.setIdKeyForSession(ProtectiveEquipmentFailure.SESSION_NAME, protectiveEquipmentListItemIdKey);
    this.fss.setParentSession(ProtectiveEquipmentFailure.SESSION_NAME, FireServiceInjury.SESSION_NAME);
    this._activeIncidentEntity.fireServiceCasualty = [];

    return incident.relatedCollection(FireService.REL_NAME).get(FireService).pipe(
      flatMap(fireServiceCasualties => {
        const outObservables = [];
        fireServiceCasualties.sort((a, b) => a.displayOrder > b.displayOrder ? a.displayOrder === b.displayOrder ? 0 : 1 : -1);
        fireServiceCasualties.forEach(fireServiceCasualty => {
          const fireServiceInjury = new FireServiceInjury();
          Object.assign(fireServiceInjury, fireServiceCasualty.injury);
          fireServiceCasualty.injury = fireServiceInjury;
          const fireServiceHiddenControls = [];
          fireServiceHiddenControls.push({ id: 'DisplayOrder', control: new FormControl(fireServiceCasualty.displayOrder) });
          fireServiceHiddenControls.push({ id: fireServiceCasualtyListItemIdKey, control: new FormControl(fireServiceCasualty.idHash) });
          fireServiceHiddenControls.push({ id: '_self', control: new FormControl(fireServiceCasualty._links.self.href) });
          const fireServiceInjuryControls = this.lds.addListDetailItem(FireServiceInjury.SESSION_NAME, fireServiceCasualtyListItemIdKey, fireServiceHiddenControls).formControls;
          fireServiceInjury.populateSession(fireServiceInjuryControls, this.ols);
          const fireServiceFactors = new FireServiceFactors();
          Object.assign(fireServiceFactors, fireServiceCasualty.factors);
          fireServiceCasualty.factors = fireServiceFactors;
          const fireServiceFactorsControls = this.lds.addListDetailItem(FireServiceFactors.SESSION_NAME, fireServiceCasualtyListItemIdKey, fireServiceHiddenControls).formControls;
          fireServiceFactors.populateSession(fireServiceFactorsControls, this.ols);
          this._activeIncidentEntity.fireServiceCasualty.push(fireServiceCasualty);
          const fireServiceObservables = [];
          fireServiceObservables.push(of(fireServiceCasualty));
          fireServiceObservables.push(fireServiceCasualty.relatedCollection(ProtectiveEquipmentFailure.REL_NAME).get(ProtectiveEquipmentFailure));
          outObservables.push(forkJoin(fireServiceObservables));
        });
        // TODO: Need to properly handle the case where we have no FireServiceCasualties - the reactive stream dies here in that case
        return forkJoin(outObservables);
      }),
      flatMap(inObservables => {
        inObservables.forEach(fireServiceObservable => {
          const fireServiceEntity = fireServiceObservable[0];
          const fireServiceProtectiveEquipment = fireServiceObservable[1];
          fireServiceEntity.protectiveEquipmentFailure = [];
          fireServiceProtectiveEquipment.sort((a, b) => a.displayOrder > b.displayOrder ? a.displayOrder === b.displayOrder ? 0 : 1 : -1);
          fireServiceProtectiveEquipment.forEach(equipment => {
            fireServiceEntity.protectiveEquipmentFailure.push(equipment);
            const protectiveEquipmentHiddenControls = [];
            protectiveEquipmentHiddenControls.push({ id: 'DisplayOrder', control: new FormControl(equipment.displayOrder) });
            protectiveEquipmentHiddenControls.push({ id: protectiveEquipmentListParentIdKey, control: new FormControl(fireServiceEntity.idHash) });
            protectiveEquipmentHiddenControls.push({ id: protectiveEquipmentListItemIdKey, control: new FormControl(equipment.idHash) });
            protectiveEquipmentHiddenControls.push({ id: '_self', control: new FormControl(equipment._links.self.href) });
            const protectiveEquipmentControls = this.lds.addListDetailItem(ProtectiveEquipmentFailure.SESSION_NAME, protectiveEquipmentListItemIdKey, protectiveEquipmentHiddenControls).formControls;
            equipment.populateSession(protectiveEquipmentControls, this.ols);
          });
        });
        return of(incident);
      }),
      catchError(error => {
        return of(incident);
      }));
  }

  /**
   *
   * @param incident
   */
  private populateArsonSession(incident: Incident) {
    const arsonJuvenileFiresetterItemIdKey = 'ArsonJuvenileFiresetter_ID';
    this.fss.setIdKeyForSession(ArsonJuvenileFiresetter.SESSION_NAME, arsonJuvenileFiresetterItemIdKey);
    return incident.relatedEntity(Arson.REL_NAME).get(Arson).pipe(
      flatMap(arson => {
        const arsonCaseDetails = new ArsonCaseDetails();
        Object.assign(arsonCaseDetails, arson.caseDetails);
        arson.caseDetails = arsonCaseDetails;
        const arsonCaseDetailsFormControls = this.fss.getAllFormControlsForSession(ArsonCaseDetails.SESSION_NAME);
        arsonCaseDetails.populateSession(arsonCaseDetailsFormControls, this.ols);
        const arsonAgencyReferred = new ArsonAgencyReferredTo();
        Object.assign(arsonAgencyReferred, arson.agencyReferred);
        arson.agencyReferred = arsonAgencyReferred;
        const arsonAgencyReferredFormControls = this.fss.getAllFormControlsForSession(ArsonAgencyReferredTo.SESSION_NAME);
        arsonAgencyReferred.populateSession(arsonAgencyReferredFormControls, this.ols);
        this._activeIncidentEntity.arson = arson;
        const outObservables = [];
        outObservables.push(of(arson));
        outObservables.push(arson.relatedCollection(ArsonJuvenileFiresetter.REL_NAME).get(ArsonJuvenileFiresetter));
        return forkJoin(outObservables);
      }),
      flatMap(inObservables => {
        const arson: any = inObservables[0];
        const juvenileFiresetters: any = inObservables[1];
        arson.arsonJuvenileFiresetter = [];
        juvenileFiresetters.sort((a, b) => a.displayOrder > b.displayOrder ? a.displayOrder === b.displayOrder ? 0 : 1 : -1);
        juvenileFiresetters.forEach(firesetter => {
          arson.arsonJuvenileFiresetter.push(firesetter);
          const arsonJuvenileFiresetterHiddenControls = [];
          arsonJuvenileFiresetterHiddenControls.push({ id: 'DisplayOrder', control: new FormControl(firesetter.displayOrder) });
          arsonJuvenileFiresetterHiddenControls.push({id: arsonJuvenileFiresetterItemIdKey, control: new FormControl(firesetter.idHash)});
          const juvenileFiresetterControls = this.lds.addListDetailItem(ArsonJuvenileFiresetter.SESSION_NAME, arsonJuvenileFiresetterItemIdKey, arsonJuvenileFiresetterHiddenControls).formControls;
          firesetter.populateSession(juvenileFiresetterControls, this.ols);
        });
        return of(incident);
      }),
      catchError(error => {
        return of(incident);
      }));
  }

  /**
   *
   * @param incident
   */
  private populateWildlandSession(incident: Incident) {
    return incident.relatedEntity(Wildland.REL_NAME).get(Wildland).pipe(
      flatMap(wildland => {
        const wildlandIgnitionDetails = new WildlandIgnitionDetails();
        Object.assign(wildlandIgnitionDetails, wildland.ignitionDetails);
        wildland.ignitionDetails = wildlandIgnitionDetails;
        const wildlandIgnitionDetailsFormControls = this.fss.getAllFormControlsForSession(WildlandIgnitionDetails.SESSION_NAME);
        wildlandIgnitionDetails.populateSession(wildlandIgnitionDetailsFormControls, this.ols);
        const wildlandPropertyDetails = new WildlandPropertyDetails();
        Object.assign(wildlandPropertyDetails, wildland.propertyDetails);
        wildland.propertyDetails = wildlandPropertyDetails;
        const wildlandPropertyDetailsFormControls = this.fss.getAllFormControlsForSession(WildlandPropertyDetails.SESSION_NAME);
        wildlandPropertyDetails.populateSession(wildlandPropertyDetailsFormControls, this.ols);
        this._activeIncidentEntity.wildland = wildland;
        return of(incident);
      }),
      catchError(error => {
        return of(incident);
      }));
  }

  /**
   *
   * @param incident
   */
  private populateHazMatSession(incident: Incident) {
    return incident.relatedEntity(HazMat.REL_NAME).get(HazMat).pipe(
      flatMap(hazMat => {
        this._activeIncidentEntity.hazMat = hazMat;
        return incident.relatedCollection(InputFormHeader.REL_NAME).get(InputFormHeader);
      }),
      flatMap(inputFormHeaders => {
        const hazMatUnitOp = inputFormHeaders.find(inputFormHeader => inputFormHeader.headerType === 'IMInputFormHazMatUnitOperation');
        if (hazMatUnitOp != null) {
          // Since there isn't a 1-1 correlation between our API object and what we show in the UI, we need to create a new object here from both inputForm objects
          const specialUnitReport = new HazMatSpecialUnitReport();
          specialUnitReport.requestedById = hazMatUnitOp.inputFormHazMatUnitOperation.requestedById;
          specialUnitReport.requestedByName = hazMatUnitOp.inputFormHazMatUnitOperation.requestedBy;
          specialUnitReport.unit = hazMatUnitOp.inputFormHazMatUnitOperation.unitId;
          specialUnitReport.status = hazMatUnitOp.status;
          const specialUnitReportControls = this.fss.getAllFormControlsForSession(HazMatSpecialUnitReport.SESSION_NAME);
          specialUnitReport.populateSession(specialUnitReportControls, this.ols);
        }
        return of(incident);
      }),
      catchError(error => {
        return of(incident);
      }));
  }

  /**
   * Save the incident given it's current state as represented by the values in the form
   */
  public saveIncident(incidentUpdate?: Incident) {
    const saveObservables = [];
    // Basic
    const basicObs = this.saveBasicSession(incidentUpdate);
    if (basicObs != null) {
      saveObservables.push(basicObs);
    }
    // PersonsInvolved
    const personsInvolvedObs = this.saveBasicPersonsInvolved();
    if (personsInvolvedObs != null) {
      saveObservables.push(personsInvolvedObs);
    }
    // Resources
    const resourceObs = this.saveResourcesSession();
    if (resourceObs != null) {
      saveObservables.push(resourceObs);
    }
    // ResourcesPersonnel
    const resourcePersonnelObs = this.saveResourcesPersonnelSession();
    if (resourcePersonnelObs != null) {
      saveObservables.push(resourcePersonnelObs);
    }
    // Fire and Structure
    const fireObs = this.saveFireSession();
    if (fireObs != null) {
      saveObservables.push(fireObs);
    }
    // Civilian Casualty
    const civilianCasualtyObs = this.saveCivilianCasualty();
    if (civilianCasualtyObs != null) {
      saveObservables.push(civilianCasualtyObs);
    }
    // Fire Service Casualty
    const fireServiceCasualtyObs = this.saveFireServiceCasualty();
    if (fireServiceCasualtyObs != null) {
      saveObservables.push(fireServiceCasualtyObs.pipe(
        flatMap(obs => {
          // Fire Service Protective Equipment - Doing this here because we need to wait for the fire service casualty to save before we can add protective equipment
          const protectiveEquipmentObs = this.saveProtectiveEquipment();
          if (protectiveEquipmentObs != null) {
            return protectiveEquipmentObs;
          }
          return of(obs);
        })
      ));
    } else {
      const potectiveEquipmentObs = this.saveProtectiveEquipment();
      if (potectiveEquipmentObs != null) {
        saveObservables.push(potectiveEquipmentObs);
      }
    }
    // Arson
    const arsonObs = this.saveArson();
    if (arsonObs != null) {
      saveObservables.push(arsonObs.pipe(
        flatMap(obs => {
          // JuvenileFiresetter - Doing this here because we need to wait for the arson to save before we can add the JuvenileFiresetter
          const juvenileFiresetterObs = this.saveArsonJuvenileFiresetter();
          if (juvenileFiresetterObs != null) {
            return juvenileFiresetterObs;
          }
          return of(obs);
        })
      ));
    } else {
      const juvenileFiresetterObs = this.saveArsonJuvenileFiresetter();
      if (juvenileFiresetterObs != null) {
        saveObservables.push(juvenileFiresetterObs);
      }
    }
    // Wildland
    const wildlandObs = this.saveWildland();
    if (wildlandObs != null) {
      saveObservables.push(wildlandObs);
    }
    return forkJoin(saveObservables);
  }

  /**
   * Saves all Basic session data to the API
   */
  private saveBasicSession(incidentUpdate?: Incident) {
    const saveObservables = [];
    const incidentMutualAid = this._activeIncidentEntity.mutualAid;
    const incidentEntityUpdate = incidentUpdate == null ? new Incident() : incidentUpdate;
    const basicResponseUpdate = this.fss.getSessionFormState(BasicResponse.SESSION_NAME, null, true, true);
    if (Object.getOwnPropertyNames(basicResponseUpdate).length > 0) {
      incidentEntityUpdate.response = BasicResponse.fromSessionState(basicResponseUpdate);
      incidentEntityUpdate.response.status = incidentEntityUpdate.closedDateTime != null ? BasicResponseStatus.CLOSED : BasicResponseStatus.OPEN;
    } else if (incidentEntityUpdate.closedDateTime != null) {
      incidentEntityUpdate.response = new BasicResponse();
      incidentEntityUpdate.response.status = BasicResponseStatus.CLOSED;
    }
    const basicSummaryUpdate = this.fss.getSessionFormState(BasicSummary.SESSION_NAME, null, true, true);
    if (Object.getOwnPropertyNames(basicSummaryUpdate).length > 0) {
      incidentEntityUpdate.summary = BasicSummary.fromSessionState(basicSummaryUpdate);
    }
    if (incidentEntityUpdate.response != null || incidentEntityUpdate.summary != null) {
      saveObservables.push(this._activeIncidentEntity.update(incidentEntityUpdate).pipe(
        tap(() => {
          this.fss.markSessionPristine(BasicResponse.SESSION_NAME);
          // We handle the pristine call separately in the summary tab since mutual aid depts are saved separately from the other summary fields
          // We only need these since the rest are readonly
          this.fss.getFormControlForSession(BasicSummary.SESSION_NAME, 'PersonnelName').markAsPristine();
          this.fss.getFormControlForSession(BasicSummary.SESSION_NAME, 'OfficerAssignment').markAsPristine();
          this.fss.getFormControlForSession(BasicSummary.SESSION_NAME, 'OfficerDate').markAsPristine();
        })
      ));
    }
    // TODO: A bit hacky - make this cleaner (at least get rid of the hard-coded length)
    const mutualAidLength = this._activeIncidentEntity.mutualAid.length;
    for (let i = 1; i <= 5; ++i) {
      if (basicSummaryUpdate['MutualAidIncidentNumber' + i] != null || basicSummaryUpdate['MutualAidDepartment' + i] != null) {
        if (i > mutualAidLength) {
          // we're doing an add
          const mutualAidEntity = BasicSummaryMutualAid.fromSessionState({
            MutualAidIncidentNumber: basicSummaryUpdate['MutualAidIncidentNumber' + i],
            MutualAidDepartment: basicSummaryUpdate['MutualAidDepartment' + i]
          });
          mutualAidEntity.displayOrder = i;
          mutualAidEntity.incident = this._activeIncidentEntity;
          saveObservables.push(this.ds.getResourceCollection(BasicSummaryMutualAid.REL_NAME).add(REST.transformEntityForSave(mutualAidEntity)).pipe(
            tap(response => {
              mutualAidEntity._links = response['_links'];
              mutualAidEntity.http = this.http;
              const self = response['_links']['self']['href'];
              const selfParts = self.split('/');
              mutualAidEntity.idHash = selfParts[selfParts.length - 1];
              incidentMutualAid.push(mutualAidEntity);
              this.fss.getFormControlForSession(BasicSummary.SESSION_NAME, 'MutualAidIncidentNumber' + i).markAsPristine();
              this.fss.getFormControlForSession(BasicSummary.SESSION_NAME, 'MutualAidDepartment' + i).markAsPristine();
            })));
        } else {
          // we're doing an update
          const mutualAidEntity = incidentMutualAid[i - 1];
          const mutualAidUpdate = {};
          const newNumber = basicSummaryUpdate['MutualAidIncidentNumber' + i];
          const newDept = basicSummaryUpdate['MutualAidDepartment' + i];
          if (newNumber != null) {
            mutualAidUpdate['MutualAidIncidentNumber'] = newNumber;
          }
          if (newDept != null) {
            mutualAidUpdate['MutualAidDepartment'] = newDept;
          }
          saveObservables.push(mutualAidEntity.update(BasicSummaryMutualAid.fromSessionState(mutualAidUpdate)).pipe(
            tap(() => {
              this.fss.getFormControlForSession(BasicSummary.SESSION_NAME, 'MutualAidIncidentNumber' + i).markAsPristine();
              this.fss.getFormControlForSession(BasicSummary.SESSION_NAME, 'MutualAidDepartment' + i).markAsPristine();
            })
          ));
        }
      }
    }
    if (saveObservables.length > 0) {
      return forkJoin(saveObservables);
    } else {
      return null;
    }
  }

  /**
   * Saves all PersonsInvolved session data to the API
   */
  private saveBasicPersonsInvolved() {
    const saveObservables = [];
    const idKey = this.fss.getIdKeyForSession(IncidentBasicPersonsInvolvedComponent.SESSION_NAME);
    const basicPersonsInvolved = this.fss.getSessionFormState(IncidentBasicPersonsInvolvedComponent.SESSION_NAME, null, true, true);
    basicPersonsInvolved[IncidentBasicPersonsInvolvedComponent.SESSION_NAME].forEach((personInvolved, i) => {
      // If we have a '_self' key we know this was a pre-existing entry. Just need to figure out if we should update or delete
      if (personInvolved['_self'] != null) {
        const index = this._activeIncidentEntity.personsInvolved.findIndex(person => person.idHash === personInvolved[idKey]);
        const personInvolvedEntity = this._activeIncidentEntity.personsInvolved[index];
        if (personInvolved['ACTION'] === 'DELETE') {
          saveObservables.push(this.ds.getResourceCollection(PersonInvolved.REL_NAME).remove(personInvolvedEntity).pipe(tap(() => {
            this.lds.purgeListDetailItem(IncidentBasicPersonsInvolvedComponent.SESSION_NAME, idKey, personInvolved[idKey]);
            this._activeIncidentEntity.personsInvolved.splice(index, 1);
          })));
        } else {
          if (Object.getOwnPropertyNames(personInvolved).length > 3) { // We should always have a _self, ID, and DisplayOrder so we check for > 2 changes
            saveObservables.push(personInvolvedEntity.update(PersonInvolved.fromSessionState(personInvolved)).pipe(
              tap(() => {
                this.fss.markSessionPristine(IncidentBasicPersonsInvolvedComponent.SESSION_NAME, personInvolvedEntity.idHash);
              })
            ));
          }
        }
      } else if (personInvolved['ACTION'] === 'CREATE') {
        const personInvolvedEntity = PersonInvolved.fromSessionState(personInvolved);
        personInvolvedEntity.incident = this._activeIncidentEntity;
        saveObservables.push(this.ds.getResourceCollection(PersonInvolved.API_PATH_NAME).add(REST.transformEntityForSave(personInvolvedEntity)).pipe(
          tap(response => {
            personInvolvedEntity._links = response['_links'];
            personInvolvedEntity.http = this.http;
            const self = response['_links']['self']['href'];
            const selfParts = self.split('/');
            personInvolvedEntity.idHash = selfParts[selfParts.length - 1];
            this.lds.handleNewItemPersisted(IncidentBasicPersonsInvolvedComponent.SESSION_NAME, idKey, personInvolved[idKey], selfParts[selfParts.length - 1], self);
            if (this._activeIncidentEntity.personsInvolved == null) {
              this._activeIncidentEntity.personsInvolved = [];
            }
            this._activeIncidentEntity.personsInvolved.push(personInvolvedEntity);
            this.fss.markSessionPristine(IncidentBasicPersonsInvolvedComponent.SESSION_NAME, personInvolvedEntity.idHash);
          })));
      }
    });
    if (saveObservables.length > 0) {
      return forkJoin(saveObservables);
    } else {
      return null;
    }
  }

  /**
   * Saves all Resources Unit and Narrative session data to the API
   */
  private saveResourcesSession() {
    const saveObservables = [];
    const resourcesCollection = this._activeIncidentEntity.units;
    const resourceEntityUpdates: Resources[] = [];
    // ResourcesUnit
    const resourcesUnit = this.fss.getSessionFormState(ResourcesUnit.SESSION_NAME, null, true, true);
    resourcesUnit[ResourcesUnit.SESSION_NAME].forEach(resourceUnit => {
      const resourceEntityUpdate = new Resources();
      resourceEntityUpdate.idHash = resourceUnit[this.fss.getIdKeyForSession(ResourcesUnit.SESSION_NAME)];
      if (Object.keys(resourceUnit).length > 2) {
        resourceEntityUpdates.push(resourceEntityUpdate);
        resourceEntityUpdate.unit = ResourcesUnit.fromSessionState(resourceUnit);
      }
    });
    // ResourcesUnitNarrative
    const resourcesNarrative = this.fss.getSessionFormState(ResourcesUnitNarrative.SESSION_NAME, null, true, true);
    resourcesNarrative[ResourcesUnitNarrative.SESSION_NAME].forEach(resourceUnitNarrative => {
      if (Object.keys(resourceUnitNarrative).length > 2) {
        let resourceEntityUpdate = resourceEntityUpdates.find(resource => resource.idHash === resourceUnitNarrative[this.fss.getIdKeyForSession(ResourcesUnitNarrative.SESSION_NAME)]);
        if (resourceEntityUpdate == null) {
          resourceEntityUpdate = new Resources();
          resourceEntityUpdate.idHash = resourceUnitNarrative[this.fss.getIdKeyForSession(ResourcesUnit.SESSION_NAME)];
          resourceEntityUpdates.push(resourceEntityUpdate);
        }
        resourceEntityUpdate.narrative = ResourcesUnitNarrative.fromSessionState(resourceUnitNarrative);
      }
    });
    // We can't add or delete units so this is always an update
    resourcesCollection.forEach(resourceEntity => {
      const resourceEntityUpdate = resourceEntityUpdates.find(resourceUpdate => resourceUpdate.idHash === resourceEntity.idHash);
      if (resourceEntityUpdate != null) {
        saveObservables.push(resourceEntity.update(resourceEntityUpdate).pipe(
          tap(() => {
            this.fss.markSessionPristine(ResourcesUnit.SESSION_NAME, resourceEntity.idHash);
            this.fss.markSessionPristine(ResourcesUnitNarrative.SESSION_NAME, resourceEntity.idHash);
          })
        ));
      }
    });
    if (saveObservables.length > 0) {
      return forkJoin(saveObservables);
    } else {
      return null;
    }
  }

  /**
   * Saves all Resources Personnel session data to the API
   */
  private saveResourcesPersonnelSession() {
    const saveObservables = [];
    const idKey = this.fss.getIdKeyForSession(ResourcesUnitPersonnel.SESSION_NAME);
    const resourcesUnitPersonnel = this.fss.getSessionFormState(ResourcesUnitPersonnel.SESSION_NAME, null, true, true);
    resourcesUnitPersonnel[ResourcesUnitPersonnel.SESSION_NAME].forEach((personnel, i) => {
      // If we have a '_self' key we know this was a pre-existing entry. we just need to figure out if we should PATCH or DELETE
      const resourceEntity = this._activeIncidentEntity.units.find(resources => resources.idHash === personnel[this.fss.getIdKeyForSession(ResourcesUnit.SESSION_NAME)]);
      if (personnel['_self'] != null) {
        const index = resourceEntity.personnel.findIndex(person => person.idHash === personnel[idKey]);
        const personnelEntity = resourceEntity.personnel[index];
        if (personnel['ACTION'] === 'DELETE') {
          saveObservables.push(this.ds.getResourceCollection(ResourcesUnitPersonnel.REL_NAME).remove(personnelEntity).pipe(
            tap(() => {
              this.lds.purgeListDetailItem(ResourcesUnitPersonnel.SESSION_NAME, idKey, personnel[idKey]);
              resourceEntity.personnel.splice(index, 1);
            })));
        } else {
          if (Object.keys(personnel).length > 4) { // Will always have _self, DisplayOrder, ID, and Parent_ID 
            saveObservables.push(personnelEntity.update(ResourcesUnitPersonnel.fromSessionState(personnel)).pipe(
              tap(() => {
                this.fss.markSessionPristine(ResourcesUnitPersonnel.SESSION_NAME, personnelEntity.idHash);
              })
            ));
          }
        }
      } else if (personnel['ACTION'] === 'CREATE') {
        const personnelEntity = ResourcesUnitPersonnel.fromSessionState(personnel);
        personnelEntity.unit = resourceEntity;
        personnelEntity.displayOrder = i + 1;
        saveObservables.push(this.ds.getResourceCollection(ResourcesUnitPersonnel.REL_NAME).add(REST.transformEntityForSave(personnelEntity)).pipe(
          tap(response => {
            personnelEntity._links = response['_links'];
            personnelEntity.http = this.http;
            const self = response['_links']['self']['href'];
            const selfParts = self.split('/');
            personnelEntity.idHash = selfParts[selfParts.length - 1];
            this.lds.handleNewItemPersisted(ResourcesUnitPersonnel.SESSION_NAME, idKey, personnel[idKey], selfParts[selfParts.length - 1], self);
            if (resourceEntity.personnel == null) {
              resourceEntity.personnel = [];
            }
            resourceEntity.personnel.push(personnelEntity);
            this.fss.markSessionPristine(ResourcesUnitPersonnel.SESSION_NAME, personnelEntity.idHash);
          })));
      }
    });
    if (saveObservables.length > 0) {
      return forkJoin(saveObservables);
    } else {
      return null;
    }
  }

  /**
   * Saves all Fire session data to the API
   */
  private saveFireSession(incidentUpdate?: Incident) {
    const saveObservables = [];
    const fireEntityUpdate = new Fire();
    const fireIgnitionUpdate = this.fss.getSessionFormState(FireIgnitionDetails.SESSION_NAME, null, true, true);
    if (Object.getOwnPropertyNames(fireIgnitionUpdate).length > 0) {
      fireEntityUpdate.ignitionDetails = FireIgnitionDetails.fromSessionState(fireIgnitionUpdate);
    }
    const fireEquipmentUpdate = this.fss.getSessionFormState(FireEquipmentDetails.SESSION_NAME, null, true, true);
    if (Object.getOwnPropertyNames(fireEquipmentUpdate).length > 0) {
      fireEntityUpdate.equipmentDetails = FireEquipmentDetails.fromSessionState(fireEquipmentUpdate);
    }
    if (fireEntityUpdate.ignitionDetails != null || fireEntityUpdate.equipmentDetails != null) {
      if (this._activeIncidentEntity.fire != null) {
        saveObservables.push(this._activeIncidentEntity.fire.update(fireEntityUpdate).pipe(
          tap(() => {
            this.fss.markSessionPristine(FireIgnitionDetails.SESSION_NAME);
            this.fss.markSessionPristine(FireEquipmentDetails.SESSION_NAME);
          })
        ));
        const structObs = this.saveStructureSession(this._activeIncidentEntity.fire);
        if (structObs != null) {
          saveObservables.push(structObs);
        }
      } else {
        fireEntityUpdate.incident = this._activeIncidentEntity;
        saveObservables.push(this.ds.getResourceCollection(Fire.REL_NAME).add(REST.transformEntityForSave(fireEntityUpdate)).pipe(
          flatMap(response => {
            fireEntityUpdate._links = response['_links'];
            fireEntityUpdate.http = this.http;
            const self = response['_links']['self']['href'];
            const selfParts = self.split('/');
            fireEntityUpdate.idHash = selfParts[selfParts.length - 1];
            this._activeIncidentEntity.fire = fireEntityUpdate;
            this.fss.markSessionPristine(FireIgnitionDetails.SESSION_NAME);
            this.fss.markSessionPristine(FireEquipmentDetails.SESSION_NAME);
            const structObs = this.saveStructureSession(this._activeIncidentEntity.fire);
            if (structObs != null) {
              return structObs;
            } else {
              return of(null);
            }
          }
          )));
      }
      return forkJoin(saveObservables);
    } else {
      return null;
    };
  }

  /**
   * Saves all Structure session data to the API
   */
  private saveStructureSession(fireEntity?: Fire) {
    const structureEntityUpdate = new Structure();
    const structureDescriptionUpdate = this.fss.getSessionFormState(StructureDescriptionStatus.SESSION_NAME, null, true, true);
    if (Object.getOwnPropertyNames(structureDescriptionUpdate).length > 0) {
      structureEntityUpdate.descriptionStatus = StructureDescriptionStatus.fromSessionState(structureDescriptionUpdate);
    }
    const structureSystemsUpdate = this.fss.getSessionFormState(StructureSystemsDamage.SESSION_NAME, null, true, true);
    if (Object.getOwnPropertyNames(structureSystemsUpdate).length > 0) {
      structureEntityUpdate.systemsDamage = StructureSystemsDamage.fromSessionState(structureSystemsUpdate);
    }
    if (structureEntityUpdate.descriptionStatus != null || structureEntityUpdate.systemsDamage != null) {
      if (fireEntity.structure != null) {
        return fireEntity.structure.update(structureEntityUpdate).pipe(
          tap(() => {
            this.fss.markSessionPristine(StructureDescriptionStatus.SESSION_NAME);
            this.fss.markSessionPristine(StructureSystemsDamage.SESSION_NAME);
          })
        );
      } else {
        structureEntityUpdate.fire = fireEntity;
        return this.ds.getResourceCollection(Structure.REL_NAME).add(REST.transformEntityForSave(structureEntityUpdate)).pipe(
          tap(response => {
            structureEntityUpdate._links = response['_links'];
            structureEntityUpdate.http = this.http;
            const self = response['_links']['self']['href'];
            const selfParts = self.split('/');
            structureEntityUpdate.idHash = selfParts[selfParts.length - 1];
            fireEntity.structure = structureEntityUpdate;
            this.fss.markSessionPristine(StructureDescriptionStatus.SESSION_NAME);
            this.fss.markSessionPristine(StructureSystemsDamage.SESSION_NAME);
          }));
      }
    } else {
      return null;
    };
  }

  /**
   * Saves all Civilian Casualty session data to the API
   */
  private saveCivilianCasualty() {
    const saveObservables = [];
    const idKey = this.fss.getIdKeyForSession(CivilianInjury.SESSION_NAME);
    const civilianCasualtyUpdates: Object[] = [];
    // Civilian Injury
    const civilianInjuries = this.fss.getSessionFormState(CivilianInjury.SESSION_NAME, null, true, true);
    civilianInjuries[CivilianInjury.SESSION_NAME].forEach(civilianInjury => {
      if (Object.keys(civilianInjury).length > 3 || civilianInjury['ACTION'] === 'DELETE') { // Will wlways have _self, DisplayOrder, and ID
        const civilianCasualtyUpdate = {};
        civilianCasualtyUpdate['ACTION'] = civilianInjury['ACTION'];
        civilianCasualtyUpdate['_self'] = civilianInjury['_self'];
        civilianCasualtyUpdate[idKey] = civilianInjury[idKey];
        civilianCasualtyUpdate['injury'] = CivilianInjury.fromSessionState(civilianInjury);
        civilianCasualtyUpdate['displayOrder'] = civilianInjury.DisplayOrder;
        civilianCasualtyUpdates.push(civilianCasualtyUpdate);
      }
    });
    // Civilian Factors
    const civilianFactors = this.fss.getSessionFormState(CivilianFactors.SESSION_NAME, null, true, true);
    civilianFactors[CivilianFactors.SESSION_NAME].forEach(civilianFactor => {
      if (Object.keys(civilianFactor).length > 3 || civilianFactor['ACTION'] === 'DELETE') { // Will wlways have _self, DisplayOrder, and ID
        let civilianCasualtyUpdate = civilianCasualtyUpdates.find(civilianCasualty => civilianCasualty[idKey] === civilianFactor[idKey]);
        if (civilianCasualtyUpdate == null) {
          civilianCasualtyUpdate = {};
          civilianCasualtyUpdate['ACTION'] = civilianFactor['ACTION'];
          civilianCasualtyUpdate['_self'] = civilianFactor['_self'];
          civilianCasualtyUpdate[idKey] = civilianFactor[idKey];
          civilianCasualtyUpdate['displayOrder'] = civilianFactor.DisplayOrder;
          civilianCasualtyUpdates.push(civilianCasualtyUpdate);
        }
        civilianCasualtyUpdate['factors'] = CivilianFactors.fromSessionState(civilianFactor);
      }
    });
    civilianCasualtyUpdates.forEach(civilianUpdate => {
      if (civilianUpdate['_self'] != null) {
        const index = this._activeIncidentEntity.civilianCasualty.findIndex(civilian => civilian.idHash === civilianUpdate[idKey]);
        const civilianEntity = this._activeIncidentEntity.civilianCasualty[index];
        if (civilianUpdate['ACTION'] === 'DELETE') {
          saveObservables.push(this.ds.getResourceCollection(Civilian.REL_NAME).remove(civilianEntity).pipe(
            tap(() => {
              this.lds.purgeListDetailItem(CivilianInjury.SESSION_NAME, idKey, civilianUpdate[idKey]);
              this.lds.purgeListDetailItem(CivilianFactors.SESSION_NAME, idKey, civilianUpdate[idKey]);
              this._activeIncidentEntity.civilianCasualty.splice(index, 1);
            })));
        } else {
          const civilianEntityUpdate = new Civilian();
          civilianEntityUpdate.injury = civilianUpdate['injury'];
          civilianEntityUpdate.factors = civilianUpdate['factors'];
          saveObservables.push(civilianEntity.update(civilianEntityUpdate).pipe(
            tap(() => {
              this.fss.markSessionPristine(CivilianInjury.SESSION_NAME, civilianEntity.idHash);
              this.fss.markSessionPristine(CivilianFactors.SESSION_NAME, civilianEntity.idHash);
            })
          ));
        }
      } else if (civilianUpdate['ACTION'] === 'CREATE') {
        const civilianEntity = new Civilian();
        civilianEntity.injury = civilianUpdate['injury'];
        civilianEntity.factors = civilianUpdate['factors'];
        civilianEntity.displayOrder = civilianUpdate['displayOrder'];
        civilianEntity.incident = this._activeIncidentEntity;
        saveObservables.push(this.ds.getResourceCollection(Civilian.REL_NAME).add(REST.transformEntityForSave(civilianEntity)).pipe(
          tap(response => {
            civilianEntity._links = response['_links'];
            civilianEntity.http = this.http;
            const self = response['_links']['self']['href'];
            const selfParts = self.split('/');
            civilianEntity.idHash = selfParts[selfParts.length - 1];
            this.lds.handleNewItemPersisted(CivilianInjury.SESSION_NAME, idKey, civilianUpdate[idKey], selfParts[selfParts.length - 1], self);
            this.lds.handleNewItemPersisted(CivilianFactors.SESSION_NAME, idKey, civilianUpdate[idKey], selfParts[selfParts.length - 1], self);
            if (this._activeIncidentEntity.civilianCasualty == null) {
              this._activeIncidentEntity.civilianCasualty = [];
            }
            this._activeIncidentEntity.civilianCasualty.push(civilianEntity);
            this.fss.markSessionPristine(CivilianInjury.SESSION_NAME, civilianEntity.idHash);
            this.fss.markSessionPristine(CivilianFactors.SESSION_NAME, civilianEntity.idHash);
          })));
      }
    });
    if (saveObservables.length > 0) {
      return forkJoin(saveObservables);
    } else {
      return null;
    }
  }

  /**
   * Saves all Fire Service Casualty session data to the API
   */
  private saveFireServiceCasualty() {
    const saveObservables = [];
    const idKey = this.fss.getIdKeyForSession(FireServiceInjury.SESSION_NAME);
    const fireServiceUpdates: Object[] = [];
    // Fire Service Injury
    const fireServiceInjuries = this.fss.getSessionFormState(FireServiceInjury.SESSION_NAME, null, true, true);
    fireServiceInjuries[FireServiceInjury.SESSION_NAME].forEach((fireServiceInjury, index) => {
      if (Object.keys(fireServiceInjury).length > 3 || fireServiceInjury['ACTION'] === 'DELETE') {  // Will wlways have _self, DisplayOrder, and ID
        const fireServiceUpdate = {};
        fireServiceUpdate['ACTION'] = fireServiceInjury['ACTION'];
        fireServiceUpdate['_self'] = fireServiceInjury['_self'];
        fireServiceUpdate[idKey] = fireServiceInjury[idKey];
        fireServiceUpdate['injury'] = FireServiceInjury.fromSessionState(fireServiceInjury);
        fireServiceUpdate['displayOrder'] = fireServiceInjury.DisplayOrder;
        fireServiceUpdates.push(fireServiceUpdate);

      }
    });
    // Fire Service Factors
    const fireServiceFactors = this.fss.getSessionFormState(FireServiceFactors.SESSION_NAME, null, true, true);
    fireServiceFactors[FireServiceFactors.SESSION_NAME].forEach((fireServiceFactor, index) => {
      if (Object.keys(fireServiceFactor).length > 3 || fireServiceFactor['ACTION'] === 'DELETE') { // Will wlways have _self, DisplayOrder, and ID
        let fireServiceUpdate = fireServiceUpdates.find(fireService => fireService[idKey] === fireServiceFactor[idKey]);
        if (fireServiceUpdate == null) {
          fireServiceUpdate = {};
          fireServiceUpdate['ACTION'] = fireServiceFactor['ACTION'];
          fireServiceUpdate['_self'] = fireServiceFactor['_self'];
          fireServiceUpdate[idKey] = fireServiceFactor[idKey];
          fireServiceUpdate['displayOrder'] = fireServiceFactor.DisplayOrder;
          fireServiceUpdates.push(fireServiceUpdate);
        }
        fireServiceUpdate['factors'] = FireServiceFactors.fromSessionState(fireServiceFactor);
      }
    });
    fireServiceUpdates.forEach(fireServiceUpdate => {
      if (fireServiceUpdate['_self'] != null) {
        const index = this._activeIncidentEntity.fireServiceCasualty.findIndex(fireService => fireService.idHash === fireServiceUpdate[idKey]);
        const fireServiceEntity = this._activeIncidentEntity.fireServiceCasualty[index];
        if (fireServiceUpdate['ACTION'] === 'DELETE') {
          saveObservables.push(this.ds.getResourceCollection(FireService.REL_NAME).remove(fireServiceEntity).pipe(
            tap(() => {
              this.lds.purgeListDetailItem(FireServiceInjury.SESSION_NAME, idKey, fireServiceUpdate[idKey]);
              this.lds.purgeListDetailItem(FireServiceFactors.SESSION_NAME, idKey, fireServiceUpdate[idKey]);
              this._activeIncidentEntity.fireServiceCasualty.splice(index, 1);
            })));
        } else {
          const fireServiceEntityUpdate = new FireService();
          fireServiceEntityUpdate.injury = fireServiceUpdate['injury'];
          fireServiceEntityUpdate.factors = fireServiceUpdate['factors'];
          saveObservables.push(fireServiceEntity.update(fireServiceEntityUpdate).pipe(
            tap(() => {
              this.fss.markSessionPristine(FireServiceInjury.SESSION_NAME, fireServiceEntity.idHash);
              this.fss.markSessionPristine(FireServiceFactors.SESSION_NAME, fireServiceEntity.idHash);
            })
          ));
        }
      } else if (fireServiceUpdate['ACTION'] === 'CREATE') {
        const fireServiceEntity = new FireService();
        fireServiceEntity.injury = fireServiceUpdate['injury'];
        fireServiceEntity.factors = fireServiceUpdate['factors'];
        fireServiceEntity.displayOrder = fireServiceUpdate['displayOrder'];
        fireServiceEntity.incident = this._activeIncidentEntity;
        saveObservables.push(this.ds.getResourceCollection(FireService.REL_NAME).add(REST.transformEntityForSave(fireServiceEntity)).pipe(
          flatMap(response => {
            fireServiceEntity._links = response['_links'];
            fireServiceEntity.http = this.http;
            const self = response['_links']['self']['href'];
            const selfParts = self.split('/');
            fireServiceEntity.idHash = selfParts[selfParts.length - 1];
            this.lds.updateAssociations(ProtectiveEquipmentFailure.SESSION_NAME, idKey, fireServiceUpdate[idKey], selfParts[selfParts.length - 1]);
            this.lds.handleNewItemPersisted(FireServiceInjury.SESSION_NAME, idKey, fireServiceUpdate[idKey], selfParts[selfParts.length - 1], self);
            this.lds.handleNewItemPersisted(FireServiceFactors.SESSION_NAME, idKey, fireServiceUpdate[idKey], selfParts[selfParts.length - 1], self);
            if (this._activeIncidentEntity.fireServiceCasualty == null) {
              this._activeIncidentEntity.fireServiceCasualty = [];
            }
            this._activeIncidentEntity.fireServiceCasualty.push(fireServiceEntity);
            this.fss.markSessionPristine(FireServiceInjury.SESSION_NAME, fireServiceEntity.idHash);
            this.fss.markSessionPristine(FireServiceFactors.SESSION_NAME, fireServiceEntity.idHash);
            return of(response);
          })));
      }
    });
    if (saveObservables.length > 0) {
      return forkJoin(saveObservables);
    } else {
      return null;
    }
  }

  /**
   * Saves all Fire Service Protective Equipment session data to the API
   */
  private saveProtectiveEquipment() {
    const saveObservables = [];
    const idKey = this.fss.getIdKeyForSession(ProtectiveEquipmentFailure.SESSION_NAME);
    const protectiveEquipmentFailure = this.fss.getSessionFormState(ProtectiveEquipmentFailure.SESSION_NAME, null, true, true);
    protectiveEquipmentFailure[ProtectiveEquipmentFailure.SESSION_NAME].forEach((equipment, i) => {
      // If we have a '_self' key we know this was a pre-existing entry. we just need to figure out if we should PATCH or DELETE
      const fireServiceCasualtyEntity = this._activeIncidentEntity.fireServiceCasualty.find(fireServiceCasualty => fireServiceCasualty.idHash === equipment[this.fss.getIdKeyForSession(FireServiceInjury.SESSION_NAME)]);
      if (equipment['_self'] != null) {
        const index = fireServiceCasualtyEntity.protectiveEquipmentFailure.findIndex(item => item.idHash === equipment[idKey]);
        const protectiveEquipmentEntity = fireServiceCasualtyEntity.protectiveEquipmentFailure[index];
        if (equipment['ACTION'] === 'DELETE') {
          saveObservables.push(this.ds.getResourceCollection(ProtectiveEquipmentFailure.REL_NAME).remove(protectiveEquipmentEntity).pipe(
            tap(() => {
              this.lds.purgeListDetailItem(ProtectiveEquipmentFailure.SESSION_NAME, idKey, equipment[idKey]);
              fireServiceCasualtyEntity.protectiveEquipmentFailure.splice(index, 1);
            })));
        } else {
          if (Object.keys(equipment).length > 4) {  // Will always have _self, DisplayOrder, ID, and Parent_ID
            saveObservables.push(protectiveEquipmentEntity.update(ResourcesUnitPersonnel.fromSessionState(equipment)).pipe(
              tap(() => {
                this.fss.markSessionPristine(ProtectiveEquipmentFailure.SESSION_NAME, protectiveEquipmentEntity.idHash);
              })
            ));
          }
        }
      } else if (equipment['ACTION'] === 'CREATE') {
        const protectiveEquipmentEntity = ProtectiveEquipmentFailure.fromSessionState(equipment);
        protectiveEquipmentEntity.fireServiceCasualty = fireServiceCasualtyEntity;
        protectiveEquipmentEntity.displayOrder = i + 1;
        saveObservables.push(this.ds.getResourceCollection(ProtectiveEquipmentFailure.REL_NAME).add(REST.transformEntityForSave(protectiveEquipmentEntity)).pipe(
          flatMap(response => {
            protectiveEquipmentEntity._links = response['_links'];
            protectiveEquipmentEntity.http = this.http;
            const self = response['_links']['self']['href'];
            const selfParts = self.split('/');
            protectiveEquipmentEntity.idHash = selfParts[selfParts.length - 1];
            this.lds.handleNewItemPersisted(ProtectiveEquipmentFailure.SESSION_NAME, idKey, equipment[idKey], selfParts[selfParts.length - 1], self);
            if (fireServiceCasualtyEntity.protectiveEquipmentFailure == null) {
              fireServiceCasualtyEntity.protectiveEquipmentFailure = [];
            }
            fireServiceCasualtyEntity.protectiveEquipmentFailure.push(protectiveEquipmentEntity);
            this.fss.markSessionPristine(ProtectiveEquipmentFailure.SESSION_NAME, protectiveEquipmentEntity.idHash);
            return of(response);
          })));
      }
    });
    if (saveObservables.length > 0) {
      return forkJoin(saveObservables);
    } else {
      return null;
    }
  }

  /**
   * Saves all Arson session data to the API
   */
  private saveArson() {
    const saveObservables = [];
    const arsonEntityUpdate = new Arson();
    const arsonCaseDetailsUpdate = this.fss.getSessionFormState(ArsonCaseDetails.SESSION_NAME, null, true, true);
    if (Object.getOwnPropertyNames(arsonCaseDetailsUpdate).length > 0) {
      arsonEntityUpdate.caseDetails = ArsonCaseDetails.fromSessionState(arsonCaseDetailsUpdate);
    }
    const arsonAgencyRefferedToUpdate = this.fss.getSessionFormState(ArsonAgencyReferredTo.SESSION_NAME, null, true, true);
    if (Object.getOwnPropertyNames(arsonAgencyRefferedToUpdate).length > 0) {
      arsonEntityUpdate.agencyReferred = ArsonAgencyReferredTo.fromSessionState(arsonAgencyRefferedToUpdate);
    }
    if (arsonEntityUpdate.caseDetails != null || arsonEntityUpdate.agencyReferred != null) {
      if (this._activeIncidentEntity.arson != null) {
        saveObservables.push(this._activeIncidentEntity.arson.update(arsonEntityUpdate).pipe(
          tap(() => {
            this.fss.markSessionPristine(ArsonCaseDetails.SESSION_NAME, this._activeIncidentEntity.arson.idHash);
            this.fss.markSessionPristine(ArsonAgencyReferredTo.SESSION_NAME, this._activeIncidentEntity.arson.idHash);
          })
        ));
      } else {
        arsonEntityUpdate.incident = this._activeIncidentEntity;
        saveObservables.push(this.ds.getResourceCollection(Arson.REL_NAME).add(REST.transformEntityForSave(arsonEntityUpdate)).pipe(
          tap(response => {
            arsonEntityUpdate._links = response['_links'];
            arsonEntityUpdate.http = this.http;
            const self = response['_links']['self']['href'];
            const selfParts = self.split('/');
            arsonEntityUpdate.idHash = selfParts[selfParts.length - 1];
            this._activeIncidentEntity.arson = arsonEntityUpdate;
            this.fss.markSessionPristine(ArsonCaseDetails.SESSION_NAME, this._activeIncidentEntity.arson.idHash);
            this.fss.markSessionPristine(ArsonAgencyReferredTo.SESSION_NAME, this._activeIncidentEntity.arson.idHash);
          })));
      }
    }
    if (saveObservables.length > 0) {
      return forkJoin(saveObservables);
    } else {
      return null;
    };
  }

  /**
   * Saves all Arson Juvenile Firesetter session data to the API
   */
  private saveArsonJuvenileFiresetter() {
    const saveObservables = [];
    const idKey = this.fss.getIdKeyForSession(ArsonJuvenileFiresetter.SESSION_NAME);
    const arsonJuvenileFireSetters = this.fss.getSessionFormState(ArsonJuvenileFiresetter.SESSION_NAME, null, true, true);
    arsonJuvenileFireSetters[ArsonJuvenileFiresetter.SESSION_NAME].forEach((fireSetter, i) => {
      // If we have a '_self' key we know this was a pre-existing entry. Just need to figure out if we should update or delete
      if (fireSetter['_self'] != null) {
        const index = this._activeIncidentEntity.arson.arsonJuvenileFiresetter.findIndex(juvenile => juvenile.idHash === fireSetter[idKey]);
        const arsonJuvenileFireSetterEntity = this._activeIncidentEntity.arson.arsonJuvenileFiresetter[index];
        if (fireSetter['ACTION'] === 'DELETE') {
          saveObservables.push(this.ds.getResourceCollection(ArsonJuvenileFiresetter.REL_NAME).remove(arsonJuvenileFireSetterEntity).pipe(tap(() => {
            this.lds.purgeListDetailItem(ArsonJuvenileFiresetter.SESSION_NAME, idKey, fireSetter[idKey]);
            this._activeIncidentEntity.arson.arsonJuvenileFiresetter.splice(index, 1);
          })));
        } else {
          if (Object.getOwnPropertyNames(fireSetter).length > 4) { // Will always have a _self, DisplayOrder, ID, and Parent_ID
            saveObservables.push(arsonJuvenileFireSetterEntity.update(ArsonJuvenileFiresetter.fromSessionState(fireSetter)).pipe(
              tap(() => {
                this.fss.markSessionPristine(ArsonJuvenileFiresetter.SESSION_NAME, arsonJuvenileFireSetterEntity.idHash);
              })
            ));
          }
        }
      } else if (fireSetter['ACTION'] === 'CREATE') {
        const arsonJuvenileFireSetterEntity = ArsonJuvenileFiresetter.fromSessionState(fireSetter);
        arsonJuvenileFireSetterEntity.arson = this._activeIncidentEntity.arson;
        saveObservables.push(this.ds.getResourceCollection(ArsonJuvenileFiresetter.REL_NAME).add(REST.transformEntityForSave(arsonJuvenileFireSetterEntity)).pipe(
          tap(response => {
            arsonJuvenileFireSetterEntity._links = response['_links'];
            arsonJuvenileFireSetterEntity.http = this.http;
            arsonJuvenileFireSetterEntity.displayOrder = i + 1;
            const self = response['_links']['self']['href'];
            const selfParts = self.split('/');
            arsonJuvenileFireSetterEntity.idHash = selfParts[selfParts.length - 1];
            this.lds.handleNewItemPersisted(ArsonJuvenileFiresetter.SESSION_NAME, idKey, fireSetter[idKey], selfParts[selfParts.length - 1], self);
            this._activeIncidentEntity.arson.arsonJuvenileFiresetter.push(arsonJuvenileFireSetterEntity);
            this.fss.markSessionPristine(ArsonJuvenileFiresetter.SESSION_NAME, arsonJuvenileFireSetterEntity.idHash);
          })));
      }
    });
    if (saveObservables.length > 0) {
      return forkJoin(saveObservables);
    } else {
      return null;
    }
  }

  /**
   * Saves all Wildland session data to the API
   */
  private saveWildland() {
    const saveObservables = [];
    const wildlandEntityUpdate = new Wildland();
    const wildlandIgnitionDetailsUpdate = this.fss.getSessionFormState(WildlandIgnitionDetails.SESSION_NAME, null, true, true);
    if (Object.getOwnPropertyNames(wildlandIgnitionDetailsUpdate).length > 0) {
      wildlandEntityUpdate.ignitionDetails = WildlandIgnitionDetails.fromSessionState(wildlandIgnitionDetailsUpdate);
    }
    const wildlandPropertyDetailsUpdate = this.fss.getSessionFormState(WildlandPropertyDetails.SESSION_NAME, null, true, true);
    if (Object.getOwnPropertyNames(wildlandPropertyDetailsUpdate).length > 0) {
      wildlandEntityUpdate.propertyDetails = WildlandPropertyDetails.fromSessionState(wildlandPropertyDetailsUpdate);
    }
    if (wildlandEntityUpdate.ignitionDetails != null || wildlandEntityUpdate.propertyDetails != null) {
      if (this._activeIncidentEntity.wildland != null) {
        saveObservables.push(this._activeIncidentEntity.wildland.update(wildlandEntityUpdate).pipe(
          tap(() => {
            this.fss.markSessionPristine(WildlandIgnitionDetails.SESSION_NAME, this._activeIncidentEntity.wildland.idHash);
            this.fss.markSessionPristine(WildlandPropertyDetails.SESSION_NAME, this._activeIncidentEntity.wildland.idHash);
          })
        ));
      } else {
        wildlandEntityUpdate.incident = this._activeIncidentEntity;
        saveObservables.push(this.ds.getResourceCollection(Wildland.REL_NAME).add(REST.transformEntityForSave(wildlandEntityUpdate)).pipe(
          tap(response => {
            wildlandEntityUpdate._links = response['_links'];
            wildlandEntityUpdate.http = this.http;
            const self = response['_links']['self']['href'];
            const selfParts = self.split('/');
            wildlandEntityUpdate.idHash = selfParts[selfParts.length - 1];
            this._activeIncidentEntity.wildland = wildlandEntityUpdate;
            this.fss.markSessionPristine(WildlandIgnitionDetails.SESSION_NAME, this._activeIncidentEntity.wildland.idHash);
            this.fss.markSessionPristine(WildlandPropertyDetails.SESSION_NAME, this._activeIncidentEntity.wildland.idHash);
          })));
      }
    }
    if (saveObservables.length > 0) {
      return forkJoin(saveObservables);
    } else {
      return null;
    };
  }
}
