import {Entity} from 'ng2-hallelujah';
import {AosEntity} from '../../core/model/aos-entity';
import {Review} from './review';
import {Ammendments} from './ammendments';

export class IncidentReview extends Entity implements AosEntity<IncidentReview> {

  public static readonly SESSION_NAME = 'Session.OS.RV';
  public static readonly REL_NAME = 'incident-review';

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
  closedUserID: string;

  /**
   * Username of the user who closed the incident
   */
  closedUserName: string;

  /**
   * Session from which the incident was closed
   */
  closedSession: string;

  /**
   * Datetime when the incident was closed
   */
  closedDateTime: string;

  /**
   * Review data for the Incident Review
   */
  review: Review;

  /**
   * Ammendments data for the Incident Review
   */
  ammendments: Ammendments;



}
