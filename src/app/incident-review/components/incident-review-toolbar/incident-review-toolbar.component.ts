import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {APP_CONFIG} from '../../../app.config';
import {ActivatedRoute, Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {UserService} from '../../../core/services/user.service';
import {ReviewDataBrokerService} from '../../services/review-data-broker.service';
import {IncidentToolbarComponent} from '../../../incident/components/incident-toolbar/incident-toolbar.component';
import {FormStateService} from '../../../core/services/form-state.service';
import {Review} from '../../model/review';

@Component({
  selector: 'app-incident-review-toolbar',
  templateUrl: './incident-review-toolbar.component.html',
  styleUrls: ['./incident-review-toolbar.component.css']
})
export class IncidentReviewToolbarComponent extends IncidentToolbarComponent implements OnInit, OnDestroy {

  constructor(@Inject(APP_CONFIG) public config,
              public router: Router,
              public route: ActivatedRoute,
              @Inject('ReviewDataBrokerService') public db: ReviewDataBrokerService,
              public snackBar: MatSnackBar,
              private fss: FormStateService) {
    super( config, router, route, db, null, snackBar, null);
  }

  /**
   * Back button returns to query results
   */
  back() {
    this.router.navigate(['/list/review']);
  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  save() {
    const reviewFormControls = this.fss.getAllFormControlsForSession(Review.REVIEW_SESSION_NAME);
    const newReview: boolean = reviewFormControls.get('ReviewCheckbox').value;
    console.log( reviewFormControls )
    if ( newReview ) {
      this.db.saveIncident().subscribe(
        response => {
          this.snackBar.open('Incident Data Saved!', 'Dismiss', {duration: 2000});
        },
        error => {
          // TODO: Should probably handle this more intelligently - retry, rollback changes?
          this.snackBar.open('ERROR Saving Incident Data: ' + JSON.stringify(error), 'Dismiss', {duration: 10000});
        });
    }
  }

}
