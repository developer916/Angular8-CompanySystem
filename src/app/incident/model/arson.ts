import { Entity } from 'ng2-hallelujah';
import { ArsonAgencyReferredTo } from './arson-agency-referred-to';
import { ArsonCaseDetails } from './arson-case-details';
import { ArsonJuvenileFiresetter } from './arson-juvenile-firesetter';
import { REST } from 'app/core/model/REST';
import { Incident } from './incident';
import { AosEntity } from 'app/core/model/aos-entity';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class Arson extends Entity implements AosEntity<Arson> {

  public static readonly REL_NAME = 'arson';

  @REST.ForeignEntityRef({isOwner: true})
  incident: Incident;

  idHash: string;
  agencyReferred: ArsonAgencyReferredTo;
  caseDetails: ArsonCaseDetails;

  @REST.ForeignEntityRef({isOwner: false})
  arsonJuvenileFiresetter: ArsonJuvenileFiresetter[];

  /**
   *
   * @param arsonUpdate
   */
  public update(arsonUpdate: Arson): Observable<void> {
    const updateObject = REST.transformEntityForSave(arsonUpdate);
    return super.update(updateObject).pipe(
      tap(() => {
        if (updateObject['agencyReferred'] != null) {
          Object.assign(this.agencyReferred, updateObject['agencyReferred']);
        }
        if (updateObject['caseDetails'] != null) {
        Object.assign(this.caseDetails, updateObject['caseDetails']);
        }
      })
    );
  }
}

