import { FormStateService } from 'app/core/services/form-state.service';
import { LookupService } from 'app/core/services/lookup.service';
import { FormControl } from '@angular/forms';
import { Entity } from 'ng2-hallelujah';
import { REST } from '../../core/model/REST';
import { HazMat } from './haz-mat';
import { AosEntity } from 'app/core/model/aos-entity';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class HazMatDetectionDevice extends Entity implements AosEntity<HazMatDetectionDevice> 
{
    public static REL_NAME: string = 'hazMatDetectionDevice';
    public static API_PATH_NAME: string = 'hazMatDetectionDevice';

    idHash: string;

    @REST.ForeignEntityRef({isOwner: true})
    hazMat: HazMat;

    detectionDeviceCode: string;
    detectionDeviceReading: string;
    detectionUnit: string;
    narrativeText: string;

    public static fromSessionState(session: {
        Device?: string,
        Reading?: string,
        Unit?: string,
        AdditionalComments?: string
    },
    hazMat: HazMat,
    ols: LookupService)
    {
        const detectionDevice = new HazMatDetectionDevice();
        detectionDevice.hazMat = hazMat;
        detectionDevice.detectionDeviceCode = session.Device;
        detectionDevice.detectionDeviceReading = session.Reading;
        detectionDevice.detectionUnit = ols.getDescriptionForCode('Lookup.OS.IM.DetectionDeviceUnit', session.Unit);
        detectionDevice.narrativeText = session.AdditionalComments;
        return detectionDevice;
    }
    
    public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
        FormStateService.initializeFormControlValue(formControls.get('Device'), ols.getOptionForSessionAndCode('Lookup.OS.IM.DetectionDevice', this.detectionDeviceCode ));
        FormStateService.initializeFormControlValue(formControls.get('Reading'), this.detectionDeviceReading);
        FormStateService.initializeFormControlValue(formControls.get('Unit'), ols.getOptionForSessionAndDescription('Lookup.OS.IM.DetectionDeviceUnit', this.detectionUnit));
        FormStateService.initializeFormControlValue(formControls.get('AdditionalComments'), this.narrativeText);
    }

    public update(hazMatDetectionDevice: HazMatDetectionDevice): Observable<void> {
        hazMatDetectionDevice._links = {}
        Object.assign(hazMatDetectionDevice._links, this._links);
        //const updateObject = REST.transformEntityForSave(hazMatCostRecovery);
        return super.update(hazMatDetectionDevice).pipe(
          tap(() => {
            this.detectionDeviceCode = hazMatDetectionDevice.detectionDeviceCode;
            this.detectionDeviceReading = hazMatDetectionDevice.detectionDeviceReading;
            this.detectionUnit = hazMatDetectionDevice.detectionUnit;
            this.narrativeText = hazMatDetectionDevice.narrativeText;
          })
        );
      }
}