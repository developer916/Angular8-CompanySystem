import { Entity } from 'ng2-hallelujah';
import { FireServiceFactors } from './fire-service-factors';
import { FireServiceInjury } from './fire-service-injury';
import { ProtectiveEquipmentFailure } from './protective-equipment-failure';
import { REST } from 'app/core/model/REST';
import { Incident } from './incident';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AosEntity } from 'app/core/model/aos-entity';

export class FireService extends Entity implements AosEntity<FireService> {

  public static readonly REL_NAME = 'fireServiceCasualty';

  @REST.ForeignEntityRef({isOwner: true})
  incident: Incident;

  idHash: string;
  displayOrder: number;
  injury: FireServiceInjury;
  factors: FireServiceFactors;

  @REST.ForeignEntityRef({isOwner: false})
  protectiveEquipmentFailure: ProtectiveEquipmentFailure[];

  /**
   *
   * @param fireServiceUpdate
   */
  public update(fireServiceUpdate: FireService): Observable<void> {
    const updateObject = REST.transformEntityForSave(fireServiceUpdate);
    return super.update(updateObject).pipe(
      tap(() => {
        if (updateObject['injury'] != null) {
          Object.assign(this.injury, updateObject['injury']);
        }
        if (updateObject['factors'] != null) {
        Object.assign(this.factors, updateObject['factors']);
        }
      })
    );
  }
}
