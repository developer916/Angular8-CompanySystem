import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {APP_CONFIG} from '../../../app.config';
import {ActivatedRoute, Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {HazMatDataBrokerService} from '../../services/hazmat-data-broker.service';
//import {IncidentToolbarComponent} from '../../../incident/components/incident-toolbar/incident-toolbar.component';
import {FormStateService} from '../../../core/services/form-state.service';

@Component({
  selector: 'app-hazmat-report-toolbar',
  templateUrl: './hazmat-report-toolbar.component.html',
  styleUrls: ['./hazmat-report-toolbar.component.css']
})
export class HazMatReportToolbarComponent implements OnInit, OnDestroy {

  constructor(@Inject(APP_CONFIG) public config,
              public router: Router,
              public route: ActivatedRoute,
              @Inject('HazMatDataBrokerService') public db: HazMatDataBrokerService,
              public snackBar: MatSnackBar,
              public fss: FormStateService) {
  }

  /**
   * Back button returns to query results
   */
  back() {
    this.router.navigate(['/list/hazmat-reports']);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  print() {
    /**
     * Handle the formGroup submit - this just prints out JSON for the formGroup data right now.
     */
    this.db.saveHazmat().subscribe(
      response => {
        const id = this.route.snapshot.params.id;
        //window.open(this.config.INCIDENT_DATA_SERVICE_URL + id + '/' + 'pdf', '_blank');

      },
      error => {
        // TODO: Should probably handle this more intelligently - retry, rollback changes?
        this.snackBar.open('ERROR Printing HazMat Data: ' + JSON.stringify(error), 'Dismiss', {duration: 10000});
      });
  }

  save() {
    this.db.saveHazmat().subscribe(
      response => {
          this.snackBar.open('Hazmat Data Saved!', 'Dismiss', {duration: 2000});
      },
      error => {
         // TODO: Should probably handle this more intelligently - retry, rollback changes?
         this.snackBar.open('ERROR Saving HazMat Data: ' + JSON.stringify(error), 'Dismiss', {duration: 10000});
      });
  }

}
