import { FormControl } from '@angular/forms';
import { LookupService } from '../../core/services/lookup.service';
import { FormStateService } from '../../core/services/form-state.service';

export class StructureDescriptionStatus {

  public static readonly SESSION_NAME = 'Session.OS.IM.StructureDescriptionStatus';

  buildingStatusCode: string;
  floorsAboveGrade: string;
  floorsBelowGrade: string;
  storyOfFireOrigin: string;
  buildingLength: string;
  buildingWidth: string;
  fireOriginBelowGrade: boolean;
  totalSquareFeet: string;
  fireSpreadCode: string;
  flameSpreadItemCode: string;
  flameSpreadMaterialCode: string;
  flameSpreadNone: boolean;
  constructionClassCode: string;
  standpipePerformanceCode: string;
  peopleEvacuated: string;
  roofCoveringCode: string;
  buildingTypeCode: string;
  chimneyInvolved: boolean;
  smokeSpreadCode: string;
  standpipeSystemTypeCode: string;
  standpipeSystemOperationCode: string;
  fireAlarmNotificationCode: string;
  standpipeSystemPresent: boolean;


  /**
   * Create a StructureDescriptionStatus Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    BuildingStatus?: string,
    FloorsAboveGrade?: string,
    FloorsBelowGrade?: string,
    StoryOfFireOrigin?: string,
    BuildingLength?: string,
    BuildingWidth?: string,
    FireOriginBelowGrade?: boolean,
    TotalSquareFeet?: string,
    FireSpread?: string,
    FlameSpreadItemFirstIgnited?: string,
    FlameSpreadTypeOfMaterialFirstIgnited?: string,
    FlameSpreadNone?: boolean,
    ConstructionClass?: string,
    StandpipePerformance?: string,
    PeopleEvacuated?: string,
    RoofCovering?: string,
    BuildingType?: string,
    ChimneyInvolved?: boolean,
    SmokeSpread?: string,
    StandpipeSystemType?: string,
    StandpipeSystemOperation?: string,
    FireAlarmNotification?: string,
    StandpipeSystemPresent?: boolean
  }) {
    const structureDescriptionStatus: StructureDescriptionStatus = new StructureDescriptionStatus();
    structureDescriptionStatus.buildingStatusCode = session.BuildingStatus;
    structureDescriptionStatus.floorsAboveGrade = session.FloorsAboveGrade;
    structureDescriptionStatus.floorsBelowGrade = session.FloorsBelowGrade;
    structureDescriptionStatus.storyOfFireOrigin = session.StoryOfFireOrigin;
    structureDescriptionStatus.buildingLength = session.BuildingLength;
    structureDescriptionStatus.buildingWidth = session.BuildingWidth;
    structureDescriptionStatus.fireOriginBelowGrade = session.FireOriginBelowGrade;
    structureDescriptionStatus.totalSquareFeet = session.TotalSquareFeet;
    structureDescriptionStatus.fireSpreadCode = session.FireSpread;
    structureDescriptionStatus.flameSpreadItemCode = session.FlameSpreadItemFirstIgnited;
    structureDescriptionStatus.flameSpreadMaterialCode = session.FlameSpreadTypeOfMaterialFirstIgnited;
    structureDescriptionStatus.flameSpreadNone = session.FlameSpreadNone;
    structureDescriptionStatus.constructionClassCode = session.ConstructionClass;
    structureDescriptionStatus.standpipePerformanceCode = session.StandpipePerformance;
    structureDescriptionStatus.peopleEvacuated = session.PeopleEvacuated;
    structureDescriptionStatus.roofCoveringCode = session.RoofCovering;
    structureDescriptionStatus.buildingTypeCode = session.BuildingType;
    structureDescriptionStatus.chimneyInvolved = session.ChimneyInvolved;
    structureDescriptionStatus.smokeSpreadCode = session.SmokeSpread;
    structureDescriptionStatus.standpipeSystemTypeCode = session.StandpipeSystemType;
    structureDescriptionStatus.standpipeSystemOperationCode = session.StandpipeSystemOperation;
    structureDescriptionStatus.fireAlarmNotificationCode = session.FireAlarmNotification;
    structureDescriptionStatus.standpipeSystemPresent = session.StandpipeSystemPresent;
    return structureDescriptionStatus;
  }

  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('BuildingStatus'), ols.getOptionForSessionAndCode('Lookup.OS.IM.BuildingStatus', this.buildingStatusCode));
    FormStateService.initializeFormControlValue(formControls.get('FloorsAboveGrade'), this.floorsAboveGrade);
    FormStateService.initializeFormControlValue(formControls.get('FloorsBelowGrade'), this.floorsBelowGrade);
    FormStateService.initializeFormControlValue(formControls.get('StoryOfFireOrigin'), this.storyOfFireOrigin);
    FormStateService.initializeFormControlValue(formControls.get('BuildingLength'), this.buildingLength);
    FormStateService.initializeFormControlValue(formControls.get('BuildingWidth'), this.buildingWidth);
    FormStateService.initializeFormControlValue(formControls.get('FireOriginBelowGrade'), this.fireOriginBelowGrade);
    FormStateService.initializeFormControlValue(formControls.get('TotalSquareFeet'), this.totalSquareFeet);
    FormStateService.initializeFormControlValue(formControls.get('FireSpread'),  ols.getOptionForSessionAndCode('Lookup.OS.IM.FireSpread', this.fireSpreadCode));
    FormStateService.initializeFormControlValue(formControls.get('FlameSpreadItemFirstIgnited'),  ols.getOptionForSessionAndCode('Lookup.OS.IM.ItemFirstIgnited', this.flameSpreadItemCode));
    FormStateService.initializeFormControlValue(formControls.get('FlameSpreadTypeOfMaterialFirstIgnited'),  ols.getOptionForSessionAndCode('Lookup.OS.IM.TypeOfMaterialFirstIgnited', this.flameSpreadMaterialCode));
    FormStateService.initializeFormControlValue(formControls.get('FlameSpreadNone'), this.flameSpreadNone);
    FormStateService.initializeFormControlValue(formControls.get('ConstructionClass'),  ols.getOptionForSessionAndCode('Lookup.OS.IM.ConstructionClass', this.constructionClassCode));
    FormStateService.initializeFormControlValue(formControls.get('StandpipePerformance'),  ols.getOptionForSessionAndCode('Lookup.OS.IM.StandpipePerformance', this.standpipePerformanceCode));
    FormStateService.initializeFormControlValue(formControls.get('PeopleEvacuated'), this.peopleEvacuated);
    FormStateService.initializeFormControlValue(formControls.get('RoofCovering'),  ols.getOptionForSessionAndCode('Lookup.OS.IM.RoofCovering', this.roofCoveringCode));
    FormStateService.initializeFormControlValue(formControls.get('BuildingType'),  ols.getOptionForSessionAndCode('Lookup.OS.IM.BuildingType', this.buildingTypeCode));
    FormStateService.initializeFormControlValue(formControls.get('ChimneyInvolved'), this.chimneyInvolved);
    FormStateService.initializeFormControlValue(formControls.get('SmokeSpread'),  ols.getOptionForSessionAndCode('Lookup.OS.IM.SmokeSpread', this.smokeSpreadCode));
    FormStateService.initializeFormControlValue(formControls.get('StandpipeSystemType'),  ols.getOptionForSessionAndCode('Lookup.OS.IM.StandpipeSystemType', this.standpipeSystemTypeCode));
    FormStateService.initializeFormControlValue(formControls.get('StandpipeSystemOperation'),  ols.getOptionForSessionAndCode('Lookup.OS.IM.StandpipeSystemOperation', this.standpipeSystemOperationCode));
    FormStateService.initializeFormControlValue(formControls.get('FireAlarmNotification'),  ols.getOptionForSessionAndCode('Lookup.OS.IM.FireAlarmNotification', this.fireAlarmNotificationCode));
    FormStateService.initializeFormControlValue(formControls.get('StandpipeSystemPresent'), this.standpipeSystemPresent);
  }
}
