import { Entity } from 'ng2-hallelujah';
import { WildlandIgnitionDetails } from './wildland-ignition-details';
import { WildlandPropertyDetails } from './wildland-property-details';
import { REST } from 'app/core/model/REST';
import { Incident } from './incident';
import { AosEntity } from 'app/core/model/aos-entity';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class Wildland extends Entity implements AosEntity<Wildland> {

  public static readonly REL_NAME = 'wildland';

  @REST.ForeignEntityRef({isOwner: true})
  incident: Incident;

  idHash: string;
  ignitionDetails: WildlandIgnitionDetails;
  propertyDetails: WildlandPropertyDetails;

  /**
   *
   * @param wildlandUpdate
   */
  public update(wildlandUpdate: Wildland): Observable<void> {
    const updateObject = REST.transformEntityForSave(wildlandUpdate);
    return super.update(updateObject).pipe(
      tap(() => {
        if (updateObject['ignitionDetails'] != null) {
          Object.assign(this.ignitionDetails, updateObject['ignitionDetails']);
        }
        if (updateObject['propertyDetails'] != null) {
        Object.assign(this.propertyDetails, updateObject['propertyDetails']);
        }
      })
    );
  }
}
