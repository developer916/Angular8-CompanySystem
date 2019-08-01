import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RuleEngineService } from 'app/core/services/rule-engine.service';
import { AgencyOnScene } from 'app/incident/model/agency-on-scene';
import { HazMatCostRecovery } from 'app/incident/model/haz-mat-cost-recovery';
import { HazMatDetectionDevice } from 'app/incident/model/haz-mat-detection-device';
import { HazMatIdentification } from 'app/incident/model/haz-mat-identification';
import { NGXLogger } from 'ngx-logger';
import { forkJoin, Observable, of, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { REST } from '../../core/model/REST';
import { DataService } from '../../core/services/data-service.service';
import { FormStateService } from '../../core/services/form-state.service';
import { ListDetailService } from '../../core/services/list-detail.service';
import { LookupService } from '../../core/services/lookup.service';
import { HazMat } from '../../incident/model/haz-mat';
import { Incident } from '../../incident/model/incident';
import { PersonInvolved } from '../../incident/model/person-involved';
import { AgencyComponent } from '../components/agency/agency.component';
import { DetectionAndDevicesComponent } from '../components/detection-and-devices/detection-and-devices.component';
import { IdentificationComponent } from '../components/identification/identification.component';
import { InvolvedComponent } from '../components/involved/involved.component';
import { ItemsAndEquipmentComponent } from '../components/items-and-equipment/items-and-equipment.component';
import { NarrativeComponent } from '../components/narrative/narrative.component';
import { PersonsInvolvedComponent } from '../components/persons-involved/persons-involved.component';
import { ReleaseComponent } from '../components/release/release.component';

/**
 * Class that is responsible for loading and saving incident data from the backend API
 *
 * TODO: Remove Object.assign calls and add proper constructors to data model in order to insure type safety
 *
 */
@Injectable()
export class HazMatDataBrokerService {

  /**
   * Entity model of the incident we are actively editing in the UI. Note that this will ALWAYS represent the state
   * of the HazMat entity as reported by the backend API
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
    private http: HttpClient,
    private logger: NGXLogger) {
  }

  /**
   * Load hazmat
   *
   * @param 
   */
  public loadHazMat(incidentId: string) {
    this.resetForm();
    const incObs: Observable<Incident> = this.ds.getIncidentResource(incidentId);
    const myIncSub: Subscription =
      incObs.subscribe(incident => {
        this._activeIncidentEntity = incident;
        const hazmatObs = incident.relatedEntity(HazMat.REL_NAME).get(HazMat);
        const myHazMatSub =
          hazmatObs.subscribe(
            hazmat => {
              console.log('hazmat loaded...');
              this._activeIncidentEntity.hazMat = new HazMat();
              this._activeIncidentEntity.hazMat.deepCopy(hazmat);
              const agencyOnSceneObs = incident.relatedCollection(AgencyOnScene.REL_NAME).get(AgencyOnScene);
              const agenciesDoneSub = agencyOnSceneObs.subscribe(agencyOnScene => {
                this._activeIncidentEntity.copyAgenciesOnScene(agencyOnScene);
                console.log('agencies on scene avail...');
                this.populateAgenciesOnScene();
                agenciesDoneSub.unsubscribe();
              });

              const personsInvolvedObs = incident.relatedCollection(PersonInvolved.REL_NAME).get(PersonInvolved);
              const personsDoneSub = personsInvolvedObs.subscribe(personsInvolved => {
                this._activeIncidentEntity.copyPersonnelInvolved(personsInvolved);
                console.log('persons involved avail...');
                this.populatePersonsInvolved();
                personsDoneSub.unsubscribe();
              }
              );

              const costRecovObs = hazmat.relatedCollection(HazMatCostRecovery.REL_NAME).get(HazMatCostRecovery);
              const costRecDoneSub = costRecovObs.subscribe(hazMatCostItems => this._activeIncidentEntity.hazMat.hazMatCostRecovery = hazMatCostItems);

              const mtrlRelIdentsObs = hazmat.relatedCollection(HazMatIdentification.REL_NAME).get(HazMatIdentification);
              const mtrlsDoneSub = mtrlRelIdentsObs.subscribe(mtrlRelIdents => this._activeIncidentEntity.hazMat.materialReleased = mtrlRelIdents);

              const detectionDevicesObs = hazmat.relatedCollection(HazMatDetectionDevice.REL_NAME).get(HazMatDetectionDevice);
              const detectionsDoneSub = detectionDevicesObs.subscribe(detectDevices => this._activeIncidentEntity.hazMat.hazMatDetectionDevice = detectDevices);

              const allDoneSub =
                forkJoin(hazmatObs, mtrlRelIdentsObs, detectionDevicesObs, personsInvolvedObs)
                  .subscribe(() => {
                    console.log('all done loading data...');
                    this.populateReportSession();
                    myIncSub.unsubscribe();
                    detectionsDoneSub.unsubscribe();
                    mtrlsDoneSub.unsubscribe();
                    costRecDoneSub.unsubscribe();
                  });
              console.log('hazmat sub unsubscribing...');
              myHazMatSub.unsubscribe();
            }
          );
        return this._activeIncidentEntity;
      });
    return incObs;
  }

  /**
   */
  private resetForm() {
    this.res.resetRuleEngine();
    this.fss.resetAll();
    this.lds.resetAll();
  }

  public populateSession() {
    this.populateReportSession();
    this.populateAgenciesOnScene();
    this.populatePersonsInvolved();
  }

  private populatePersonsInvolved() {
    const listItemIdKey = 'PersonsInvolved_ID';
    this.fss.setIdKeyForSession(PersonsInvolvedComponent.SESSION_NAME, listItemIdKey);
    if (this._activeIncidentEntity.personsInvolved) {
      this._activeIncidentEntity.personsInvolved.forEach(personInvolved => {
        const hiddenControls = [];
        hiddenControls.push({ id: listItemIdKey, control: new FormControl(personInvolved.idHash) });
        hiddenControls.push({ id: '_self', control: new FormControl(personInvolved._links.self.href) });
        const personInvolvedControls = this.lds.addListDetailItem(PersonsInvolvedComponent.SESSION_NAME, listItemIdKey, hiddenControls).formControls;
        personInvolved.populateSession(personInvolvedControls, this.ols);
      });
    }
  }

  private populateAgenciesOnScene() {
    const agencySessionControls = this.fss.getAllFormControlsForSession(AgencyComponent.SESSION_NAME);
    AgencyOnScene.populateSession(agencySessionControls, this._activeIncidentEntity.agencyOnScene, this.ols);
  }
  /**
   * It's ok if this isn't a "real" HazMat and came off server.
   * We'll deep copy.
   * @param hazmat
   */
  private populateReportSession() {
    // console.log(hazmat);
    // let hazmatReport = new HazMat();
    // if ( !hazmat ) { }
    // else { hazmatReport.deepCopy(hazmat); }

    // this._activeIncidentEntity.hazMat = hazmatReport;

    const releaseSessionControls = this.fss.getAllFormControlsForSession(ReleaseComponent.SESSION_NAME);
    const involvedSessionControls = this.fss.getAllFormControlsForSession(InvolvedComponent.SESSION_NAME);
    const narrativeSessionControls = this.fss.getAllFormControlsForSession(NarrativeComponent.SESSION_NAME);

    const mergedControls = new Map([...Array.from(releaseSessionControls),
    ...Array.from(involvedSessionControls),
    ...Array.from(narrativeSessionControls)
    ]);

    this._activeIncidentEntity.hazMat.populateSession(mergedControls, this.ols);
    let listItemIdKey = 'Identification_ID';
    this.fss.setIdKeyForSession(IdentificationComponent.SESSION_NAME, listItemIdKey);
    this._activeIncidentEntity.hazMat.materialReleased.forEach(identification => {
      const hiddenControls = [];
      hiddenControls.push({ id: listItemIdKey, control: new FormControl(identification.idHash) });
      hiddenControls.push({ id: '_self', control: new FormControl(identification._links.self.href) });
      const identificationControls = this.lds.addListDetailItem(IdentificationComponent.SESSION_NAME, listItemIdKey, hiddenControls).formControls;
      identification.populateSession(identificationControls, this.ols);
    });

    listItemIdKey = 'ItemsEquipment_ID';
    this.fss.setIdKeyForSession(ItemsAndEquipmentComponent.SESSION_NAME, listItemIdKey);
    this._activeIncidentEntity.hazMat.hazMatCostRecovery.forEach(costItem => {
      const hiddenControls = [];
      hiddenControls.push({ id: listItemIdKey, control: new FormControl(costItem.idHash) });
      hiddenControls.push({ id: '_self', control: new FormControl(costItem._links.self.href) });
      costItem.hazMat = this._activeIncidentEntity.hazMat;
      const itemsAndEquipControls = this.lds.addListDetailItem(ItemsAndEquipmentComponent.SESSION_NAME, listItemIdKey, hiddenControls).formControls;
      costItem.populateSession(itemsAndEquipControls, this.ols);
    });

    listItemIdKey = 'DetectionDevices_ID';
    this.fss.setIdKeyForSession(DetectionAndDevicesComponent.SESSION_NAME, listItemIdKey);
    this._activeIncidentEntity.hazMat.hazMatDetectionDevice.forEach(detectionDevice => {
      const hiddenControls = [];
      hiddenControls.push({ id: listItemIdKey, control: new FormControl(detectionDevice.idHash) });
      hiddenControls.push({ id: '_self', control: new FormControl(detectionDevice._links.self.href) });
      const detectionDeviceControls = this.lds.addListDetailItem(DetectionAndDevicesComponent.SESSION_NAME, listItemIdKey, hiddenControls).formControls;
      detectionDevice.populateSession(detectionDeviceControls, this.ols);
    });
    return of(this._activeIncidentEntity.hazMat);
  }

  /**
   * Save the hazmat given it's current state as represented by the values in the form
   */
  public saveHazmat(hazmatUpdate?: HazMat) {
    const saveObservables = [];
    const updatedHazMat = this.saveHazMatReport(hazmatUpdate);
    if (updatedHazMat) {
      saveObservables.push(updatedHazMat);
      console.log('Saved data:' + JSON.stringify(updatedHazMat));
    }
    const updatedPersonsInvolved = this.saveBasicPersonsInvolved();
    if (updatedPersonsInvolved) {
      saveObservables.push(updatedPersonsInvolved);
      console.log('Saved data:' + JSON.stringify(updatedPersonsInvolved));
    }
    const updatedAgencyOnScene = this.saveAgencyOnScene();
    if (updatedAgencyOnScene) {
      saveObservables.push(updatedAgencyOnScene);
      console.log('Saved data:' + JSON.stringify(updatedAgencyOnScene));
    }
    return forkJoin(saveObservables);
  }

  /**
   * Saves all Basic session data to the API
   */
  private saveHazMatReport(hazmat?: HazMat) {
    const saveObservables = [];
    if (hazmat == null) {
      hazmat = new HazMat();
    }

    {
      const idKey = this.fss.getIdKeyForSession(IdentificationComponent.SESSION_NAME);
      const identControls: any[] = this.lds.getListDetailItems(IdentificationComponent.SESSION_NAME);
      if (identControls !== undefined && identControls != null) {
        for (let i = 0; i < identControls.length; i++) {
          const idHash = identControls[i][idKey];
          const identSession = this.fss.getSessionFormState(IdentificationComponent.SESSION_NAME, idHash, true, false);
          if (identSession['_self'] != null) {
            const index = this._activeIncidentEntity.hazMat.materialReleased.findIndex(item => item.idHash === identSession[idKey]);
            const existingEntity = this._activeIncidentEntity.hazMat.materialReleased[index];
            if (identSession['ACTION'] === 'DELETE') {
              saveObservables.push(this.ds.getResourceCollection(HazMatIdentification.REL_NAME).remove(existingEntity).pipe(tap(() => {
                this.lds.purgeListDetailItem(IdentificationComponent.SESSION_NAME, idKey, identSession[idKey]);
                this._activeIncidentEntity.hazMat.materialReleased.splice(index, 1);
              })));
            } else {
              if (Object.getOwnPropertyNames(identSession).length > 2) { // We should always have a _self and ID so we check for > 2 changes
                const ident: HazMatIdentification = HazMatIdentification.fromSessionState(identSession, hazmat, this.ols);
                ident.hazMat = this._activeIncidentEntity.hazMat;
                saveObservables.push(existingEntity.update(ident));
              }
            }
          } else if (identSession['ACTION'] === 'CREATE') {
            const newEntity = HazMatIdentification.fromSessionState(identSession, hazmat, this.ols);
            newEntity.hazMat = this._activeIncidentEntity.hazMat;
            saveObservables.push(this.ds.getResourceCollection(HazMatIdentification.API_PATH_NAME).add(newEntity).pipe(
              tap(response => {
                newEntity._links = response['_links'];
                newEntity.http = this.http;
                const self = response['_links']['self']['href'];
                const selfParts = self.split('/');
                newEntity.idHash = selfParts[selfParts.length - 1];
                this.lds.handleNewItemPersisted(IdentificationComponent.SESSION_NAME, idKey, identSession[idKey], selfParts[selfParts.length - 1], self);
                let idx: number = this._activeIncidentEntity.hazMat.materialReleased.push(newEntity);
              })
            ));
          }
        }
      }
    }
    { // because of backgrounding on the delete, scope unique consts for the id keys
      const idKey = this.fss.getIdKeyForSession(ItemsAndEquipmentComponent.SESSION_NAME);
      const itemsAndEquipControls: any[] = this.lds.getListDetailItems(ItemsAndEquipmentComponent.SESSION_NAME);
      if (itemsAndEquipControls !== undefined && itemsAndEquipControls != null) {
        for (let i = 0; i < itemsAndEquipControls.length; i++) {
          const idHash = itemsAndEquipControls[i][idKey];
          const itemAndEquipSession = this.fss.getSessionFormState(ItemsAndEquipmentComponent.SESSION_NAME, idHash, true, false);
          if (itemAndEquipSession['_self'] != null) {
            const index = this._activeIncidentEntity.hazMat.hazMatCostRecovery.findIndex(item => item.idHash === itemAndEquipSession[idKey]);
            const existingEntity = this._activeIncidentEntity.hazMat.hazMatCostRecovery[index];
            if (itemAndEquipSession['ACTION'] === 'DELETE') {
              saveObservables.push(this.ds.getResourceCollection(HazMatCostRecovery.REL_NAME).remove(existingEntity).pipe(tap(() => {
                this.lds.purgeListDetailItem(ItemsAndEquipmentComponent.SESSION_NAME, idKey, itemAndEquipSession[idKey]);
                this._activeIncidentEntity.hazMat.hazMatCostRecovery.splice(index, 1);
              })));
            } else {
              if (Object.getOwnPropertyNames(itemAndEquipSession).length > 2) { // We should always have a _self and ID so we check for > 2 changes
                const costItem: HazMatCostRecovery = HazMatCostRecovery.fromSessionState(itemAndEquipSession, hazmat);
                costItem.hazMat = this._activeIncidentEntity.hazMat;
                saveObservables.push(existingEntity.update(costItem));
              }
            }
          } else if (itemAndEquipSession['ACTION'] === 'CREATE') {
            const newEntity = HazMatCostRecovery.fromSessionState(itemAndEquipSession, hazmat);
            newEntity.hazMat = this._activeIncidentEntity.hazMat;
            saveObservables.push(this.ds.getResourceCollection(HazMatCostRecovery.API_PATH_NAME).add(newEntity).pipe(
              tap(response => {
                newEntity._links = response['_links'];
                newEntity.http = this.http;
                const self = response['_links']['self']['href'];
                const selfParts = self.split('/');
                newEntity.idHash = selfParts[selfParts.length - 1];
                this.lds.handleNewItemPersisted(ItemsAndEquipmentComponent.SESSION_NAME, idKey, itemAndEquipSession[idKey], selfParts[selfParts.length - 1], self);
                let idx: number = this._activeIncidentEntity.hazMat.hazMatCostRecovery.push(newEntity);
              })
            ));
          }
        }
      }
    }
    {// because of backgrounding on the delete, scope unique consts for the id keys
      const idKey = this.fss.getIdKeyForSession(DetectionAndDevicesComponent.SESSION_NAME);
      const detectionDevicesControls: any[] = this.lds.getListDetailItems(DetectionAndDevicesComponent.SESSION_NAME);
      if (detectionDevicesControls !== undefined && detectionDevicesControls != null) {
        for (let i = 0; i < detectionDevicesControls.length; i++) {
          const idHash = detectionDevicesControls[i][idKey];
          const detectionDeviceSession = this.fss.getSessionFormState(DetectionAndDevicesComponent.SESSION_NAME, idHash, true, false);
          if (detectionDeviceSession['_self'] != null) {
            const index = this._activeIncidentEntity.hazMat.hazMatDetectionDevice.findIndex(item => item.idHash === detectionDeviceSession[idKey]);
            const existingEntity = this._activeIncidentEntity.hazMat.hazMatDetectionDevice[index];
            if (detectionDeviceSession['ACTION'] === 'DELETE') {
              saveObservables.push(this.ds.getResourceCollection(HazMatDetectionDevice.REL_NAME).remove(existingEntity).pipe(tap(() => {
                this.lds.purgeListDetailItem(DetectionAndDevicesComponent.SESSION_NAME, idKey, detectionDeviceSession[idKey]);
                this._activeIncidentEntity.hazMat.hazMatDetectionDevice.splice(index, 1);
              })));
            } else {
              if (Object.getOwnPropertyNames(detectionDeviceSession).length > 2) { // We should always have a _self and ID so we check for > 2 changes
                const detectDevice: HazMatDetectionDevice = HazMatDetectionDevice.fromSessionState(detectionDeviceSession, hazmat, this.ols);
                detectDevice.hazMat = this._activeIncidentEntity.hazMat;
                saveObservables.push(existingEntity.update(detectDevice));
              }
            }
          } else if (detectionDeviceSession['ACTION'] === 'CREATE') {
            const newEntity = HazMatDetectionDevice.fromSessionState(detectionDeviceSession, hazmat, this.ols);
            newEntity.hazMat = this._activeIncidentEntity.hazMat;
            saveObservables.push(this.ds.getResourceCollection(HazMatDetectionDevice.API_PATH_NAME).add(newEntity).pipe(
              tap(response => {
                newEntity._links = response['_links'];
                newEntity.http = this.http;
                const self = response['_links']['self']['href'];
                const selfParts = self.split('/');
                newEntity.idHash = selfParts[selfParts.length - 1];
                this.lds.handleNewItemPersisted(DetectionAndDevicesComponent.SESSION_NAME, idKey, detectionDeviceSession[idKey], selfParts[selfParts.length - 1], self);
                let idx: number = this._activeIncidentEntity.hazMat.hazMatDetectionDevice.push(newEntity);
              })
            ));
          }
        }
      }
    }
    hazmat =
      HazMat.fromSessionState(
        this.fss.getSessionFormState(ReleaseComponent.SESSION_NAME, null, true, false),
        this.fss.getSessionFormState(InvolvedComponent.SESSION_NAME, null, true, false),
        //  identSessionData,
        //  itemsAndEquipSessionData,
        //  detectionDevicesSessionData,
        this.fss.getSessionFormState(NarrativeComponent.SESSION_NAME, null, true, true),
        this.ols);

    hazmat.hazMatCostRecovery = this._activeIncidentEntity.hazMat.hazMatCostRecovery;
    hazmat.hazMatDetectionDevice = this._activeIncidentEntity.hazMat.hazMatDetectionDevice;
    hazmat.materialReleased = this._activeIncidentEntity.hazMat.materialReleased;

    saveObservables.push(this._activeIncidentEntity.hazMat.update(hazmat));
    return forkJoin(saveObservables);
  }

  /**
   * Saves all AgencyOnScene session data to the API
   */
  private saveAgencyOnScene() {
    const saveObservables = [];
    // @TODO improve to not patch all every time.. e.g. dirty == true without bad indices
    const agencySession = this.fss.getSessionFormState(AgencyComponent.SESSION_NAME, null, true, false);
    const agenciesOnSceneNow: AgencyOnScene[] = AgencyOnScene.fromSessionState(agencySession);
    let idx = 0; // arbitrary reuse of records is fine for how these are
    agenciesOnSceneNow.forEach(agency => {
      if (idx < this._activeIncidentEntity.agencyOnScene.length) {
        agency.idHash = this._activeIncidentEntity.agencyOnScene[idx].idHash;
        agency.incident = this._activeIncidentEntity;
        // this is a patch update
        this._activeIncidentEntity.agencyOnScene[idx].update(agency)
        saveObservables.push(this._activeIncidentEntity.agencyOnScene[idx]);
      } else {
        // it's a create
        agency.incident = this._activeIncidentEntity;
        let agencySaveRespSub =
          this.ds.getResourceCollection(AgencyOnScene.API_PATH_NAME).add(REST.transformEntityForSave(agency)).subscribe(
            response => {
              agency._links = response['_links'];
              agency.http = this.http;
              const self = response['_links']['self']['href'];
              const selfParts = self.split('/');
              agency.idHash = selfParts[selfParts.length - 1];
              saveObservables.push(this._activeIncidentEntity.agencyOnScene.push(agency));
            },
            error => {
              this.logger.error('Error getting response saving agency ' + error);
            },
            () => {
              agencySaveRespSub.unsubscribe();
            });
      }
      idx++;
    });
    if (agenciesOnSceneNow.length < this._activeIncidentEntity.agencyOnScene.length) {
      const obsAgencyColl = this.ds.getResourceCollection(AgencyOnScene.REL_NAME);
      while (agenciesOnSceneNow.length < this._activeIncidentEntity.agencyOnScene.length) {
        // delete the tail when they clear things
        const agencyToDel = this._activeIncidentEntity.agencyOnScene.pop();
        saveObservables.push(obsAgencyColl.remove(agencyToDel));
        idx++;
      }
    }
    return forkJoin(saveObservables);
  }
  /**
   * Saves all PersonsInvolved session data to the API
   */
  private saveBasicPersonsInvolved() {
    const saveObservables = [];
    const idKey = this.fss.getIdKeyForSession(PersonsInvolvedComponent.SESSION_NAME);
    const basicPersonsInvolved = this.fss.getSessionFormState(PersonsInvolvedComponent.SESSION_NAME, null, true, true);
    basicPersonsInvolved[PersonsInvolvedComponent.SESSION_NAME].forEach(personInvolved => {
      // If we have a '_self' key we know this was a pre-existing entry. Just need to figure out if we should update or delete
      if (personInvolved['_self'] != null) {
        const index = this._activeIncidentEntity.personsInvolved.findIndex(person => person.idHash === personInvolved[idKey]);
        const personInvolvedEntity = this._activeIncidentEntity.personsInvolved[index];
        if (personInvolved['ACTION'] === 'DELETE') {
          saveObservables.push(this.ds.getResourceCollection(PersonInvolved.REL_NAME).remove(personInvolvedEntity).pipe(tap(() => {
            this.lds.purgeListDetailItem(PersonsInvolvedComponent.SESSION_NAME, idKey, personInvolved[idKey]);
            this._activeIncidentEntity.personsInvolved.splice(index, 1);
          })));
        } else {
          if (Object.getOwnPropertyNames(personInvolved).length > 2) { // We should always have a _self and ID so we check for > 2 changes
            saveObservables.push(personInvolvedEntity.update(PersonInvolved.fromSessionState(personInvolved)));
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
            this.lds.handleNewItemPersisted(PersonsInvolvedComponent.SESSION_NAME, idKey, personInvolved[idKey], selfParts[selfParts.length - 1], self);
            this._activeIncidentEntity.personsInvolved.push(personInvolvedEntity)
          })));
      }
    });
    return forkJoin(saveObservables);
  }
}
