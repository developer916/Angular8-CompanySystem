import { Entity } from 'ng2-hallelujah';
import { FormStateService } from 'app/core/services/form-state.service';
import { LookupService } from 'app/core/services/lookup.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { REST } from '../../core/model/REST';
import { HazMatReleaseFactors } from './haz-mat-release-factors';
import { HazMatEquipmentDetails } from './haz-mat-equipment-details';
import { HazMatIdentification } from './haz-mat-identification';
import { HazMatSpecialUnitReport } from './haz-mat-special-unit-report';
import { HazMatDetectionDevice } from './haz-mat-detection-device';
import { HazMatCostRecovery } from './haz-mat-cost-recovery'
import { Incident } from '../../incident/model/incident'
import { AosEntity } from '../../core/model/aos-entity';

export class HazMat extends Entity implements AosEntity<HazMat> {

  public static readonly REL_NAME = 'hazMat';

  idHash: string;

  @REST.ForeignEntityRef({isOwner: true})
  incident: Incident;

  costRecoveryAssignedCode: string;
   
  hazMatIdentifiedBy1Code: string;
  hazMatIdentifiedBy2Code: string;
  hazMatIdentifiedBy3Code: string;

  referenceMaterial1Code: string;
  referenceMaterial2Code: string;
  referenceMaterial3Code: string;

  narrativeText: string;
  equipmentDetails: HazMatEquipmentDetails;
  releaseFactors: HazMatReleaseFactors;
  
  @REST.ForeignEntityRef({isOwner: false})
  materialReleased: HazMatIdentification[] = null;
  @REST.ForeignEntityRef({isOwner: false})
  hazMatCostRecovery: HazMatCostRecovery[] = null;
  @REST.ForeignEntityRef({isOwner: false})
  hazMatDetectionDevice: HazMatDetectionDevice[] = null;

  @REST.ForeignEntityRef({isOwner: true})
  specialUnitReport: HazMatSpecialUnitReport;

  // public get MaterialReleased() {
  //   return !this.materialReleased ? [] : this.materialReleased;
  // }
  // public set MaterialReleased(matsReleased: HazMatIdentification[]) {
  //   this.materialReleased = matsReleased;
  // }

  // public get HazMatCostRecovery() {
  //   return !this.hazMatCostRecovery ? [] : this.hazMatCostRecovery;
  // }

  // public set HazMatCostRecovery(hazMatCostRecovery: HazMatCostRecovery[]) {
  //    this.hazMatCostRecovery = hazMatCostRecovery;
  // }

  // public get HazMatDetectionDevice() {
  //   return !this.hazMatDetectionDevice ? [] : this.hazMatDetectionDevice;
  // }

  // public set HazMatDetectionDevice(hazMatDetectionDevice: HazMatDetectionDevice[]) {
  //    this.hazMatDetectionDevice = hazMatDetectionDevice;
  // }

