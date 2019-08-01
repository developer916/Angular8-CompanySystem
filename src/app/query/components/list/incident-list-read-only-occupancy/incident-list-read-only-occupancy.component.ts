import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DataService } from '../../../../core/services/data-service.service';
import { QueryService } from '../../../services/query.service';
import { BehaviorSubject, Observable, Subscription, merge as observableMerge } from 'rxjs';
import { IncidentQueryDataReadOnlyOccupancy } from '../../../model/incident-query-data-read-only-occupancy';
import { IncidentGraphQlquery } from '../../../graphql/incident-graph-qlquery';
import { DataSource } from '@angular/cdk/table';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-incident-list-read-only-occupancy',
  templateUrl: './incident-list-read-only-occupancy.component.html',
  styleUrls: ['./incident-list-read-only-occupancy.component.css']
})
export class IncidentListReadOnlyOccupancyComponent implements OnInit, OnDestroy {

  displayedColumns = ['print', 'occupancy', 'record', 'summary', 'address', 'city', 'zone', 'stage', 'status'];
  incidentQueryDatabase: ReadOnlyOccupancyDatabase | null;
  dataSource: ReadOnlyOccupancyDataSource | null;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  /**
   *
   * @param {DataService} ds
   */
  constructor(private router: Router, private ds: DataService, private qs: QueryService) { }

  ngOnInit() {
    this.incidentQueryDatabase = new ReadOnlyOccupancyDatabase(this.ds, this.qs);
    this.dataSource = new ReadOnlyOccupancyDataSource(this.incidentQueryDatabase, this.paginator)
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
export class ReadOnlyOccupancyDatabase {

  /**
   * The session that this database shows results for
   */
  QUERY_SESSION = 'Session.OS.Query.ReadOnlyOccupancy';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  /**
   * Subscription to the GraphQL query for incident query data
   */
  private querySub: Subscription;

  /**
   * Observable object that holds incident query data
   * @type {BehaviorSubject<IncidentQueryData[]>}
   */
  dataChange: BehaviorSubject<IncidentQueryDataReadOnlyOccupancy[]> = new BehaviorSubject<IncidentQueryDataReadOnlyOccupancy[]>([]);

  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   */
  constructor(ds: DataService, qs: QueryService) {
    this.querySub = ds.graphQLQuery(IncidentGraphQlquery.queryIMIncidents, qs.getQueryParams(this.QUERY_SESSION)).subscribe(data => {
      const copiedData = this.data.slice();
      data['data']['incidents'].forEach(incident => {
        const listIncidentReadOnlyOccupancy: IncidentQueryDataReadOnlyOccupancy = new class implements IncidentQueryDataReadOnlyOccupancy {
          address: String;
          city: String;
          id: String;
          occupancy: String;
          print: String;
          record: String;
          stage: String;
          status: String;
          summary: String;
          zone: String;
        };
        listIncidentReadOnlyOccupancy.address = incident.content.response.address;
        listIncidentReadOnlyOccupancy.city = incident.content.response.city;
        listIncidentReadOnlyOccupancy.occupancy = incident.content.response.occupancy;
        listIncidentReadOnlyOccupancy.print = incident.content.response.print;
        listIncidentReadOnlyOccupancy.record = incident.content.response.record;
        listIncidentReadOnlyOccupancy.stage = incident.content.response.stage;
        listIncidentReadOnlyOccupancy.status = incident.content.response.status;
        listIncidentReadOnlyOccupancy.summary = incident.content.response.summary;
        listIncidentReadOnlyOccupancy.zone = incident.content.response.zone;
        listIncidentReadOnlyOccupancy.id = incident.content.idHash;
        copiedData.push(listIncidentReadOnlyOccupancy);
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
export class ReadOnlyOccupancyDataSource extends DataSource<any> {

  constructor(private _incidentDatabase: ReadOnlyOccupancyDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IncidentQueryDataReadOnlyOccupancy[]> {
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
