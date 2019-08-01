import { Entity } from 'ng2-hallelujah';
import { REST } from 'app/core/model/REST';
import { Incident } from './incident';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { InputFormHazMatUnitOperation } from './input-form-haz-mat-unit-operation';

export class InputFormHeader extends Entity {

  public static readonly REL_NAME = 'inputFormHeader';

  @REST.ForeignEntityRef({isOwner: true})
  incident: Incident;

  @REST.ForeignEntityRef({isOwner: false})
  inputFormHazMatUnitOperation: InputFormHazMatUnitOperation;

  idHash: string;
  headerType: string;
  status: string;
}