  //deeper than assign
  public deepCopy(src: HazMat) {
    if (!src) { 
      this.costRecoveryAssignedCode = null;
      this.narrativeText = null;
      this.releaseFactors = null;
      this.equipmentDetails = null;
      this.materialReleased = null;
      this.hazMatCostRecovery = null;
      this.hazMatDetectionDevice = null;
      this.specialUnitReport = null;
    }
    else {
      Object.assign(this, src);
      Object.assign(this._links, src._links);

      if (!src.equipmentDetails) {
        this.equipmentDetails = null;
      }
      else  {
        if (!this.equipmentDetails || ! (this.equipmentDetails instanceof HazMatEquipmentDetails))
          this.equipmentDetails = new HazMatEquipmentDetails();
        Object.assign(this.equipmentDetails, src.equipmentDetails);
      }

      if (!src.releaseFactors) {
        this.releaseFactors = null;
      } 
      else {
        if (!this.releaseFactors || ! (this.releaseFactors instanceof HazMatReleaseFactors))
          this.releaseFactors = new HazMatReleaseFactors();
        Object.assign(this.releaseFactors, src.releaseFactors);
      }

      if (!src.specialUnitReport) {
        this.specialUnitReport = null;
      }
      else {
        if (!this.specialUnitReport || ! (this.specialUnitReport instanceof HazMatSpecialUnitReport))
          this.specialUnitReport = new HazMatSpecialUnitReport();
        Object.assign(this.specialUnitReport, src.specialUnitReport);
      }
      this.copyMaterialReleased(src.materialReleased);
      this.copyCostRecovery(src.hazMatCostRecovery);
      this.copyDetectionDevices(src.hazMatDetectionDevice);
    }
  }
/** Because the objects in from the svc calls aren't TS objects, copy them into type script constructed ones**/
  public copyMaterialReleased(materialReleased: HazMatIdentification[]) {
    if (!materialReleased) { 
      this.materialReleased = null;
    }
    else {
      this.materialReleased = [];
      materialReleased.forEach(srcMat =>  {
        const mtrl = new HazMatIdentification();
        Object.assign(mtrl, srcMat);
        if (srcMat['_links']) {
          Object.assign(mtrl._links, srcMat._links);
        }
        this.materialReleased.push(mtrl);
      });
    }
  }
/** Because the objects in from the svc calls aren't TS objects, copy them into type script constructed ones**/
  public copyCostRecovery(hazMatCostRecovery: HazMatCostRecovery[]) {
    if (!hazMatCostRecovery) { 
      this.hazMatCostRecovery = null;
    }
    else {
      this.hazMatCostRecovery = [];
      hazMatCostRecovery.forEach(srcItem =>  {
        const item = new HazMatCostRecovery();
        Object.assign(item, srcItem);
        if (srcItem['_links']) {
          Object.assign(item._links, srcItem._links);
        }
        this.hazMatCostRecovery.push(item);
      });
    }
  }
/** Because the objects in from the svc calls aren't TS objects, copy them into type script constructed ones**/
  public copyDetectionDevices(hazMatDetectionDevice: HazMatDetectionDevice[]) {
    if (!hazMatDetectionDevice) {
      this.hazMatDetectionDevice = null;
    } else {
      this.hazMatDetectionDevice = [];
      hazMatDetectionDevice.forEach(detDevice => {
         const device = new HazMatDetectionDevice();
         Object.assign(device, detDevice);
         if (detDevice['_links']) {
          Object.assign(device._links, detDevice._links);
         }
         this.hazMatDetectionDevice.push(device);
      });
    }
  }

