import { FormStateService } from 'app/core/services/form-state.service';
import { LookupService } from 'app/core/services/lookup.service';
import { FormControl } from '@angular/forms';
import { Entity } from 'ng2-hallelujah';
import { REST } from '../../core/model/REST';
import { HazMat } from './haz-mat';
import { AosEntity } from 'app/core/model/aos-entity';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class HazMatCostRecovery extends Entity implements AosEntity<HazMatCostRecovery>
{
    public static REL_NAME: string = 'hazMatCostRecovery';
    public static API_PATH_NAME: string = 'hazMatCostRecovery';

    idHash: string;
    
    @REST.ForeignEntityRef({isOwner: true})
    hazMat: HazMat;

    recoveryItemsUsedCode: string;
    //recoveryItemsCategoryCode: string;
    quantityUsed: number;
    narrativeText: string;
    
    public static fromSessionState(session: {
        Item?: string,
        Quantity?: number,
        AdditionalComments?: string
    },
    hazMat: HazMat)
    {
        const costRecovery = new HazMatCostRecovery();
        costRecovery.hazMat = hazMat;
        costRecovery.recoveryItemsUsedCode = session.Item;
        costRecovery.quantityUsed = session.Quantity;
        costRecovery.narrativeText = session.AdditionalComments;
        return costRecovery;
    }

    public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
        FormStateService.initializeFormControlValue(formControls.get('Item'), ols.getOptionForSessionAndCode('Lookup.OS.IM.RecoveryItemsUsed', this.recoveryItemsUsedCode));
        FormStateService.initializeFormControlValue(formControls.get('Quantity'), this.quantityUsed);
        FormStateService.initializeFormControlValue(formControls.get('AdditionalComments'), this.narrativeText);
    }

    public update(hazMatCostRecovery: HazMatCostRecovery): Observable<void> {
        hazMatCostRecovery._links = {}
        Object.assign(hazMatCostRecovery._links, this._links);
        //const updateObject = REST.transformEntityForSave(hazMatCostRecovery);
        return super.update(hazMatCostRecovery).pipe(
          tap(() => {
            this.recoveryItemsUsedCode = hazMatCostRecovery.recoveryItemsUsedCode;
            this.quantityUsed = hazMatCostRecovery.quantityUsed;
            this.narrativeText = hazMatCostRecovery.narrativeText;
          })
        );
    }
}