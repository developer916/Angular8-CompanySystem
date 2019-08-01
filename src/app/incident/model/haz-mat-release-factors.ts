import { FormStateService } from 'app/core/services/form-state.service';
import { LookupService } from 'app/core/services/lookup.service';
import { FormControl } from '@angular/forms';

export class HazMatReleaseFactors {
 
  releaseFromBelowGrade: boolean;
  releaseFromInsideStructure: boolean;
  releaseFromStory: number;
  releaseFromOutsideStructure: boolean;
  //demographics  
  estimatedPeopleEvacuatedCount: number;
  estimatedBuildingEvacuatedCount: number;
  //estimated units? missing?
  populationDensityCode: string;
  areaAffectedMeasurement: number;
  areaAffectedCode: string;
  areaEvacuatedMeasurement: number;
  areaEvacuatedCode: string;

  hazMatActionTaken1Code: string;
  hazMatActionTaken2Code: string;
  hazMatActionTaken3Code: string;

  eventWhichOccurredFirstCode: string;
  causeOfReleaseCode: string;

  factorsContributingRelease1Code: string;
  factorsContributingRelease2Code: string;
  factorsContributingRelease3Code: string;

  factorsAffectingMitigation1Code: string;
  factorsAffectingMitigation2Code: string;
  factorsAffectingMitigation3Code: string;

  hazMatDispositionCode: string;