  public static fromSessionState(releaseSession: {  CostRecoveryAssigned?: string,
                                                    BelowGrade?: boolean,
                                                    Structure?: boolean,
                                                    Story?: number,
                                                    Outside?: boolean,
                                                    PeopleEvacuated?: number,
                                                    BuildingsEvacuated?: number,
                                                    PopulationDensity?: string,
                                                    AreaAffectedMeasurement?: number,
                                                    AreaAffectedUnits?: string,
                                                    AreaEvacuatedMeasurement?: number,
                                                    AreaEvacuatedUnits?: string,
                                                    HazMatAction1?: string,
                                                    HazMatAction2?: string,
                                                    HazMatAction3?: string,
                                                    FireExplosion?: string,
                                                    CauseOfRelease?: string,
                                                    FactorsContributing1?: string,
                                                    FactorsContributing2?: string,
                                                    FactorsContributing3?: string,
                                                    MitigatingFactors1?: string,
                                                    MitigatingFactors2?: string,
                                                    MitigatingFactors3?: string,
                                                    HazmatDisposition?: string },
                              equipDetailsSession: {  EquipNone?: boolean,
                                                      EquipType?: string,
                                                      EquipBrand?: string,
                                                      EquipModel?: string,
                                                      EquipYear?: number,
                                                      EquipSerialNo?: string,
                                                      MobilePropNone?: boolean,
                                                      MobilePropType?: string,
                                                      MobilePropMake?: string,
                                                      MobilePropModel?: string,
                                                      MobilePropYear?: number,
                                                      MobilePropState?: string,
                                                      MobilePropLicense?: string,
                                                      MobilePropDOT?: string,
                                                      Personnel1?: string,
                                                      Personnel2?: string,
                                                      Personnel3?: string,
                                                      Reference1?: string,
                                                      Reference2?: string,
                                                      Reference3?: string
                                                    },
                              // identificationSession: {
                              //               Chemical?: string,
                              //               DotClass?: string,
                              //               UnNumber?: string,
                              //               RegistrationNumber?: string,
                              //               ContainerUse?: string,
                              //               ContainerType?: string,
                              //               ContainerMaterial?: string,
                              //               ContainerCapacity?: number,
                              //               ContainerUnits?: string,
                              //               StoredState?: string,
                              //               ReleasedState?: string,
                              //               AmountReleased?: number,
                              //               ReleasedUnits?: string,
                              //               ReleasedInto?: string,
                              //               ExtentRelease?: string
                              // }[],
                              // itemsAndEquipSession: {
                              //   Item?: string,
                              //   Quantity?: number,
                              //   AdditionalComments?: string
                              // }[],
                              // detectionDevicesSession: {
                              //   Device?: string,
                              //   Reading?: string,
                              //   Unit?: string,
                              //   AdditionalComments?: string
                              // }[],
                              narrativeSession: {
                                Narrative?: string
                              },
                              ols: LookupService) 
  {
     const hazmat = new HazMat();
     hazmat.costRecoveryAssignedCode = releaseSession.CostRecoveryAssigned;
     hazmat.hazMatIdentifiedBy1Code = equipDetailsSession.Personnel1;
     hazmat.hazMatIdentifiedBy2Code = equipDetailsSession.Personnel2;
     hazmat.hazMatIdentifiedBy3Code = equipDetailsSession.Personnel3;
 
     hazmat.referenceMaterial1Code = equipDetailsSession.Reference1;
     hazmat.referenceMaterial2Code = equipDetailsSession.Reference2;
     hazmat.referenceMaterial3Code = equipDetailsSession.Reference3;

     hazmat.narrativeText    = narrativeSession.Narrative;
     
     hazmat.releaseFactors   = HazMatReleaseFactors.fromSessionState(releaseSession);
     hazmat.equipmentDetails = HazMatEquipmentDetails.fromSessionState(equipDetailsSession);
    //  let currIdents = hazmat.materialReleased;
    //  hazmat.materialReleased = [];
    //  for (var i:number = 0; i < identificationSession.length; i++) {
    //     if (!identificationSession[i]) {}
    //     else if (Object.getOwnPropertyNames(identificationSession[i]).length > 0) { 
    //       const ident = HazMatIdentification.fromSessionState(identificationSession[i], hazmat, ols);
    //       hazmat.materialReleased.push(ident);
    //     }
    //  }
    //  let currIems = hazmat.hazMatCostRecovery;
    //  hazmat.hazMatCostRecovery = [];
    //  for (var i:number = 0; i < itemsAndEquipSession.length; i++) {
    //     if (!itemsAndEquipSession[i]) {}
    //     else if (Object.getOwnPropertyNames(itemsAndEquipSession[i]).length > 0) { 
    //       const item = HazMatCostRecovery.fromSessionState(itemsAndEquipSession[i], hazmat);
    //       hazmat.hazMatCostRecovery.push(item);
    //     }
    //  }
    //  let currDetections = hazmat.hazMatDetectionDevice;
    //  hazmat.hazMatDetectionDevice = [];
    //  for (var i:number = 0; i < detectionDevicesSession.length; i++) {
    //     if (!detectionDevicesSession[i]) {}
    //     else if (Object.getOwnPropertyNames(detectionDevicesSession[i]).length > 0) { 
    //       const device = HazMatDetectionDevice.fromSessionState(detectionDevicesSession[i], hazmat, ols);
    //       hazmat.hazMatDetectionDevice.push(device);
    //     }
    //  }
     return hazmat;
  }

  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {

     FormStateService.initializeFormControlValue(formControls.get('CostRecoveryAssigned'), ols.getOptionForSessionAndCode('Lookup.OS.IM.CostRecoveryAssigned', this.costRecoveryAssignedCode));
     
     FormStateService.initializeFormControlValue(formControls.get('Personnel1'), ols.getOptionForSessionAndCode('Lookup.OS.IM.HazMatIdentifiedBy', this.hazMatIdentifiedBy1Code));
     FormStateService.initializeFormControlValue(formControls.get('Personnel2'), ols.getOptionForSessionAndCode('Lookup.OS.IM.HazMatIdentifiedBy', this.hazMatIdentifiedBy2Code));
     FormStateService.initializeFormControlValue(formControls.get('Personnel3'), ols.getOptionForSessionAndCode('Lookup.OS.IM.HazMatIdentifiedBy', this.hazMatIdentifiedBy3Code));
     
     FormStateService.initializeFormControlValue(formControls.get('Reference1'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ReferenceMaterial', this.referenceMaterial1Code));
     FormStateService.initializeFormControlValue(formControls.get('Reference2'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ReferenceMaterial', this.referenceMaterial2Code));
     FormStateService.initializeFormControlValue(formControls.get('Reference3'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ReferenceMaterial', this.referenceMaterial3Code));
    
     FormStateService.initializeFormControlValue(formControls.get('Narrative'), this.narrativeText);
     if (this.releaseFactors) { 
       this.releaseFactors.populateSession(formControls, ols);
     } 
     if (this.equipmentDetails) {
       this.equipmentDetails.populateSession(formControls, ols);
     }
  }

  /**
   *
   * @param hazmatUpdate
   */
  public update(hazmatUpdate: HazMat): Observable<void> {
    hazmatUpdate._links = {}
    Object.assign(hazmatUpdate._links, this._links);
    const updateObject = REST.transformEntityForSave(hazmatUpdate);
    return super.update(updateObject).pipe(
      tap(() => {
        this.costRecoveryAssignedCode = hazmatUpdate.costRecoveryAssignedCode;

        this.hazMatIdentifiedBy1Code = hazmatUpdate.hazMatIdentifiedBy1Code;
        this.hazMatIdentifiedBy2Code = hazmatUpdate.hazMatIdentifiedBy2Code;
        this.hazMatIdentifiedBy3Code = hazmatUpdate.hazMatIdentifiedBy3Code;
        this.referenceMaterial1Code = hazmatUpdate.referenceMaterial1Code;
        this.referenceMaterial2Code = hazmatUpdate.referenceMaterial2Code;
        this.referenceMaterial3Code = hazmatUpdate.referenceMaterial3Code;

        this.narrativeText = hazmatUpdate.narrativeText;
        
        if (!updateObject['equipmentDetails'])
          updateObject['equipmentDetails'] = null;
        else
          Object.assign(this.equipmentDetails, updateObject['equipmentDetails']);
        
        if (!updateObject['releaseFactors'])
          updateObject['releaseFactors'] = null;
        else
          Object.assign(this.releaseFactors, updateObject['releaseFactors']);
          
        // if (!updateObject['materialReleased'])
        //   updateObject['materialRelease'] = null;
        // else
        //   this.materialReleased = [...updateObject['materialReleased']];
        
        // if (!updateObject['hazMatCostRecovery'])
        //   this.hazMatCostRecovery = null;
        // else
        //   this.hazMatCostRecovery = [...updateObject['hazMatCostRecovery']];
        
        // if (! updateObject['hazMatDetectionDevice'])
        //   this.hazMatDetectionDevice = null;
        // else
        //   this.hazMatDetectionDevice = [...updateObject['hazMatDetectionDevice']];
        
        if (!updateObject['specialUnitReport'])
          this.specialUnitReport = null;
        else
          Object.assign(this.specialUnitReport, updateObject['specialUnitReport']);
      })
    );
  }

}
