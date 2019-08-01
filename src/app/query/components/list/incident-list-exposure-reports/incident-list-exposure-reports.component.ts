import { DataSource } from '@angular/cdk/table';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { BehaviorSubject, merge as observableMerge, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../../../../core/services/data-service.service';
import { IncidentGraphQlquery } from '../../../graphql/incident-graph-qlquery';
import { IncidentQueryDataExposureReports } from '../../../model/incident-query-data-exposure-reports';
import { QueryService } from '../../../services/query.service';


@Component({
  selector: 'app-incident-list-exposure-reports',
  templateUrl: './incident-list-exposure-reports.component.html',
  styleUrls: ['./incident-list-exposure-reports.component.css']
})
export class IncidentListExposureReportsComponent implements OnInit, OnDestroy {

  displayedColumns = ['incidentNumber', 'status', 'date', 'incidentType', 'address', 'city', 'delete'];
  incidentQueryDatabase: ExposureReportsDatabase | null;
  dataSource: ExposureReportsDataSource | null;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  /**
   *
   * @param {DataService} ds
   */
  constructor(private router: Router, private ds: DataService, private qs: QueryService) {
  }

  ngOnInit() {
    this.incidentQueryDatabase = new ExposureReportsDatabase(this.ds, this.qs);
    this.dataSource = new ExposureReportsDataSource(this.incidentQueryDatabase, this.paginator);
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
export class ExposureReportsDatabase {

  /**
   * The session that this database shows results for
   */
  QUERY_SESSION = 'Session.OS.Query.ExposureReports';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  /**
   * Subscription to the GraphQL query for incident query data
   */
  private querySub: Subscription;

  /**
   * Observable object that holds incident query data
   * @type {BehaviorSubject<IncidentQueryData[]>}
   */
  dataChange: BehaviorSubject<IncidentQueryDataExposureReports[]> = new BehaviorSubject<IncidentQueryDataExposureReports[]>([]);

  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   */
  constructor(ds: DataService, qs: QueryService) {
    this.querySub = ds.graphQLQuery(IncidentGraphQlquery.queryIMIncidents, qs.getQueryParams(this.QUERY_SESSION)).subscribe(data => {
      const copiedData = this.data.slice();
      data['data']['incidents'].forEach(incident => {
        const listIncidentExposureReports: IncidentQueryDataExposureReports = new class implements IncidentQueryDataExposureReports {
          address: string;
          city: string;
          date: number;
          delete: boolean;
          id: string;
          incidentNumber: number;
          incidentType: string;
          status: string;
        };
        listIncidentExposureReports.incidentNumber = incident.content.incidentNumber;
        listIncidentExposureReports.address = incident.content.response.address;
        listIncidentExposureReports.city = incident.content.response.city;
        listIncidentExposureReports.id = incident.content.idHash;
        listIncidentExposureReports.date = incident.content.response.date;
        listIncidentExposureReports.delete = incident.content.response.delete;
        listIncidentExposureReports.status = incident.content.response.status;
        listIncidentExposureReports.incidentType = incident.content.response.incidentType;
        copiedData.push(listIncidentExposureReports);
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
export class ExposureReportsDataSource extends DataSource<any> {
  constructor(private _incidentDatabase: ExposureReportsDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IncidentQueryDataExposureReports[]> {
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
