import { FormStateService } from 'app/core/services/form-state.service';
import { LookupService } from 'app/core/services/lookup.service';
import { FormControl } from '@angular/forms';

export class HazMatSpecialUnitReport {

  public static readonly SESSION_NAME = 'Session.OS.IM.HazMatSpecialUnitReport';

  requestedById: string;
  requestedByName: string;
  unit: string;
  status: string;


  /**
   * Create a HazMatSpecialUnitReport Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    RequestedByID?: string,
    RequestedByName?: string,
    Unit?: string,
    Status?: string
  }) {
    const specialUnitReport: HazMatSpecialUnitReport = new HazMatSpecialUnitReport();
    specialUnitReport.requestedById = session.RequestedByID;
    specialUnitReport.requestedByName = session.RequestedByName;
    specialUnitReport.unit = session.Unit;
    specialUnitReport.status = session.Status;
    return specialUnitReport;
  }

  /**
    *
    * @param formControls
    * @param ols
    */
  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('RequestedByID'), this.requestedById);
    FormStateService.initializeFormControlValue(formControls.get('RequestedByName'), this.requestedByName);
    FormStateService.initializeFormControlValue(formControls.get('Unit'), this.unit);
    FormStateService.initializeFormControlValue(formControls.get('Status'), this.status);
  }
}