  public static fromSessionState(session: {
    BelowGrade?: boolean,
    Structure?: boolean,
    Story?: number,
    Outside?: boolean,
    PeopleEvacuated?: number,
    BuildingsEvacuated?: number,
    PopulationDensity?: string,
    AreaAffectedMeasurement?: number,
    AreaAffectedUnits?: string,
    AreaEvacuatedMeasurement?: number,
    AreaEvacuatedUnits?: string,
    HazMatAction1?: string,
    HazMatAction2?: string,
    HazMatAction3?: string,
    FireExplosion?: string,
    CauseOfRelease?: string,
    FactorsContributing1?: string,
    FactorsContributing2?: string,
    FactorsContributing3?: string,
    MitigatingFactors1?: string,
    MitigatingFactors2?: string,
    MitigatingFactors3?: string,
    HazMatDisposition?: string
  }) {
    const releaseFactors: HazMatReleaseFactors = new HazMatReleaseFactors();
    releaseFactors.releaseFromBelowGrade = session.BelowGrade;
    releaseFactors.releaseFromInsideStructure = session.BelowGrade;
    releaseFactors.releaseFromStory = session.Story;
    releaseFactors.releaseFromOutsideStructure = session.Outside;
    releaseFactors.estimatedPeopleEvacuatedCount = session.PeopleEvacuated;
    releaseFactors.estimatedBuildingEvacuatedCount = session.BuildingsEvacuated;
    releaseFactors.populationDensityCode = session.PopulationDensity;
    releaseFactors.areaAffectedMeasurement = session.AreaAffectedMeasurement;
    releaseFactors.areaAffectedCode = session.AreaAffectedUnits;
    releaseFactors.areaEvacuatedMeasurement = session.AreaEvacuatedMeasurement;
    releaseFactors.areaEvacuatedCode = session.AreaEvacuatedUnits;
    releaseFactors.hazMatActionTaken1Code = session.HazMatAction1;
    releaseFactors.hazMatActionTaken2Code = session.HazMatAction2;
    releaseFactors.hazMatActionTaken3Code = session.HazMatAction3;
    releaseFactors.eventWhichOccurredFirstCode = session.FireExplosion;
    releaseFactors.causeOfReleaseCode = session.CauseOfRelease;
    releaseFactors.factorsContributingRelease1Code = session.FactorsContributing1;
    releaseFactors.factorsContributingRelease2Code = session.FactorsContributing2;
    releaseFactors.factorsContributingRelease3Code = session.FactorsContributing3;
  
    releaseFactors.factorsAffectingMitigation1Code = session.MitigatingFactors1;
    releaseFactors.factorsAffectingMitigation2Code = session.MitigatingFactors2;
    releaseFactors.factorsAffectingMitigation3Code = session.MitigatingFactors3;

    releaseFactors.hazMatDispositionCode = session.HazMatDisposition;
    
    return releaseFactors;
  }

  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('Story'), this.releaseFromStory);
    FormStateService.initializeFormControlValue(formControls.get('Outside'), this.releaseFromOutsideStructure);
    FormStateService.initializeFormControlValue(formControls.get('BelowGrade'), this.releaseFromBelowGrade);
    FormStateService.initializeFormControlValue(formControls.get('Structure'), this.releaseFromInsideStructure);
   
    FormStateService.initializeFormControlValue(formControls.get('PeopleEvacuated'), this.estimatedPeopleEvacuatedCount);
    FormStateService.initializeFormControlValue(formControls.get('BuildingsEvacuated'), this.estimatedBuildingEvacuatedCount);
    FormStateService.initializeFormControlValue(formControls.get('PopulationDensity'), ols.getOptionForSessionAndCode('Lookup.OS.IM.PopulationDensity', this.populationDensityCode));
    
    FormStateService.initializeFormControlValue(formControls.get('AreaAffectedMeasurement'), this.areaAffectedMeasurement);
    FormStateService.initializeFormControlValue(formControls.get('AreaAffectedUnits'), ols.getOptionForSessionAndCode('Lookup.OS.IM.AreaAffected', this.areaAffectedCode));
    FormStateService.initializeFormControlValue(formControls.get('AreaEvacuatedMeasurement'), this.areaEvacuatedMeasurement);
    FormStateService.initializeFormControlValue(formControls.get('AreaEvacuatedUnits'), ols.getOptionForSessionAndCode('Lookup.OS.IM.AreaEvacuated', this.areaEvacuatedCode));
    
    FormStateService.initializeFormControlValue(formControls.get('HazMatAction1'), ols.getOptionForSessionAndCode('Lookup.OS.IM.HazMatActionsTaken', this.hazMatActionTaken1Code));
    FormStateService.initializeFormControlValue(formControls.get('HazMatAction2'), ols.getOptionForSessionAndCode('Lookup.OS.IM.HazMatActionsTaken', this.hazMatActionTaken2Code));
    FormStateService.initializeFormControlValue(formControls.get('HazMatAction3'), ols.getOptionForSessionAndCode('Lookup.OS.IM.HazMatActionsTaken', this.hazMatActionTaken3Code));
    
    FormStateService.initializeFormControlValue(formControls.get('FireExplosion'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ReleaseIgnitionSequence', this.eventWhichOccurredFirstCode));
    FormStateService.initializeFormControlValue(formControls.get('CauseOfRelease'), ols.getOptionForSessionAndCode('Lookup.OS.IM.CauseOfRelease', this.causeOfReleaseCode));
    
    FormStateService.initializeFormControlValue(formControls.get('FactorsContributing1'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FactorsContributingRelease', this.factorsContributingRelease1Code));
    FormStateService.initializeFormControlValue(formControls.get('FactorsContributing2'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FactorsContributingRelease', this.factorsContributingRelease2Code));
    FormStateService.initializeFormControlValue(formControls.get('FactorsContributing3'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FactorsContributingRelease', this.factorsContributingRelease3Code));
    FormStateService.initializeFormControlValue(formControls.get('MitigatingFactors1'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FactorsAffectingMitigation', this.factorsAffectingMitigation1Code));
    FormStateService.initializeFormControlValue(formControls.get('MitigatingFactors2'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FactorsAffectingMitigation', this.factorsAffectingMitigation2Code));
    FormStateService.initializeFormControlValue(formControls.get('MitigatingFactors3'), ols.getOptionForSessionAndCode('Lookup.OS.IM.FactorsAffectingMitigation', this.factorsAffectingMitigation3Code));
  
    FormStateService.initializeFormControlValue(formControls.get('HazMatDisposition'), ols.getOptionForSessionAndCode('Lookup.OS.IM.HazMatDisposition', this.hazMatDispositionCode));
   
  }
}
