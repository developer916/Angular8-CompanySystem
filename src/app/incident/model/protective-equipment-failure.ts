import { Entity } from 'ng2-hallelujah';
import { FormControl } from '@angular/forms';
import { LookupService } from '../../core/services/lookup.service';
import { FormStateService } from '../../core/services/form-state.service';
import { FireService } from './fire-service';
import { REST } from 'app/core/model/REST';

export class ProtectiveEquipmentFailure extends Entity {

  public static readonly SESSION_NAME = 'Session.OS.IM.ProtectiveEquipmentFailure';
  public static readonly REL_NAME = 'protectiveEquipmentFailure';

  @REST.ForeignEntityRef({isOwner: true})
  fireServiceCasualty: FireService;

  idHash: string;
  displayOrder: number;
  protectiveEquipmentCode: string;
  manufacturer: string;
  model: string;
  serialNumber: string;

  /**
   * Create a ProtectiveEquipmentFailure Object from the session state derived from the form state
   *
   * @param session
   */
  public static fromSessionState(session: {
    DisplayOrder: string,
    ProtectiveEquipment: string,
    Manufacturer: string,
    Model: string,
    SerialNumber: string
  }) {
    const protectiveEquipmentFailure: ProtectiveEquipmentFailure = new ProtectiveEquipmentFailure();
    protectiveEquipmentFailure.displayOrder = parseInt(session.DisplayOrder, 10);
    protectiveEquipmentFailure.protectiveEquipmentCode = session.ProtectiveEquipment;
    protectiveEquipmentFailure.manufacturer = session.Manufacturer;
    protectiveEquipmentFailure.model = session.Model;
    protectiveEquipmentFailure.serialNumber = session.SerialNumber;
    return protectiveEquipmentFailure;
  }

  /**
   * Populates the Incident Fire Service Casualty Protective Equipment data
   *
   * @param formControls
   * @param ols
   */
  public populateSession(formControls: Map<string, FormControl>, ols: LookupService) {
    FormStateService.initializeFormControlValue(formControls.get('ProtectiveEquipment'), ols.getOptionForSessionAndCode('Lookup.OS.IM.ProtectiveEquipment', this.protectiveEquipmentCode));
    FormStateService.initializeFormControlValue(formControls.get('Manufacturer'), this.manufacturer);
    FormStateService.initializeFormControlValue(formControls.get('Model'), this.model);
    FormStateService.initializeFormControlValue(formControls.get('SerialNumber'), this.serialNumber);
  }
}
