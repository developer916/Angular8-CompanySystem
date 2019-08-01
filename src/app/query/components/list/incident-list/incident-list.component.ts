import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { QueryResultSortService } from 'app/query/services/query-result-sort.service';
import { NGXLogger } from 'ngx-logger';
import { BehaviorSubject, Subscription } from 'rxjs';
import { DataService } from '../../../../core/services/data-service.service';
import { DataUtils } from '../../../../core/services/data-utils';
import { LookupService } from '../../../../core/services/lookup.service';
import { IncidentQueryData } from '../../..//model/incident-query-data';
import { IncidentGraphQlquery } from '../../../graphql/incident-graph-qlquery';
import { QueryResultFormatterService } from '../../../services/query-result-formatter.service';
import { QueryService } from '../../../services/query.service';


@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentListComponent implements OnInit, OnDestroy {

  displayedColumns = ['incidentNumber', 'status', 'alarmDateTime', 'incidentType', 'cadType', 'incidentAddress', 'city', 'response'];
  incidentQueryDatabase: IncidentDatabase | null;
  dataSource: IncidentDataSource | null;
  alwaysShowPdf = false;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  router: Router | null;
  ds: DataService | null;
  qs: QueryService | null;
  qrss: QueryResultSortService | null;
  ols: LookupService | null;
  logger: NGXLogger | null;


  /**
   *
   * @param router
   * @param ds
   * @param qs
   * @param ols
   * @param qrfs
   */
  constructor(router: Router,
              ds: DataService,
              qs: QueryService,
              qrss: QueryResultSortService,
              ols: LookupService,
              logger: NGXLogger) {
    this.router = router;
    this.ds = ds;
    this.qs = qs;
    this.qrss = qrss;
    this.ols = ols;
    this.logger = logger;
  }

  /**
   * Called when the component is created
   */
  ngOnInit() {
    this.incidentQueryDatabase = new IncidentDatabase(this.ds, this.qs, this.ols, this.logger, 'Session.OS.Query.Incident', IncidentGraphQlquery.queryIMIncidents, 'incidents');
    this.dataSource = new IncidentDataSource(this.incidentQueryDatabase, this.qrss);
    this.dataSource.sort = this.sort;
  }

  /**
   * Called when the component is destroyed
   */
  ngOnDestroy() {
    this.incidentQueryDatabase.unsubscibeQuery();
  }

  /**
   * Navigate to the Incident Detail when the incident number is clicked for an incident in the incident list
   *
   * @param {String} incidentNumber
   */
  showIncidentDetail(incidentNumber: string) {
    if ( this.alwaysShowPdf ) {
      this.router.navigateByUrl( '/incident/' + incidentNumber + '?view=pdf' );
    } else {
      this.router.navigate(['/incident/' + incidentNumber]);
    }
  }

  /**
   * Given a incident row and it's response determine the CSS class to apply. This makes sure all rows in the response are
   * colored correctly
   *
   * @param row
   */
  public getRowClass(row: any) {
    return QueryResultFormatterService.getRowClass(row);
  }

  /**
   *
   */
  public numResults() {
    return this.incidentQueryDatabase.data.length;
  }
}

/**
 * Class that retrieves incident data from the backend - currently via a GraphQL query
 */
export class IncidentDatabase {

  /**
   * Subscription to the GraphQL query for incident query data
   */
  private readonly querySub: Subscription;

  /**
   * Observable object that holds incident query data
   * @type {BehaviorSubject<IncidentQueryData[]>}
   */
  dataChange: BehaviorSubject<IncidentQueryData[]> = new BehaviorSubject<IncidentQueryData[]>([]);

  /**
   * Whether or not the query is still loading - we use this to knoww when to show the spinner
   */
  private _queryLoading = true;

