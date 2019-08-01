import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { flatMap, tap } from 'rxjs/operators';
import { DataService } from '../../core/services/data-service.service';
import { FormStateService } from '../../core/services/form-state.service';
import { ListDetailService } from '../../core/services/list-detail.service';
import { LookupService } from '../../core/services/lookup.service';
import { RuleEngineService } from 'app/core/services/rule-engine.service';
import {Review} from '../model/review';
import {Incident} from '../../incident/model/incident';
import {BasicResponse} from '../../incident/model/basic-response';
import { NGXLogger } from 'ngx-logger';

/**
 * Class that is responsible for loading and saving incident data from the backend API
 *
 * TODO: Remove Object.assign calls and add proper constructors to data model in order to insure type safety
 *
 */
@Injectable()
export class ReviewDataBrokerService {

  /**
   * Entity model of the incident we are actively editing in the UI. Note that this will ALWAYS represent the state
   * of the incident as reported by the backend API
   */
  private _activeIncidentEntity: Incident;

  /**
   *
   * @param fss
   * @param {ListDetailService} lds
   * @param ols
   * @param {DataService} ds
   */
  constructor(private fss: FormStateService,
    private lds: ListDetailService,
    private ols: LookupService,
    private ds: DataService,
    private res: RuleEngineService,
    private http: HttpClient,
    private logger: NGXLogger) {
  }

  /**
   * Getter for activeIncidentEntity
   */
  get activeIncidentEntity(): Incident {
    return this._activeIncidentEntity;
  }


  /**
   * Load the base incident resource
   */
  public loadIncident(incidentId: string) {
    return this.ds.getIncidentResource(incidentId).pipe(
      tap(incident => {
        this._activeIncidentEntity = incident;
        return of(incident);
      }));
  }

  /**
   * Load all incident resources
   *
   * @param incidentId
   */
  public loadIncidentResources(incidentObservable: Observable<Review>) {
    this.resetForm();
    return incidentObservable.pipe(
      flatMap(incident => this.populateReviewSession(incident)),
    );
  }

  /**
   */
  private resetForm() {
    this.res.resetRuleEngine();
    this.fss.resetAll();
    this.lds.resetAll();
  }

  /**
   *
   * @param incident
   */
  private populateReviewSession(incident: Review) {
    console.log(incident);

    if ( incident != null ) {
      const incidentReview = new Review();
      Object.assign(incidentReview, incident);
      this._activeIncidentEntity = incidentReview;
      const formControls = this.fss.getAllFormControlsForSession(Review.REVIEW_SESSION_NAME);
      incidentReview.populateSession(formControls, this.ols);
    }
    return of(incident);
  }

  /**
   * Save the incident given it's current state as represented by the values in the form
   */
  public saveIncident(incidentUpdate?: Review) {
    const saveObservables = [];
    // Basic
    const basicObs = this.saveReview(incidentUpdate);
    if (basicObs) {
      saveObservables.push(basicObs);
    }
    return forkJoin(saveObservables);
  }

  /**
   * Saves all Basic session data to the API
   */
  private saveReview(incidentUpdate?: Review) {
    const saveObservables = [];
    let reviewEntityUpdate: Review = incidentUpdate == null ? new Review() : incidentUpdate;

    const reviewUpdate = this.fss.getSessionFormState(Review.REVIEW_SESSION_NAME, null, true, true);
    if (Object.getOwnPropertyNames(reviewUpdate).length > 0) {
      reviewEntityUpdate = Review.fromSessionState(reviewUpdate);
    }

    saveObservables.push(this._activeIncidentEntity.update(reviewEntityUpdate));

    if (saveObservables.length > 0) {
      return forkJoin(saveObservables);
    } else {
      return null;
    };
  }

}
