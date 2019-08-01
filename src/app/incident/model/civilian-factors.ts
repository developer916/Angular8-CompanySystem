import { Entity } from 'ng2-hallelujah';
import { FormControl } from '@angular/forms';
import { LookupService } from '../../core/services/lookup.service';
import { FormStateService } from '../../core/services/form-state.service';

export class CivilianFactors {

  public static readonly SESSION_NAME = 'Session.OS.IM.CivilianFactors';

  causeOfInjuryCode: string;
  activityAtInjuryCode: string;
  factorContributingToInjuryNone: boolean;
  factorContributingToInjury1Code: string;
  factorContributingToInjury2Code: string;
  factorContributingToInjury3Code: string;
  locationAtInjuryCode: string;
  generalLocationCode: string;
  humanFactorNone: boolean;
  humanFactorAsleep: boolean;
  humanFactorAlcohol: boolean;
  humanFactorMentallyDisabled: boolean;
  humanFactorPossibleDrug: boolean;
  humanFactorUnconscious: boolean;
  humanFactorUnattendedPerson: boolean;
  humanFactorPhysicallyDisabled: boolean;
  humanFactorPhysicallyRestrained: boolean;
  specificLocationCode: string;
  storyStartIncident: string;
  storyStartIncidentBelowGrade: boolean;
  storyWhereInjured: string;
  storyWhereInjuredBelowGrade: boolean;


  /**
   * Create a CivilianFactors Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    CauseOfInjury: string,
    ActivityAtInjury: string,
    FactorContributingToInjuryNone: boolean,
    FactorContributingToInjury1: string,
    FactorContributingToInjury2: string,
    FactorContributingToInjury3: string,
    LocationAtInjury: string,
    GeneralLocation: string,
    HumanFactorNone: boolean,
    HumanFactorAsleep: boolean,
    HumanFactorPossibleAlcohol: boolean,
    HumanFactorMentallyDisabled: boolean,
    HumanFactorPossibleDrug: boolean,
    HumanFactorUnconscious: boolean,
    HumanFactorUnattendedPerson: boolean,
    HumanFactorPhysicallyDisabled: boolean,
    HumanFactorPhysicallyRestrained: boolean,
    SpecificLocation: string,
    StoryStartIncident: string,
    StoryStartIncidentBelowGrade: boolean,
    StoryWhereInjured: string,
    StoryWhereInjuredBelowGrade: boolean,
  }) {
    const civilianFactors: CivilianFactors = new CivilianFactors();
    civilianFactors.causeOfInjuryCode = session.CauseOfInjury;
    civilianFactors.activityAtInjuryCode = session.ActivityAtInjury;
    civilianFactors.factorContributingToInjuryNone = session.FactorContributingToInjuryNone;
    civilianFactors.factorContributingToInjury1Code = session.FactorContributingToInjury1;
    civilianFactors.factorContributingToInjury2Code = session.FactorContributingToInjury2;
    civilianFactors.factorContributingToInjury3Code = session.FactorContributingToInjury3;
    civilianFactors.locationAtInjuryCode = session.LocationAtInjury;
    civilianFactors.generalLocationCode = session.GeneralLocation;
    civilianFactors.humanFactorNone = session.HumanFactorNone;
    civilianFactors.humanFactorAsleep = session.HumanFactorAsleep;
    civilianFactors.humanFactorAlcohol = session.HumanFactorPossibleAlcohol;
    civilianFactors.humanFactorMentallyDisabled = session.HumanFactorMentallyDisabled;
    civilianFactors.humanFactorPossibleDrug = session.HumanFactorPossibleDrug;
    civilianFactors.humanFactorUnconscious = session.HumanFactorUnconscious;
    civilianFactors.humanFactorUnattendedPerson = session.HumanFactorUnattendedPerson;
    civilianFactors.humanFactorPhysicallyDisabled = session.HumanFactorPhysicallyDisabled;
    civilianFactors.humanFactorPhysicallyRestrained = session.HumanFactorPhysicallyRestrained;
    civilianFactors.specificLocationCode = session.SpecificLocation;
    civilianFactors.storyStartIncident = session.StoryStartIncident;
    civilianFactors.storyStartIncidentBelowGrade = session.StoryStartIncidentBelowGrade;
    civilianFactors.storyWhereInjured = session.StoryWhereInjured;
    civilianFactors.storyWhereInjuredBelowGrade = session.StoryWhereInjuredBelowGrade;
    return civilianFactors;
  }

  /**
   *
   * @param {Map<string, FormControl>} formControls
   * @param {LookupService} ols
   */
  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('CauseOfInjury'), ols.getOptionForSessionAndCode('Lookup.OS.IM.CauseOfInjury', this.causeOfInjuryCode));
    FormStateService.initializeFormControlValue(formControls.get('ActivityAtInjury'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ActivityAtInjury', this.activityAtInjuryCode));
    FormStateService.initializeFormControlValue(formControls.get('FactorContributingToInjuryNone'), this.factorContributingToInjuryNone);
    FormStateService.initializeFormControlValue(formControls.get('FactorContributingToInjury1'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ContributionFactor', this.factorContributingToInjury1Code));
    FormStateService.initializeFormControlValue(formControls.get('FactorContributingToInjury2'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ContributionFactor', this.factorContributingToInjury2Code));
    FormStateService.initializeFormControlValue(formControls.get('FactorContributingToInjury3'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ContributionFactor', this.factorContributingToInjury3Code));
    FormStateService.initializeFormControlValue(formControls.get('LocationAtInjury'), ols.getOptionForSessionAndCode('Lookup.OS.IM.LocationAtInjury', this.locationAtInjuryCode));
    FormStateService.initializeFormControlValue(formControls.get('GeneralLocation'), ols.getOptionForSessionAndCode('Lookup.OS.IM.GeneralLocation', this.generalLocationCode));
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorNone'), this.humanFactorNone);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorAsleep'), this.humanFactorAsleep);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorPossibleAlcohol'), this.humanFactorAlcohol);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorMentallyDisabled'), this.humanFactorMentallyDisabled);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorPossibleDrug'), this.humanFactorPossibleDrug);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorUnconscious'), this.humanFactorUnconscious);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorUnattendedPerson'), this.humanFactorUnattendedPerson);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorPhysicallyDisabled'), this.humanFactorPhysicallyDisabled);
    FormStateService.initializeFormControlValue(formControls.get('HumanFactorPhysicallyRestrained'), this.humanFactorPhysicallyRestrained);
    FormStateService.initializeFormControlValue(formControls.get('SpecificLocation'), ols.getOptionForSessionAndCode('Lookup.OS.IM.AreaOfOrigin', this.specificLocationCode));
    FormStateService.initializeFormControlValue(formControls.get('StoryStartIncident'), this.storyStartIncident);
    FormStateService.initializeFormControlValue(formControls.get('StoryStartIncidentBelowGrade'), this.storyStartIncidentBelowGrade);
    FormStateService.initializeFormControlValue(formControls.get('StoryWhereInjured'), this.storyWhereInjured);
    FormStateService.initializeFormControlValue(formControls.get('StoryWhereInjuredBelowGrade'), this.storyWhereInjuredBelowGrade);
  }
}


