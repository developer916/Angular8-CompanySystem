import { Entity } from 'ng2-hallelujah';
import { StructureDescriptionStatus } from './structure-description-status';
import { StructureSystemsDamage } from './structure-systems-damage';
import { REST } from 'app/core/model/REST';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Fire } from './fire';
import { AosEntity } from 'app/core/model/aos-entity';

export class Structure extends Entity implements AosEntity<Structure>{

  public static readonly REL_NAME = 'structure';

  @REST.ForeignEntityRef({isOwner: true})
  fire: Fire;

  idHash: string;
  descriptionStatus: StructureDescriptionStatus;
  systemsDamage: StructureSystemsDamage;

  /**
   *
   * @param structureUpdate
   */
  public update(structureUpdate: Structure): Observable<void> {
    const updateObject = REST.transformEntityForSave(structureUpdate);
    return super.update(updateObject).pipe(
      tap(() => {
        if (updateObject['descriptionStatus'] != null) {
          Object.assign(this.descriptionStatus, updateObject['descriptionStatus']);
        } if (updateObject['systemsDamage'] != null) {
          Object.assign(this.systemsDamage, updateObject['systemsDamage']);
        }
      })
    );
  }

}
