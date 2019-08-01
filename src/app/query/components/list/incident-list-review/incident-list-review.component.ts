
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from 'app/core/services/data-service.service';
import { QueryResultPatchService } from 'app/query/services/query-result-patch.service';
import { QueryResultSortService } from 'app/query/services/query-result-sort.service';
import { QueryService } from 'app/query/services/query.service';
import { NGXLogger } from 'ngx-logger';
import { forkJoin, Subscription } from 'rxjs';
import { DataUtils } from '../../../../core/services/data-utils';
import { LookupService } from '../../../../core/services/lookup.service';
import { QueryReviewIncidents } from '../../../graphql/review-incidents.graphql';
import { IncidentQueryData } from '../../../model/incident-query-data';
import { IncidentDatabase, IncidentDataSource, IncidentListComponent } from '../incident-list/incident-list.component';

@Component({
  selector: 'app-incident-list-review',
  templateUrl: './incident-list-review.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentListReviewComponent extends IncidentListComponent implements OnInit, OnDestroy {

  displayedColumns = ['incidentNumber', 'status', 'reviewer', 'reviewAmendments', 'alarmDateTime', 'incidentAddress', 'incidentType', 'publicRelease'];
  alwaysShowPdf = true;
  private publicReleaseChanges = {};
  private statusChanges = {};
  private sub_submitPublicReleaseChanges: Subscription;


  constructor(router: Router,
    ds: DataService,
    qs: QueryService,
    qrss: QueryResultSortService,
    ls: LookupService,
    logger: NGXLogger,
    private qrps: QueryResultPatchService,
    public snackBar: MatSnackBar) {
    super(router, ds, qs, qrss, ls, logger);
  }

  /**
   * Called when the component is created
   */
  ngOnInit() {
    this.logger.debug('Executing query review incidents');
    this.incidentQueryDatabase = new IncidentReviewDatabase(this.ds, this.qs, this.ols, this.logger, 'Session.OS.Query.Review', QueryReviewIncidents.queryReviewIncidents, 'reviewIncidents');
    this.dataSource = new IncidentDataSource(this.incidentQueryDatabase, this.qrss);
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    if (this.sub_submitPublicReleaseChanges != null) {
      this.sub_submitPublicReleaseChanges.unsubscribe();
    }
  }

  showIncidentReview(incidentNumber: string) {
    this.router.navigate(['/incident-review/' + incidentNumber]);
  }

  public statusChanged(change: MatCheckboxChange) {
    this.logger.debug('Checkbox value changed for incident: ' + change.source.id + ', new value is: ' + change.checked);
    this.updateCheckboxData(change.source.id.substr(7), this.statusChanges, change.checked);
  }

  public publicReleaseChanged(change: MatCheckboxChange) {
    this.logger.debug('Public Release changed for incident: ' + change.source.id + ', new value is: ' + change.checked);
    this.updateCheckboxData(change.source.id.substr(7), this.publicReleaseChanges, change.checked);
  }

  public updateCheckboxData(id: string, field: {}, value: boolean) {
    if (field[id] != null) {
      // object only holds changes. If there is already a value in the object, it's being set back to it's original value so we longer need it in the object
      delete field[id];
    } else {
      field[id] = value;
    }
  }

  public save() {
    const observables = [];
    // this.logger.debug( this.publicReleaseChanges );
    this.logger.debug(this.statusChanges);
    // Public Release
    Object.keys(this.publicReleaseChanges).forEach(key => {
      observables.push(this.qrps.patchIncidentValue(key, [{ op: 'replace', path: 'publicReleaseFlag', value: this.publicReleaseChanges[key] }]));
    });
    Object.keys(this.statusChanges).forEach(key => {
      observables.push(this.qrps.patchIncidentValue(key, [{ op: 'replace', path: 'response.status', value: this.getStatus(this.statusChanges[key]) }]));
    });
    // clear out the old values
    this.publicReleaseChanges = {};
    this.statusChanges = {};
    this.sub_submitPublicReleaseChanges = forkJoin(observables).subscribe(response => {
      this.snackBar.open('Data Updated!', 'Dismiss', { duration: 2000 });
    })
  }

  getStatus(closed: boolean): string {
    if (closed) {
      return 'Closed';
    } else {
      return 'Open';
    }
  }
}

/**
 * Class that retrieves incident data from the backend - currently via a GraphQL query
 */
export class IncidentReviewDatabase extends IncidentDatabase {

  populateResults(incident: any, queryResultsData: any[], ols: LookupService) {
    const resultList: IncidentQueryData = new IncidentQueryData();
    resultList.incidentNumber = this.formatIncidentNumber(incident);
    resultList.alarmDateTime = DataUtils.formatDateTimeFoS(incident.content.response.alarmDateTime);
    resultList.incidentAddress = incident.content.response.streetAddress == null ? '' : incident.content.response.streetAddress.addressText;
    resultList.id = incident.content.idHash;
    resultList.publicRelease = incident.content.publicReleaseFlag;
    resultList.reviewer = this.formatReviewerName(incident);
    resultList.reviewAmendments = this.formatReviewAmmendments(incident);
    resultList.incidentType = incident.content.response.incidentTypeCode == null ? '' : incident.content.response.incidentTypeCode + ' - ' + ols.getDescriptionForCodeWithDefault('Lookup.OS.IM.IncidentType', incident.content.response.incidentTypeCode, 'No Incident');
    resultList.status = incident.content.response.status;
    queryResultsData.push(resultList);
  }

  private formatReviewAmmendments(incident: any) {
    return 'Last Review: ' + (incident.content.reviewerDate == null ? 'In Progress' : DataUtils.formatDateFoS(incident.content.reviewerDate))
      + '<br/>'
      + 'Last Closed: ' + ( incident.content.closedDateTime == null ? 'N/A' : DataUtils.formatDateTimeFoS( incident.content.closedDateTime ) );
  }

  formatReviewerName(incident): string {
    let reviewerName: string;
    reviewerName = '';
    if (incident.content.reviewerPersonnelID != null) {
      if (incident.content.reviewerPersonnelID === 'None') {
        reviewerName = 'None - Nobody'
      } else {
        reviewerName = incident.content.reviewerPersonnelID + ' - ' + incident.content.reviewerFirstName + ' ' + incident.content.reviewerLastName + ' ' + incident.content.reviewerRank;
      }
    }
    return reviewerName;
  }
}
