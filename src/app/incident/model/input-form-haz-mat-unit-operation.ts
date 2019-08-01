import { Entity } from 'ng2-hallelujah';
import { FireEquipmentDetails } from './fire-equipment-details';
import { FireIgnitionDetails } from './fire-ignition-details';
import { Structure } from './structure';
import { REST } from 'app/core/model/REST';
import { Incident } from './incident';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { InputFormHeader } from './input-form-header';
import { FormControl } from '@angular/forms';
import { LookupService } from 'app/core/services/lookup.service';
import { FormStateService } from 'app/core/services/form-state.service';

export class InputFormHazMatUnitOperation extends Entity {

  public static readonly REL_NAME = 'inputFormHazMatUnitOperation';

  @REST.ForeignEntityRef({ isOwner: true })
  inputFormHeader: InputFormHeader;

  idHash: string;
  unitId: string;
  requestedById: string;
  requestedBy: string;
}
