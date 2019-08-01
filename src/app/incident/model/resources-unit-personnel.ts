import { Entity } from 'ng2-hallelujah';
import { FormControl } from '@angular/forms';
import { LookupService } from '../../core/services/lookup.service';
import { FormStateService } from '../../core/services/form-state.service';
import { Resources } from './resources';
import { AosEntity } from 'app/core/model/aos-entity';
import { Observable } from 'rxjs';
import { REST } from 'app/core/model/REST';
import { tap } from 'rxjs/operators';

export class ResourcesUnitPersonnel extends Entity implements AosEntity<ResourcesUnitPersonnel> {

  public static readonly SESSION_NAME = 'Session.OS.IM.ResourcesUnitPersonnel';
  public static readonly REL_NAME = 'personnel';

  @REST.ForeignEntityRef({isOwner: true})
  unit: Resources;

  idHash: string;
  unitId: string;
  displayOrder: number;
  personnelId: string;
  firstName: string;
  middleInitial: string;
  lastName: string;
  nameSuffix: string;
  rank: string;
  actionTaken1Code: string;
  actionTaken2Code: string;
  actionTaken3Code: string;
  actionTaken4Code: string;
  hazMatExposure: boolean;
  communicableDisease: boolean;
  medicalFollowup: boolean;
  unitPosition: string;


  /**
   * Create a ResourcesUnitPersonnel Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    DisplayOrder: string,
    Unit?: string,
    PersonnelName?: string,
    PersonnelId?: string,
    FirstName?: string,
    LastName?: string,
    MiddleInitial?: string,
    NameSuffix?: string,
    Rank?: string,
    ActionTaken1?: string,
    ActionTaken2?: string,
    ActionTaken3?: string,
    ActionTaken4?: string,
    HazMatExposure?: boolean,
    CommunicableDisease?: boolean
  }) {
    const resourcesUnitPersonnel: ResourcesUnitPersonnel = new ResourcesUnitPersonnel();
    resourcesUnitPersonnel.displayOrder = parseInt(session.DisplayOrder, 10);
    resourcesUnitPersonnel.unitId = session.Unit;
    resourcesUnitPersonnel.personnelId = session.PersonnelId;
    resourcesUnitPersonnel.firstName = session.FirstName;
    resourcesUnitPersonnel.lastName = session.LastName;
    resourcesUnitPersonnel.middleInitial = session.MiddleInitial;
    resourcesUnitPersonnel.nameSuffix = session.NameSuffix;
    resourcesUnitPersonnel.rank = session.Rank;
    resourcesUnitPersonnel.actionTaken1Code = session.ActionTaken1;
    resourcesUnitPersonnel.actionTaken2Code = session.ActionTaken2;
    resourcesUnitPersonnel.actionTaken3Code = session.ActionTaken3;
    resourcesUnitPersonnel.actionTaken4Code = session.ActionTaken4;
    resourcesUnitPersonnel.hazMatExposure = session.HazMatExposure;
    resourcesUnitPersonnel.communicableDisease = session.CommunicableDisease;
    return resourcesUnitPersonnel;
  }

  /**
   * Populates the Incident Resources Personnel data
   *
   * @param formControls
   * @param ols
   */
  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('Unit'), this.unitId);
    FormStateService.initializeFormControlValue(formControls.get('PersonnelId'), ols.getOptionForSessionAndCode('Lookup.OS.AM.AgencyPersonnel', this.personnelId));
    // formControls.get('FirstName').setValue(this.firstName);
    // formControls.get('LastName').setValue(this.lastName);
    // formControls.get('MiddleInitial').setValue(this.middleInitial);
    // formControls.get('NameSuffix').setValue(this.nameSuffix);
    // formControls.get('Rank').setValue(this.rank);
    FormStateService.initializeFormControlValue(formControls.get('ActionTaken1'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ActionsTaken', this.actionTaken1Code));
    FormStateService.initializeFormControlValue(formControls.get('ActionTaken2'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ActionsTaken', this.actionTaken2Code));
    FormStateService.initializeFormControlValue(formControls.get('ActionTaken3'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ActionsTaken', this.actionTaken3Code));
    FormStateService.initializeFormControlValue(formControls.get('ActionTaken4'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ActionsTaken', this.actionTaken4Code));
    FormStateService.initializeFormControlValue(formControls.get('HazMatExposure'), this.hazMatExposure);
    FormStateService.initializeFormControlValue(formControls.get('CommunicableDisease'), this.communicableDisease);
  }

  /**
   *
   * @param personnelUpdate
   */
  public update(personnelUpdate: ResourcesUnitPersonnel): Observable<void> {
    const updateObject = REST.transformEntityForSave(personnelUpdate);
    return super.update(updateObject).pipe(
      tap(() => {
        Object.assign(this, updateObject);
      })
    );
  }
}
