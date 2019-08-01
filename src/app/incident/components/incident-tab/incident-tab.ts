import { OnInit } from '@angular/core';
import { UIBuildService } from '../../../core/services/ui-build.service';
import { FormElementContext } from '../../../core/model/form-element-context';

export abstract class IncidentTab implements OnInit {

  ubs: UIBuildService;

  /**
   * The FormElementContext that is the basic for UI getting built in this component
   */
  formElementContext: FormElementContext;


  /**
   * Constructor
   *
   * @param ubs UIBuildService
   * @param session The session context that this component operates within
   */
  protected constructor(ubs: UIBuildService,
              readonly session: string) {
    this.ubs = ubs;
  }

  /**
   * We retrieve the workflow UI definition when the component is initialized
   *
   * TODO: We might want to eventually move this out of here (maybe not)
   */
  ngOnInit() {
    this.formElementContext = this.ubs.getUIDefinition(this.session);
  }
}
