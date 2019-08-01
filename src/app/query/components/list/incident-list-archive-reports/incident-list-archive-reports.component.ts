import { DataSource } from '@angular/cdk/table';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { BehaviorSubject, merge as observableMerge, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../../../../core/services/data-service.service';
import { IncidentGraphQlquery } from '../../../graphql/incident-graph-qlquery';
import { IncidentQueryData } from '../../../model/incident-query-data';
import { IncidentQueryDataArchiveReports } from '../../../model/incident-query-data-archive-reports';
import { QueryService } from '../../../services/query.service';

@Component({
  selector: 'app-incident-list-archive-reports',
  templateUrl: './incident-list-archive-reports.component.html',
  styleUrls: ['./incident-list-archive-reports.component.css']
})
export class IncidentListArchiveReportsComponent implements OnInit, OnDestroy {

  displayedColumns = ['incidentNumber', 'date', 'archiveReport', 'archivedBy', 'incidentType', 'address', 'city'];
  incidentQueryDatabase: ArchiveReportsDatabase | null;
  dataSource: ArchiveReportsDataSource | null;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  /**
   *
   * @param {DataService} ds
   */

  constructor(private router: Router, private ds: DataService, private qs: QueryService) {
    }

  /**
   * Called when the component is created
   */

  ngOnInit() {
    this.incidentQueryDatabase = new ArchiveReportsDatabase(this.ds, this.qs);
    this.dataSource = new ArchiveReportsDataSource(this.incidentQueryDatabase, this.paginator);
  }

  /**
   * Called when the component is destroyed
   */

  ngOnDestroy() {
    this.incidentQueryDatabase.unsubscibeQuery();
  }
}

/**
 * Class that retrieves incident data from the backend - currently via a GraphQL query
 */
export class ArchiveReportsDatabase {

  /**
   * The session that this database shows results for
   */
  QUERY_SESSION = 'Session.OS.Query.AgencyUnits';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  /**
   * Subscription to the GraphQL query for incident query data
   */
  private querySub: Subscription;

  /**
   * Observable object that holds incident query data
   * @type {BehaviorSubject<IncidentQueryData[]>}
   */
  dataChange: BehaviorSubject<IncidentQueryDataArchiveReports[]> = new BehaviorSubject<IncidentQueryDataArchiveReports[]>([]);


  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   */
  constructor(ds: DataService, qs: QueryService) {
    this.querySub = ds.graphQLQuery(IncidentGraphQlquery.queryIMIncidents, qs.getQueryParams(this.QUERY_SESSION)).subscribe(data => {
      const copiedData = this.data.slice();
      data['data']['incidents'].forEach(incident => {
        const listIncidentArchiveReports: IncidentQueryDataArchiveReports = new class implements IncidentQueryDataArchiveReports {
          address: String;
          archiveBy: String;
          archiveReport: String;
          city: String;
          date: Number;
          id: String;
          incidentNumber: Number;
          incidentType: String;
        };
        listIncidentArchiveReports.incidentNumber = incident.content.response.incidentNumber;
        listIncidentArchiveReports.address = incident.content.response.address;
        listIncidentArchiveReports.archiveBy = incident.content.response.archiveBy;
        listIncidentArchiveReports.archiveReport = incident.content.response.archiveReport;
        listIncidentArchiveReports.date = incident.content.response.date;
        listIncidentArchiveReports.city = incident.content.response.city;
        listIncidentArchiveReports.incidentType = incident.content.response.incidentType;
        listIncidentArchiveReports.id = incident.content.idHash;
        copiedData.push(listIncidentArchiveReports);
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
export class ArchiveReportsDataSource extends DataSource<any> {
  
  constructor(private _incidentDatabase: ArchiveReportsDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IncidentQueryDataArchiveReports[]> {
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




