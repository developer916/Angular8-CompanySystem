import { Component, OnInit, OnDestroy } from '@angular/core';
import {IncidentTab} from '../../../incident/components/incident-tab/incident-tab';
import {UIBuildService} from '../../../core/services/ui-build.service';
import { FormStateService } from 'app/core/services/form-state.service';
import { TextEditorService } from 'app/core/services/text-editor.service';
import { Subscription } from 'rxjs';
import {DataUtils} from "../../../core/services/data-utils";
import {UserService} from "../../../core/services/user.service";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent extends IncidentTab implements OnInit, OnDestroy {

  private reviewCheckboxSub: Subscription;
  private editorCreateSub: Subscription;
  private idSub: Subscription;

  /**
   * Constructor
   *
   * @param ubs UIBuildService
   * @param fss FormStateService
   * @param tes TextEditorService
   * @param us
   */
  constructor(ubs: UIBuildService,
              private fss: FormStateService,
              private tes: TextEditorService,
              private us: UserService) {
    super(ubs, 'Session.OS.RV.Review');
  }

  ngOnInit(): void {
    super.ngOnInit();
    const reviewControls = this.fss.getAllFormControlsForSession('Session.OS.RV.Review');
    const checkboxControl = reviewControls.get('ReviewCheckbox');

    // Setup subcription for when the editor is created so that we can get the initial state correct
    this.editorCreateSub = this.tes.managedEditors.subscribe(editors => {
      const editor = editors.get('Session.OS.RV.Review.ReviewText');
      if (editor != null) {
        this.enableDisableEditor(editor, checkboxControl.value)
      }
    })

    // Setup subscription for when the review checkbox is clicked so that we can update as user click
    this.reviewCheckboxSub = checkboxControl.valueChanges.subscribe(value => {
      const editor = this.tes.getManagedEditor('Session.OS.RV.Review.ReviewText');
      this.enableDisableEditor(editor, value);
    });

    const idControl = reviewControls.get('ReviewerPersonnelID');
    this.idSub = idControl.valueChanges.subscribe(value => {
      if (idControl.value && idControl.value.length > 0) {
        if (idControl.value === this.us.user.userId) {
          reviewControls.get('ReviewerFirstName').setValue(this.us.user.firstName);
          reviewControls.get('ReviewerFirstName').markAsDirty();
          reviewControls.get('ReviewerMiddleInitial').setValue(this.us.user.middleName);
          reviewControls.get('ReviewerMiddleInitial').markAsDirty();
          reviewControls.get('ReviewerLastName').setValue(this.us.user.lastName);
          reviewControls.get('ReviewerLastName').markAsDirty();
          reviewControls.get('ReviewerRank').setValue(this.us.user.rank);
          reviewControls.get('ReviewerRank').markAsDirty();
          reviewControls.get('ReviewerDate').setValue(DataUtils.formatDate(new Date()));
          reviewControls.get('ReviewerDate').markAsDirty();
        } else {
          idControl.setErrors({invalidUserId: true});
        }
      }
    });
  }

  private enableDisableEditor(editor: any, enable: boolean) {
    if (enable) {
      editor.edit.on();
    } else {
      editor.edit.off();
    }
  }

  ngOnDestroy(): void {
    if (this.editorCreateSub != null) {
      this.editorCreateSub.unsubscribe();
    }
    if (this.reviewCheckboxSub != null) {
      this.reviewCheckboxSub.unsubscribe();
    }
    if (this.idSub != null) {
      this.idSub.unsubscribe();
    }
  }
}
