import { FormControl } from '@angular/forms';
import { LookupService } from '../../core/services/lookup.service';
import { FormStateService } from '../../core/services/form-state.service';

export class StructureSystemsDamage {

  public static readonly SESSION_NAME = 'Session.OS.IM.StructureSystemsDamage';

  restrictedAccess: string;
  detectorPresenceCode: string;
  detectorTypeCode: string;
  detectorPowerCode: string;
  detectorOperationCode: string;
  detectorEffectCode: string;
  detectorFailureCode: string;
  aesPresenceCode: string;
  aesTypeCode: string;
  sprinklers: string;
  aesOperationCode: string;
  aesFailureCode: string;
  storiesMinorFlame: string;
  storiesSignificantFlame: string;
  storiesHeavyFlame: string;
  storiesExtremeFlame: string;
  storiesMinorSmoke: string;
  storiesSignificantSmoke: string;
  storiesHeavySmoke: string;
  storiesExtremeSmoke: string;
  storiesMinorWater: string;
  storiesSignificantWater: string;
  storiesHeavyWater: string;
  storiesExtremeWater: string;


  /**
   * Create a StructureSystemsDamage Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    RestrictedAccess?: string,
    DetectorPresence?: string,
    DetectorType?: string,
    DetectorPower?: string,
    DetectorOperation?: string,
    DetectorEffect?: string,
    DetectorFailure?: string,
    AESPresence?: string,
    AESType?: string,
    Sprinklers?: string,
    AESOperation?: string,
    AESFailure?: string,
    StoriesMinorFlame?: string,
    StoriesSignificantFlame?: string,
    StoriesHeavyFlame?: string,
    StoriesExtremeFlame?: string,
    StoriesMinorSmoke?: string,
    StoriesSignificantSmoke?: string,
    StoriesHeavySmoke?: string,
    StoriesExtremeSmoke?: string,
    StoriesMinorWater?: string,
    StoriesSignificantWater?: string,
    StoriesHeavyWater?: string,
    StoriesExtremeWater?: string
  }) {
    const structureSystemsDamage: StructureSystemsDamage = new StructureSystemsDamage();
    structureSystemsDamage.restrictedAccess = session.RestrictedAccess;
    structureSystemsDamage.detectorPresenceCode = session.DetectorPresence;
    structureSystemsDamage.detectorTypeCode = session.DetectorType;
    structureSystemsDamage.detectorPowerCode = session.DetectorPower;
    structureSystemsDamage.detectorOperationCode = session.DetectorOperation;
    structureSystemsDamage.detectorEffectCode = session.DetectorEffect;
    structureSystemsDamage.detectorFailureCode = session.DetectorFailure;
    structureSystemsDamage.aesPresenceCode = session.AESPresence;
    structureSystemsDamage.aesTypeCode = session.AESType;
    structureSystemsDamage.sprinklers = session.Sprinklers;
    structureSystemsDamage.aesOperationCode = session.AESOperation;
    structureSystemsDamage.aesFailureCode = session.AESFailure;
    structureSystemsDamage.storiesMinorFlame = session.StoriesMinorFlame;
    structureSystemsDamage.storiesSignificantFlame = session.StoriesSignificantFlame;
    structureSystemsDamage.storiesHeavyFlame = session.StoriesHeavyFlame;
    structureSystemsDamage.storiesExtremeFlame = session.StoriesExtremeFlame;
    structureSystemsDamage.storiesMinorSmoke = session.StoriesMinorSmoke;
    structureSystemsDamage.storiesSignificantSmoke = session.StoriesSignificantSmoke;
    structureSystemsDamage.storiesHeavySmoke = session.StoriesHeavySmoke;
    structureSystemsDamage.storiesExtremeSmoke = session.StoriesExtremeSmoke;
    structureSystemsDamage.storiesMinorWater = session.StoriesMinorWater;
    structureSystemsDamage.storiesSignificantWater = session.StoriesSignificantWater;
    structureSystemsDamage.storiesHeavyWater = session.StoriesHeavyWater;
    structureSystemsDamage.storiesExtremeWater = session.StoriesExtremeWater;
    return structureSystemsDamage;
  }

  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('RestrictedAccess'), this.restrictedAccess);
    FormStateService.initializeFormControlValue(formControls.get('DetectorPresence'), ols.getOptionForSessionAndCode('Lookup.OS.IM.DetectorPresence', this.detectorPresenceCode));
    FormStateService.initializeFormControlValue(formControls.get('DetectorType'), ols.getOptionForSessionAndCode('Lookup.OS.IM.DetectorType', this.detectorTypeCode));
    FormStateService.initializeFormControlValue(formControls.get('DetectorPower'), ols.getOptionForSessionAndCode('Lookup.OS.IM.DetectorPower', this.detectorPowerCode));
    FormStateService.initializeFormControlValue(formControls.get('DetectorOperation'), ols.getOptionForSessionAndCode('Lookup.OS.IM.DetectorOperation', this.detectorOperationCode));
    FormStateService.initializeFormControlValue(formControls.get('DetectorEffect'), ols.getOptionForSessionAndCode('Lookup.OS.IM.DetectorEffect', this.detectorEffectCode));
    FormStateService.initializeFormControlValue(formControls.get('DetectorFailure'), ols.getOptionForSessionAndCode('Lookup.OS.IM.DetectorFailure', this.detectorFailureCode));
    FormStateService.initializeFormControlValue(formControls.get('AESPresence'), ols.getOptionForSessionAndCode('Lookup.OS.IM.AESPresence', this.aesPresenceCode));
    FormStateService.initializeFormControlValue(formControls.get('AESType'), ols.getOptionForSessionAndCode('Lookup.OS.IM.AESType', this.aesTypeCode));
    FormStateService.initializeFormControlValue(formControls.get('Sprinklers'), this.sprinklers);
    FormStateService.initializeFormControlValue(formControls.get('AESOperation'), ols.getOptionForSessionAndCode('Lookup.OS.IM.AESOperation', this.aesOperationCode));
    FormStateService.initializeFormControlValue(formControls.get('AESFailure'), ols.getOptionForSessionAndCode('Lookup.OS.IM.AESFailure', this.aesFailureCode));
    FormStateService.initializeFormControlValue(formControls.get('StoriesMinorFlame'), this.storiesMinorFlame);
    FormStateService.initializeFormControlValue(formControls.get('StoriesSignificantFlame'), this.storiesSignificantFlame);
    FormStateService.initializeFormControlValue(formControls.get('StoriesHeavyFlame'), this.storiesHeavyFlame);
    FormStateService.initializeFormControlValue(formControls.get('StoriesExtremeFlame'), this.storiesExtremeFlame);
    FormStateService.initializeFormControlValue(formControls.get('StoriesMinorSmoke'), this.storiesMinorSmoke);
    FormStateService.initializeFormControlValue(formControls.get('StoriesSignificantSmoke'), this.storiesSignificantSmoke);
    FormStateService.initializeFormControlValue(formControls.get('StoriesHeavySmoke'), this.storiesHeavySmoke);
    FormStateService.initializeFormControlValue(formControls.get('StoriesExtremeSmoke'), this.storiesExtremeSmoke);
    FormStateService.initializeFormControlValue(formControls.get('StoriesMinorWater'), this.storiesMinorWater);
    FormStateService.initializeFormControlValue(formControls.get('StoriesSignificantWater'), this.storiesSignificantWater);
    FormStateService.initializeFormControlValue(formControls.get('StoriesHeavyWater'), this.storiesHeavyWater);
    FormStateService.initializeFormControlValue(formControls.get('StoriesExtremeWater'), this.storiesExtremeWater);
  }
}
