import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { Subscription } from 'rxjs';
import { LookupService } from '../../../../core/services/lookup.service';
import { QueryService } from '../../../services/query.service';

@Component({
  selector: 'app-incident-query',
  templateUrl: './incident-query.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentQueryComponent implements OnInit, OnDestroy {

  router: Router;
  fb: FormBuilder;
  qs: QueryService;
  ols: LookupService;
  logger: NGXLogger;

  formGroup: FormGroup;
  private lookupSub: Subscription;

  /**
   * Constructor
   *
   * @param router Router
   * @param fb FormBuilder
   * @param qs QueryService
   * @param ols LookupService
   * @param logger NGXLogger
   */
  constructor(router: Router,
    fb: FormBuilder,
    qs: QueryService,
    ols: LookupService,
    logger: NGXLogger) {
      this.router = router;
      this.fb = fb;
      this.qs = qs;
      this.ols = ols;
      this.logger = logger;
    }

  /**
   * @see OnInit#ngOnInit
   */
  ngOnInit() {
    this.lookupSub = this.ols.loadLookupData().subscribe(() => {
      this.createFormGroup();
      this.populateFormGroup();
    });
  }

  /**
   * @see OnDestroy#ngOnDestroy
   */
  ngOnDestroy() {
    if (this.lookupSub != null) {
      this.lookupSub.unsubscribe();
    }
  }

  /**
   * Creates the Formgroup and if we had saved values in the form sets the saved values
   */
  createFormGroup() {
    this.formGroup = this.fb.group({
      battalion: '',
      beginDateTime: '',
      city: '',
      division: '',
      endDateTime: '',
      exposureNumber: '',
      firstName: '',
      incidentAddress: '',
      incidentNumber: '',
      incidentTypeCode: '',
      lastName: '',
      lastXDays: '',
      licensePlate: '',
      licenseNumber: '',
      location: '',
      personnelId: '',
      reviewStatus: '',
      rowCount: 25,
      shift: null,
      stationId: '',
      status: 'Open',
      unitIDs: '',
      useLoginID: '',
      year: (new Date()).getFullYear(),
      zipCode: '',
      chemicalName: '',
      chemicalId: '',
      unNumber: '',
      unitMaintenanceNumber: '',
      containerType: '',
      dotClass: ''
    });
  }

  private populateFormGroup() {
    const savedParams = this.qs.getQueryParams(this.getQuerySession());
    if (savedParams != null) {
      this.formGroup.setValue(savedParams)
    }
  }

  /**
   * Called when we submit the query
   */
  submit() {
    const rawValue = this.formGroup.getRawValue();
    rawValue.endDateTime.setHours(23);
    rawValue.endDateTime.setMinutes(59);
    rawValue.endDateTime.setSeconds(59);
    this.qs.setQueryParams(this.getQuerySession(), rawValue);
    this.router.navigate(new Array<string>(this.getRoute()))
  }

  /**
   * Returns the route to the query results page
   */
  getRoute(): string {
    return '/list/incidents';
  }

  /**
   * Returns the query session associated with this query
   */
  getQuerySession(): string {
    return 'Session.OS.Query.Incident';
  }
}