  /**
   * NGXLogger implementation
   */
  logger: NGXLogger;

  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   * @param {QueryService} qs
   * @param {LookupService} ols
   * @param {NGXLogger} logger
   * @param {String} querySession
   * @param {any} gql
   * @param {String} queryResultsLabel
   */
  constructor(ds: DataService, qs: QueryService, ols: LookupService, logger: NGXLogger, querySession:string, gql: any, queryResultsLabel: string) {
    this.logger = logger;
    this.querySub = ds.graphQLQuery(gql, qs.getQueryParams(querySession)).subscribe( data => {
      this._queryLoading = false;
      const queryResultsData = [];
      data['data'][queryResultsLabel].forEach(incident => {
        this.populateResults(incident, queryResultsData, ols);
      });
      this.dataChange.next(queryResultsData);
    });
  }

  populateResults( incident: any, queryResultsData: any[], ols: LookupService ) {
    const listIncident: IncidentQueryData = new IncidentQueryData();
    listIncident.incidentNumber = this.formatIncidentNumber( incident );
    listIncident.status = incident.content.response.status;
    listIncident.alarmDateTime = DataUtils.formatDateTimeFoS(incident.content.response.alarmDateTime);
    listIncident.incidentType = this.formatIncidentType( incident, ols );
    listIncident.cadType = incident.content.cadSummary != null ? incident.content.cadSummary.cadIncidentType : '';
    listIncident.incidentAddress = incident.content.response.streetAddress == null ? '' : incident.content.response.streetAddress.addressText;
    listIncident.city = incident.content.response.city;
    const responseType = QueryResultFormatterService.getResponseType(incident.content);
    listIncident.response = QueryResultFormatterService.formatResponse(QueryResultFormatterService.getResponsibleFullReport(incident.content), responseType);
    listIncident.id = incident.content.idHash;
    queryResultsData.push(listIncident);
  }

  protected formatIncidentNumber(incident: any): string {
    return incident.content.incidentNumber + (incident.content.response.exposureNumber == null ? '' : '-' + incident.content.response.exposureNumber);
  }

  protected formatIncidentType( incident: any, ols: LookupService  ): string {
    return incident.content.response.incidentTypeCode == null ? '' : incident.content.response.incidentTypeCode + ' - ' + ols.getDescriptionForCode('Lookup.OS.IM.IncidentType', incident.content.response.incidentTypeCode);
  }

  /**
   * Getter for the data in the Incident Query Data Observable
   *
   * @returns {IncidentData[]}
   */
  get data() {
    return this.dataChange.value;
  }

  /**
   * Getter for queryLoading Flag. Returns TRUE if the query results are still loading
   */
  get queryLoading(): boolean {
    return this._queryLoading;
  }

  /**
   * Unsubscribes from the IncidentQueryData subscription. It's made protected so that the component class can
   * call this method when the component is destroyed
   */
  unsubscibeQuery() {
    if (this.querySub != null) {
      this.querySub.unsubscribe();
    }
  }
}

/**
 * Data source to provide what data should be rendered in the table.
 */
export class IncidentDataSource extends MatTableDataSource<IncidentQueryData> {

  sortSub;
  incidentDatabase: IncidentDatabase;
  qrss: QueryResultSortService;

  constructor(incidentDatabase: IncidentDatabase, qrss: QueryResultSortService) {
    super();
    this.incidentDatabase = incidentDatabase;
    this.qrss = qrss;
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): BehaviorSubject<IncidentQueryData[]> {
      this.sortSub = this.sort.sortChange.subscribe(() => {
        this.incidentDatabase.dataChange.next(this.getSortedData());
      });
      return this.incidentDatabase.dataChange;
  }

  disconnect(): void {
    if (this.sortSub != null) {
      this.sortSub.unsubscribe();
    }
  }

  getSortedData() {
    if (this.qrss != null) {
      return this.qrss.sortData(this.incidentDatabase.dataChange.value.slice(), this.sort);
    } else {
      return this.incidentDatabase.dataChange.value.slice();
    }
  }
}
