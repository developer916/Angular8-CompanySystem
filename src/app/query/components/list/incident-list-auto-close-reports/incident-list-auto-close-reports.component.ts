import { DataSource } from '@angular/cdk/table';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { BehaviorSubject, merge as observableMerge, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../../../../core/services/data-service.service';
import { IncidentGraphQlquery } from '../../../graphql/incident-graph-qlquery';
import { IncidentQueryDataAutoCloseReports } from '../../../model/incident-query-data-auto-close-reports';
import { QueryService } from '../../../services/query.service';

@Component({
  selector: 'app-incident-list-auto-close-reports',
  templateUrl: './incident-list-auto-close-reports.component.html',
  styleUrls: ['./incident-list-auto-close-reports.component.css']
})
export class IncidentListAutoCloseReportsComponent implements OnInit, OnDestroy {

  displayedColumns = ['incidentNumber', 'timeDate', 'incidentAddress', 'incidentTypeCode', 'status', 'station', 'shift', 'autoClose'];
  incidentQueryDatabase: AutoCloseReportsDatabase | null;
  dataSource: AutoCloseReportsDataSource | null;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  /**
   *
   * @param {DataService} ds
   */
  constructor(private router: Router, private ds: DataService, private qs: QueryService) {
  }

  ngOnInit() {
    this.incidentQueryDatabase = new AutoCloseReportsDatabase(this.ds, this.qs);
    this.dataSource = new AutoCloseReportsDataSource(this.incidentQueryDatabase, this.paginator);
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
  showIncidentDetail(incidentNumber: String) {
    this.router.navigate(['/incident/' + incidentNumber]);
  }

}

/**
 * Class that retrieves incident data from the backend - currently via a GraphQL query
 */
export class AutoCloseReportsDatabase {

  /**
   * The session that this database shows results for
   */
  QUERY_SESSION = 'Session.OS.Query.AutoCloseReports';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  /**
   * Subscription to the GraphQL query for incident query data
   */
  private querySub: Subscription;

  /**
   * Observable object that holds incident query data
   * @type {BehaviorSubject<IncidentQueryData[]>}
   */
  dataChange: BehaviorSubject<IncidentQueryDataAutoCloseReports[]> = new BehaviorSubject<IncidentQueryDataAutoCloseReports[]>([]);

  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   */
  constructor(ds: DataService, qs: QueryService) {
    this.querySub = ds.graphQLQuery(IncidentGraphQlquery.queryIMIncidents, qs.getQueryParams(this.QUERY_SESSION)).subscribe(data => {
      const copiedData = this.data.slice();
      data['data']['incidents'].forEach(incident => {
        const listIncidentAutoCloseReports: IncidentQueryDataAutoCloseReports = new class implements IncidentQueryDataAutoCloseReports {
          autoClose: string;
          id: string;
          incidentAddress: string;
          incidentNumber: string;
          incidentTypeCode: string;
          shift: string;
          station: string;
          status: string;
          timeDate: string;
        };
        listIncidentAutoCloseReports.incidentNumber = incident.content.incidentNumber;
        listIncidentAutoCloseReports.timeDate = incident.content.response.timeDate;
        listIncidentAutoCloseReports.incidentAddress = incident.content.response.incidentAddress;
        listIncidentAutoCloseReports.incidentTypeCode = incident.content.response.incidentTypeCode;
        listIncidentAutoCloseReports.status = incident.content.response.status;
        listIncidentAutoCloseReports.station = incident.content.response.station;
        listIncidentAutoCloseReports.shift = incident.content.response.shift;
        listIncidentAutoCloseReports.autoClose = incident.content.response.autoClose;
        listIncidentAutoCloseReports.id = incident.content.idHash;
        copiedData.push(listIncidentAutoCloseReports);
      });
      this.dataChange.next(copiedData);
    });
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
export class AutoCloseReportsDataSource extends DataSource<any> {
  
  constructor(private _incidentDatabase: AutoCloseReportsDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IncidentQueryDataAutoCloseReports[]> {
    const displayDataChanges = [
      this._incidentDatabase.dataChange,
      this._paginator.page,
    ];

    // The merge here handles observables to update table data when either new query data comes in or when the page
    // size is changed.
    return observableMerge(...displayDataChanges).pipe(
      map(() => {
        const data = this._incidentDatabase.data.slice();

        // Grab the page's slice of data.
        const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
        return data.splice(startIndex, this._paginator.pageSize);
      })
    );
  }

  disconnect() {
  }
}
