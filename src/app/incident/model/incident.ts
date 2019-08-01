import { Entity } from 'ng2-hallelujah';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AosEntity } from '../../core/model/aos-entity';
import { REST } from '../../core/model/REST';
import { AgencyOnScene } from './agency-on-scene';
import { Arson } from './arson';
import { BasicCAD } from './basic-cad';
import { BasicResponse } from './basic-response';
import { BasicSummary } from './basic-summary';
import { BasicSummaryMutualAid } from './basic-summary-mutual-aid';
import { Civilian } from './civilian';
import { Fire } from './fire';
import { FireService } from './fire-service';
import { HazMat } from './haz-mat';
import { PersonInvolved } from './person-involved';
import { Resources } from './resources';
import { Wildland } from './wildland';

export class Incident extends Entity implements AosEntity<Incident> {

  public static readonly SESSION_NAME = 'Session.OS.IM';
  public static readonly REL_NAME = 'incident';

  /**
   * Hashed ID of the incident
   */
  idHash: string;

  /**
   * Incident number, as it should be displayed in the UI
   */
  displayIncidentNumber: string;

  /**
   * UserID of the user who closed the incident
   */
  closedUserID: string

  /**
   * Username of the user who closed the incident
   */
  closedUserName: string

    /**
   * Session from which the incident was closed
   */
  closedSession: string

  /**
   * Datetime when the incident was closed
   */
  closedDateTime: string

  /**
   * Datetime when the last update to the Incident Table was made
   */
  auditDateTime: string;

  // The following are for the incident-review form
  reviewerDate: string;
  reviewerFirstName: string;
  reviewerLastName: string;
  reviewerMiddleInitial: string;
  reviewerNarrativeText: string
  reviewerPersonnelID: number;
  reviewerRank: string;

  /**
   * BasicResponse data for the incident
   */
  response: BasicResponse;

  /**
   * BasicSummary data for the incident
   */
  summary: BasicSummary;

  /**
   * CAD data for the incident
   */
  cadIncident: BasicCAD;

  /**
   * MutualAid departement data for the incident
   */
  @REST.ForeignEntityRef({isOwner: false})
  mutualAid: BasicSummaryMutualAid[];

  /**
   * AgencyOnScene contact infos for an incident
   */
  @REST.ForeignEntityRef({isOwner: false})
  agencyOnScene: AgencyOnScene[];

  /**
   * PersonsInvolved data for the incident. This relationship is defined on the BasicPersonsInvolved object so isOwner is FALSE
   */
  @REST.ForeignEntityRef({isOwner: false})
  personsInvolved: PersonInvolved[];

  /**
   * Resources data for the incident. This relationship is defined on the Resources object so isOwner is FALSE
   */
  @REST.ForeignEntityRef({isOwner: false})
  units: Resources[];

  /**
   * CivilianCasualty data for the incident. This relationship is defined on the CivilianCasualty object so isOwner is FALSE
   */
  @REST.ForeignEntityRef({isOwner: false})
  civilianCasualty: Civilian[];

  /**
   * FireServiceCasualty data for the incident. This relationship is defined on the FireServiceCasualty object so isOwner is FALSE
   */
  @REST.ForeignEntityRef({isOwner: false})
  fireServiceCasualty: FireService[];

  /**
   * Fire data for the incident. This relationship is defined on the Fire object so isOwner is FALSE
   */
  @REST.ForeignEntityRef({isOwner: false})
  fire: Fire;

  /**
   * Arson data for the incident. This relationship is defined on the Arson object so isOwner is FALSE
   */
  @REST.ForeignEntityRef({isOwner: false})
  arson: Arson;

  /**
   * Hazmat data for the incident. This relationship is defined on the Hazmat object so isOwner is FALSE
   */
  @REST.ForeignEntityRef({isOwner: false})
  hazMat: HazMat;

  /**
   * Wildland data for the incident. This relationship is defined on the Wildland object so isOwner is FALSE
   */
  @REST.ForeignEntityRef({isOwner: false})
  wildland: Wildland;


  /** Because the objects in from the svc calls aren't TS objects, copy them into type script constructed ones**/
  public copyAgenciesOnScene(agencyOnScene: AgencyOnScene[]) {
    if (!agencyOnScene) {
      this.agencyOnScene = null;
    } else {
      this.agencyOnScene = [];
      agencyOnScene.forEach(agencyIn => {
         const agency = new AgencyOnScene();
         Object.assign(agency, agencyIn);
         if (agencyIn['_links']) {
           Object.assign(agency._links, agencyIn._links);
         }
         this.agencyOnScene.push(agency);
      });
    }
  }

/** Because the objects in from the svc calls aren't TS objects, copy them into type script constructed ones**/
  public copyPersonnelInvolved(personsInvolved: PersonInvolved[]) {
    if (!personsInvolved) {
      this.personsInvolved = null;
    } else {
      this.personsInvolved = [];
      personsInvolved.forEach(personIn => {
         const person = new PersonInvolved();
         Object.assign(person, personIn);
         if (personIn['_links']) {
           Object.assign(person._links, personIn._links);
         }
         this.personsInvolved.push(person);
      });
    }
  }

  /**
   *
   * @param incidentUpdate
   */
  public update(incidentUpdate: Incident): Observable<void> {
    const updateObject = REST.transformEntityForSave(incidentUpdate);
    return super.update(updateObject).pipe(
      tap(() => {
        this.closedUserID = incidentUpdate.closedUserID || this.closedUserID;
        this.closedUserName = incidentUpdate.closedUserName;
        this.closedSession = incidentUpdate.closedSession
        this.closedDateTime = incidentUpdate.closedDateTime;
        Object.assign(this.response, updateObject['response']);
        Object.assign(this.summary, updateObject['summary']);
      })
    );
  }
}
