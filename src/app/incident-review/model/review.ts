import {FormControl} from '@angular/forms';
import {LookupService} from '../../core/services/lookup.service';
import {FormStateService} from '../../core/services/form-state.service';
import {DataUtils} from '../../core/services/data-utils';
import {Incident} from '../../incident/model/incident';

export class Review extends Incident {

  public static readonly REVIEW_SESSION_NAME = 'Session.OS.RV.Review';

  public static fromSessionState(session: {
    ReviewerDate?: string,
    ReviewerFirstName?: string,
    ReviewerLastName?: string,
    ReviewerMiddleInitial?: string,
    ReviewerPersonnelID?: number,
    ReviewerRank?: string,
    ReviewText?: string
  }): Review {
    const review: Review = new Review();
    review.reviewerDate = session.ReviewerDate;
    review.reviewerFirstName = session.ReviewerFirstName;
    review.reviewerLastName = session.ReviewerLastName;
    review.reviewerMiddleInitial = session.ReviewerMiddleInitial;
    review.reviewerPersonnelID = session.ReviewerPersonnelID;
    review.reviewerRank = session.ReviewerRank;
    review.reviewerNarrativeText = session.ReviewText;
    return review;
  }

  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('LastChanged'), DataUtils.formatDateTime(this.auditDateTime));
    FormStateService.initializeFormControlValue(formControls.get('IncidentNumber'), new Date(this.response.alarmDateTime).getFullYear() + '-' + this.displayIncidentNumber + '-' + this.response.exposureNumber);
    FormStateService.initializeFormControlValue(formControls.get('ReviewerDate'), DataUtils.formatDateString(this.reviewerDate));
    FormStateService.initializeFormControlValue(formControls.get('ReviewerFirstName'), this.reviewerFirstName);
    FormStateService.initializeFormControlValue(formControls.get('ReviewerLastName'), this.reviewerLastName);
    FormStateService.initializeFormControlValue(formControls.get('ReviewerMiddleInitial'), this.reviewerMiddleInitial);
    FormStateService.initializeFormControlValue(formControls.get('ReviewText'), this.reviewerNarrativeText);
    FormStateService.initializeFormControlValue(formControls.get('ReviewerPersonnelID'), this.reviewerPersonnelID);
    FormStateService.initializeFormControlValue(formControls.get('ReviewerRank'), this.reviewerRank);
    FormStateService.initializeFormControlValue(formControls.get('AlarmDateTime'), DataUtils.formatDateTime(this.response.alarmDateTime));
    FormStateService.initializeFormControlValue(formControls.get('Address'), this.response.streetAddress + ' ' + this.response.city);
  }

}
