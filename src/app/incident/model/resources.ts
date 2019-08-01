import { ResourcesUnitNarrative } from './resources-unit-narrative';
import { ResourcesUnitPersonnel } from './resources-unit-personnel';
import { Entity } from 'ng2-hallelujah';
import { ResourcesUnit } from './resources-unit';
import { REST } from '../../core/model/REST';
import { Incident } from './incident';
import { AosEntity } from 'app/core/model/aos-entity';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


/**
 * Top-Level Resources Object - holds pointers to unit, narrative, personnel, and equipment used.
 */
export class Resources extends Entity implements AosEntity<Resources> {

  public static readonly SESSION_NAME = 'Session.OS.IM.Resources';
  public static readonly REL_NAME = 'units';

  @REST.ForeignEntityRef({isOwner: true})
  incident: Incident;

  idHash: string;
  displayOrder: number;
  unit: ResourcesUnit;
  narrative: ResourcesUnitNarrative;

  @REST.ForeignEntityRef({isOwner: false})
  personnel: ResourcesUnitPersonnel[];

  unitEquipmentUsed: {};

  /**
   *
   * @param resourcesUpdate
   */
  public update(resourcesUpdate: Resources): Observable<void> {
    const updateObject = REST.transformEntityForSave(resourcesUpdate);
    return super.update(updateObject).pipe(
      tap(() => {
        Object.assign(this.unit, updateObject['unit']);
        Object.assign(this.narrative, updateObject['narrative']);
      })
    );
  }
}
