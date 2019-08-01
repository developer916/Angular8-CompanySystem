import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { StandardCall } from '../../model/standard-call';
import { Subscription } from 'rxjs';
import { StandardCallService } from '../../services/standard-call.service';
import { UserService } from 'app/core/services/user.service';
import { APP_CONFIG } from 'app/app.config';

@Component({
  selector: 'app-toolbar',
  templateUrl: './incident-toolbar.component.html',
  styleUrls: ['./incident-toolbar.component.css']
})
export class IncidentToolbarComponent implements OnInit, OnDestroy {

  @Input() formGroup: FormGroup;

  private standardCalls: StandardCall[] = [];

  private scSub: Subscription = null;


  constructor(@Inject(APP_CONFIG) public config,
              public router: Router,
              public route: ActivatedRoute,
              @Inject('DataBrokerService') public db,
              public scs: StandardCallService,
              public snackBar: MatSnackBar,
              public us: UserService) {
  }

  ngOnInit(): void {
    this.scSub = this.scs.standardCalls.subscribe(value => {
      this.standardCalls = value;
    });
  }

  ngOnDestroy(): void {
    this.scSub.unsubscribe();
  }

  /**
   * Should the closed checkbox be disabled? Checkbox is disabled until required fields for the active incident have valid values
   */
  isClosedDisabled() {
    return this.formGroup.invalid;
  }

  /**
   * Closes the incident. This will trigger a save in order to sync the active incident with the backend API
   */
  closeIncident(event: MatCheckboxChange) {
    if (event.checked) {
      this.db.closeIncident(this.us.user).subscribe(
        response => {
          this.snackBar.open('Incident Successfully Closed!', 'Dismiss', {duration: 2000});
        },
        error => {
          // TODO: Should probably handle this more intelligently - retry, rollback changes?
          this.snackBar.open('ERROR Closing Incident: ' + JSON.stringify(error), 'Dismiss', {duration: 10000});
        });
    }
  }

  /**
   * Returns TRUE if the active incident is closed
   */
  isIncidentClosed() {
    return this.db.isIncidentClosed();
  }

  /**
   * Returns the label we show in the toolbar for the current active incident
   */
  getActiveIncidentLabel() {
    const year = new Date(this.db.activeIncidentEntity.response.alarmDateTime).getFullYear();
    const incident = this.db.activeIncidentEntity.displayIncidentNumber;
    const exposure = this.db.activeIncidentEntity.response.exposureNumber
    return year + '-' + incident + '-' + exposure;
  }

  /**
   * Returns the list of Standard Calls
   */
  getStandardCalls() {
    return this.standardCalls;
  }

  /**
   * Called when the User selects a given Standard Call
   */
  callValueChanged(callValue: string) {
    this.scs.handleStandardCallChange(callValue);
  }

  /**
   * Back button returns to query results
   */
  back() {
    this.router.navigate(['/list/incidents']);
  }

  /**
   * Home button returns to query form
   */
  home() {
    this.router.navigate(['/query/incidents']);
  }

  /**
   * 'Prints' the current state of the form - by 'print' we mean save and load incident PDF in new tab 
   */
  print() {
    /**
     * Handle the formGroup submit - this just prints out JSON for the formGroup data right now.
     */
    this.db.saveIncident().subscribe(
      response => {
        const id = this.route.snapshot.params.id;
        window.open(this.config.INCIDENT_DATA_SERVICE_URL + id + '/' + 'pdf', '_blank');

      },
      error => {
        // TODO: Should probably handle this more intelligently - retry, rollback changes?
        this.snackBar.open('ERROR Printing Incident Data: ' + JSON.stringify(error), 'Dismiss', {duration: 10000});
      });
  }

  /**
   * Saves the current state of the form - only saving valid form control values
   */
  save() {
    /**
     * Handle the formGroup submit - this just prints out JSON for the formGroup data right now.
     */
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
