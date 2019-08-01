import { FormStateService } from 'app/core/services/form-state.service';
import { LookupService } from 'app/core/services/lookup.service';
import { FormControl } from '@angular/forms';
import { Entity } from 'ng2-hallelujah';
import { REST } from '../../core/model/REST';
import { HazMat } from './haz-mat';
import { AosEntity } from 'app/core/model/aos-entity';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class HazMatIdentification extends Entity implements AosEntity<HazMatIdentification> {

    public static REL_NAME: string = 'materialReleased';
    public static API_PATH_NAME: string = 'hazMatIdentification';

    idHash: string;

    @REST.ForeignEntityRef({isOwner: true})
    hazMat: HazMat;

    chemicalName: string;
    DOTClassificationCode: string;
    UNNumber: string
    CASRegistrationNumber: string;
    containerUseCode: string;
    containerTypeCode: string;
    containerMaterialCode: string;
    specialContainerFeaturesCode: string;
    estimatedContainerCapacity: number;
    containerUnitsCode: string;
    physicalStateStoredCode: string;
    physicalStateWhenReleasedCode: string;
    estimatedAmountReleased: number;
    releasedUnitsCode: string;
    releasedIntoCode: string;
    releasedExtentCode: string;
    
  public static fromSessionState(session: {
    Chemical?: string,
    DotClass?: string,
    UnNumber?: string,
    RegistrationNumber?: string,
    ContainerUse?: string,
    ContainerType?: string,
    ContainerMaterial?: string,
    SpecialFeatures?: string,
    ContainerCapacity?: number,
    ContainerUnits?: string,
    StoredState?: string,
    ReleasedState?: string,
    AmountReleased?: number,
    ReleasedUnits?: string,
    ReleasedInto?: string,
    ExtentRelease?: string
  },
   hazMat: HazMat,
   ols: LookupService){
    const mat: HazMatIdentification = new HazMatIdentification();
    mat.hazMat = hazMat;
    mat.chemicalName = ols.getDescriptionForCode('Lookup.NFIRS.IM.Chemicals', session.Chemical);
    mat.DOTClassificationCode = session.DotClass;
    mat.UNNumber = session.UnNumber;
    mat.CASRegistrationNumber = session.RegistrationNumber;
    mat.containerUseCode = session.ContainerUse;
    mat.containerTypeCode = session.ContainerType;
    mat.containerMaterialCode = session.ContainerMaterial;
    mat.specialContainerFeaturesCode = session.SpecialFeatures;
    mat.estimatedContainerCapacity = session.ContainerCapacity;
    mat.containerUnitsCode = session.ContainerUnits;
    mat.physicalStateStoredCode = session.StoredState;
    mat.physicalStateWhenReleasedCode = session.ReleasedState;
    mat.estimatedAmountReleased = session.AmountReleased;
    mat.releasedUnitsCode = session.ReleasedUnits;
    mat.releasedIntoCode = session.ReleasedInto;
    mat.releasedExtentCode = session.ExtentRelease;
    return mat;
  }

  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('Chemical'), ols.getOptionForSessionAndDescription('Lookup.NFIRS.IM.Chemicals', this.chemicalName));
    FormStateService.initializeFormControlValue(formControls.get('DotClass'), ols.getOptionForSessionAndCode('Lookup.OS.IM.DOTClassification', this.DOTClassificationCode));
    FormStateService.initializeFormControlValue(formControls.get('UnNumber'),this.UNNumber);
    FormStateService.initializeFormControlValue(formControls.get('RegistrationNumber'), this.CASRegistrationNumber);
    FormStateService.initializeFormControlValue(formControls.get('ContainerUse'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ContainerUse', this.containerUseCode));
    FormStateService.initializeFormControlValue(formControls.get('ContainerType'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ContainerType', this.containerTypeCode));
    FormStateService.initializeFormControlValue(formControls.get('ContainerCapacity'), this.estimatedContainerCapacity);
    FormStateService.initializeFormControlValue(formControls.get('ContainerUnits'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ContainerUnits', this.containerUnitsCode));
    FormStateService.initializeFormControlValue(formControls.get('ContainerMaterial'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ContainerMaterial', this.containerMaterialCode));
    FormStateService.initializeFormControlValue(formControls.get('SpecialFeatures'), ols.getOptionForSessionAndCode('Lookup.OS.IM.SpecialContainerFeatures', this.specialContainerFeaturesCode));
    FormStateService.initializeFormControlValue(formControls.get('StoredState'), ols.getOptionForSessionAndCode('Lookup.OS.IM.PhysicalStateWhenReleased', this.physicalStateStoredCode));
    FormStateService.initializeFormControlValue(formControls.get('ReleasedState'), ols.getOptionForSessionAndCode('Lookup.OS.IM.PhysicalStateWhenReleased', this.physicalStateWhenReleasedCode));
    FormStateService.initializeFormControlValue(formControls.get('ReleasedInto'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ReleasedInto', this.releasedIntoCode));
    FormStateService.initializeFormControlValue(formControls.get('ExtentRelease'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ReleasedExtent', this.releasedExtentCode));
    FormStateService.initializeFormControlValue(formControls.get('AmountReleased'), this.estimatedAmountReleased);
    FormStateService.initializeFormControlValue(formControls.get('ReleasedUnits'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ContainerUnits', this.releasedUnitsCode));
  }

  public update(hazMatIdentification: HazMatIdentification): Observable<void> {
    hazMatIdentification._links = {}
    Object.assign(hazMatIdentification._links, this._links);
    //const updateObject = REST.transformEntityForSave(hazMatCostRecovery);
    return super.update(hazMatIdentification).pipe(
      tap(() => {
        this.chemicalName = hazMatIdentification.chemicalName;
        this.DOTClassificationCode = hazMatIdentification.DOTClassificationCode;
        this.UNNumber = hazMatIdentification.UNNumber;
        this.CASRegistrationNumber = hazMatIdentification.CASRegistrationNumber;
        this.containerUseCode = hazMatIdentification.containerUseCode;
        this.containerTypeCode = hazMatIdentification.containerTypeCode;
        this.containerMaterialCode = hazMatIdentification.containerMaterialCode;
        this.specialContainerFeaturesCode = hazMatIdentification.specialContainerFeaturesCode;
        this.estimatedContainerCapacity = hazMatIdentification.estimatedContainerCapacity;
        this.containerUnitsCode = hazMatIdentification.containerUnitsCode;
        this.physicalStateStoredCode = hazMatIdentification.physicalStateStoredCode;
        this.physicalStateWhenReleasedCode = hazMatIdentification.physicalStateWhenReleasedCode;
        this.estimatedAmountReleased = hazMatIdentification.estimatedAmountReleased;
        this.releasedUnitsCode = hazMatIdentification.releasedUnitsCode;
        this.releasedIntoCode = hazMatIdentification.releasedIntoCode;
        this.releasedExtentCode = hazMatIdentification.releasedExtentCode;
      })
    );
  }
}