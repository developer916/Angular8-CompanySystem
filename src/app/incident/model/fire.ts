import { Entity } from 'ng2-hallelujah';
import { FireEquipmentDetails } from './fire-equipment-details';
import { FireIgnitionDetails } from './fire-ignition-details';
import { Structure } from './structure';
import { REST } from 'app/core/model/REST';
import { Incident } from './incident';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AosEntity } from 'app/core/model/aos-entity';

export class Fire extends Entity implements AosEntity<Fire> {

  public static readonly REL_NAME = 'fire';

  @REST.ForeignEntityRef({isOwner: true})
  incident: Incident;

  idHash: string;
  equipmentDetails: FireEquipmentDetails;
  ignitionDetails: FireIgnitionDetails;
  structure: Structure;

  /**
   *
   * @param fireUpdate
   */
  public update(fireUpdate: Fire): Observable<void> {
    const updateObject = REST.transformEntityForSave(fireUpdate);
    return super.update(updateObject).pipe(
      tap(() => {
        if (updateObject['ignitionDetails'] != null) {
          Object.assign(this.ignitionDetails, updateObject['ignitionDetails']);
        }
        if (updateObject['equipmentDetails'] != null) {
        Object.assign(this.equipmentDetails, updateObject['equipmentDetails']);
        }
      })
    );
  }
}
