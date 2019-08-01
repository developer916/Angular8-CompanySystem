import { FormControl } from '@angular/forms';
import { LookupService } from '../../core/services/lookup.service';
import { FormStateService } from '../../core/services/form-state.service';

export class FireServiceFactors {

  public static readonly SESSION_NAME = 'Session.OS.IM.FireServiceFactors';

  activityAtInjuryCode: string;
  causeOfInjuryCode: string;
  whereInjuryOccurredCode: string;
  factorContributingToInjuryNone: boolean;
  factorContributingToInjuryCode: string;
  specificLocationCode: string;
  injuryOccurredInside: boolean;
  storyOfInjury: string;
  storyBelowGrade: boolean;
  injuryOccurredOutside: boolean;
  objectInvolvedInjuryNone: boolean;
  objectInvolvedInjuryCode: string;
  vehicleTypeCode: string;
  remarksComment: string;


  /**
   * Create a FireServiceFactors Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    ActivityAtInjury: string,
    CauseOfInjury: string,
    WhereInjuryOccurred: string,
    FactorContributingToInjuryNone: boolean,
    FactorContributingToInjury: string,
    SpecificLocation: string,
    InjuryOccurredInside: boolean,
    StoryOfInjury: string,
    StoryBelowGrade: boolean,
    InjuryOccurredOutside: boolean,
    ObjectInvolvedInjuryNone: boolean,
    ObjectInvolvedInjury: string,
    VehicleType: string,
    RemarksComment: string,
  }) {
    const fireServiceFactors: FireServiceFactors = new FireServiceFactors();
    fireServiceFactors.activityAtInjuryCode = session.ActivityAtInjury;
    fireServiceFactors.causeOfInjuryCode = session.CauseOfInjury;
    fireServiceFactors.whereInjuryOccurredCode = session.WhereInjuryOccurred;
    fireServiceFactors.factorContributingToInjuryNone = session.FactorContributingToInjuryNone;
    fireServiceFactors.factorContributingToInjuryCode = session.FactorContributingToInjury;
    fireServiceFactors.specificLocationCode = session.SpecificLocation;
    fireServiceFactors.injuryOccurredInside = session.InjuryOccurredInside;
    fireServiceFactors.storyOfInjury = session.StoryOfInjury;
    fireServiceFactors.storyBelowGrade = session.StoryBelowGrade;
    fireServiceFactors.injuryOccurredOutside = session.InjuryOccurredOutside;
    fireServiceFactors.objectInvolvedInjuryNone = session.ObjectInvolvedInjuryNone;
    fireServiceFactors.objectInvolvedInjuryCode = session.ObjectInvolvedInjury;
    fireServiceFactors.vehicleTypeCode = session.VehicleType;
    fireServiceFactors.remarksComment = session.RemarksComment;
    return fireServiceFactors;
  }

  /**
   *
   * @param {Map<string, FormControl>} formControls
   * @param {LookupService} ols
   */
  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('ActivityAtInjury'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FirefighterActivityAtInjury', this.activityAtInjuryCode));
    FormStateService.initializeFormControlValue(formControls.get('CauseOfInjury'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FirefighterCauseOfInjury', this.causeOfInjuryCode));
    FormStateService.initializeFormControlValue(formControls.get('WhereInjuryOccurred'), ols.getOptionForSessionAndCode('Lookup.OS.IM.WhereOccur', this.whereInjuryOccurredCode));
    FormStateService.initializeFormControlValue(formControls.get('FactorContributingToInjuryNone'), this.factorContributingToInjuryNone);
    FormStateService.initializeFormControlValue(formControls.get('FactorContributingToInjury'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FirefighterContributionFactor', this.factorContributingToInjuryCode));
    FormStateService.initializeFormControlValue(formControls.get('SpecificLocation'), ols.getOptionForSessionAndCode('Lookup.OS.IM.SpecificLocation', this.specificLocationCode));
    FormStateService.initializeFormControlValue(formControls.get('InjuryOccurredInside'), this.injuryOccurredInside);
    FormStateService.initializeFormControlValue(formControls.get('StoryOfInjury'), this.storyOfInjury);
    FormStateService.initializeFormControlValue(formControls.get('StoryBelowGrade'), this.storyBelowGrade);
    FormStateService.initializeFormControlValue(formControls.get('InjuryOccurredOutside'), this.injuryOccurredOutside);
    FormStateService.initializeFormControlValue(formControls.get('ObjectInvolvedInjuryNone'), this.objectInvolvedInjuryNone);
    FormStateService.initializeFormControlValue(formControls.get('ObjectInvolvedInjury'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ObjectInvolvedInjury', this.objectInvolvedInjuryCode));
    FormStateService.initializeFormControlValue(formControls.get('VehicleType'), ols.getOptionForSessionAndCode('Lookup.OS.IM.VehicleType', this.vehicleTypeCode));
    FormStateService.initializeFormControlValue(formControls.get('RemarksComment'), this.remarksComment);
  }
}
