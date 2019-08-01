import { FormControl } from '@angular/forms';
import { LookupService } from '../../core/services/lookup.service';
import { Entity } from 'ng2-hallelujah';
import { FormStateService } from '../../core/services/form-state.service';
import { Incident } from './incident';
import { REST } from 'app/core/model/REST';

export class BasicSummaryMutualAid extends Entity {

  public static readonly SESSION_NAME = 'Session.OS.IM.BasicSummary';
  public static readonly REL_NAME = 'mutualAid';


  @REST.ForeignEntityRef({isOwner: true})
  incident: Incident;

  idHash: string;
  displayOrder: number;
  incidentNumber: string;
  fdidCode: string;


  /**
   * Create a BasicSummaryMutualAid Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    MutualAidIncidentNumber?: string,
    MutualAidDepartment?: string
  }) {
    const basicSummaryMutualAid: BasicSummaryMutualAid = new BasicSummaryMutualAid();
    basicSummaryMutualAid.incidentNumber = session.MutualAidIncidentNumber;
    basicSummaryMutualAid.fdidCode = session.MutualAidDepartment;
    return basicSummaryMutualAid;
  }

  /**
   *
   * @param {Map<string, FormControl>} formControls
   * @param ols
   */
  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('MutualAidIncidentNumber' + this.displayOrder), this.incidentNumber);
    FormStateService.initializeFormControlValue(formControls.get('MutualAidDepartment' + this.displayOrder), ols.getOptionForSessionAndCode('Lookup.OS.IM.MutualAidDepartments', this.fdidCode));
  }
}
