import { Entity } from 'ng2-hallelujah';
import { CivilianInjury } from './civilian-injury';
import { CivilianFactors } from './civilian-factors';
import { REST } from 'app/core/model/REST';
import { Incident } from './incident';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AosEntity } from 'app/core/model/aos-entity';

export class Civilian extends Entity implements AosEntity<Civilian> {

  public static readonly REL_NAME = 'civilianCasualty';

  @REST.ForeignEntityRef({isOwner: true})
  incident: Incident;

  idHash: string;
  displayOrder: number;
  injury: CivilianInjury;
  factors: CivilianFactors;

  /**
   *
   * @param civilianUpdate
   */
  public update(civilianUpdate: Civilian): Observable<void> {
    const updateObject = REST.transformEntityForSave(civilianUpdate);
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
