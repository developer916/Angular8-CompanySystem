import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { QueryService } from '../../../services/query.service';
import { DataService } from '../../../../core/services/data-service.service';
import { BehaviorSubject, merge as observableMerge, Observable, Subscription } from 'rxjs';
import { IncidentQueryDataOpenCadIncidents } from '../../../model/incident-query-data-open-cad-incidents';
import { IncidentGraphQlquery } from '../../../graphql/incident-graph-qlquery';
import { map } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-incident-list-open-cad-incidents',
  templateUrl: './incident-list-open-cad-incidents.component.html',
  styleUrls: ['./incident-list-open-cad-incidents.component.css']
})
export class IncidentListOpenCadIncidentsComponent implements OnInit, OnDestroy {

  displayedColumns = ['address', 'cityStateZip', 'date', 'incidentNumber', 'status'];
  incidentQueryDatabase: OpenCadIncidentsDatabase | null;
  dataSource: OpenCadIncidentsDataSource | null;
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
    this.incidentQueryDatabase = new OpenCadIncidentsDatabase(this.ds, this.qs);
    this.dataSource = new OpenCadIncidentsDataSource(this.incidentQueryDatabase, this.paginator);
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
export class OpenCadIncidentsDatabase {

  /**
   * The session that this database shows results for
   */
  QUERY_SESSION = 'Session.OS.Query.OpenCadIncidents';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  /**
   * Subscription to the GraphQL query for incident query data
   */
  private querySub: Subscription;

  /**
   * Observable object that holds incident query data
   * @type {BehaviorSubject<IncidentQueryData[]>}
   */
  dataChange: BehaviorSubject<IncidentQueryDataOpenCadIncidents[]> = new BehaviorSubject<IncidentQueryDataOpenCadIncidents[]>([]);

  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   */
  constructor(ds: DataService, qs: QueryService) {
    this.querySub = ds.graphQLQuery(IncidentGraphQlquery.queryIMIncidents, qs.getQueryParams(this.QUERY_SESSION)).subscribe(data => {
      const copiedData = this.data.slice();
      data['data']['incidents'].forEach(incident => {
        const listIncidentOpenCadIncidents: IncidentQueryDataOpenCadIncidents = new class implements IncidentQueryDataOpenCadIncidents {
          address: String;
          cityStateZip: String;
          date: Number;
          incidentNumber: Number;
          status: String;
        };
        listIncidentOpenCadIncidents.address = incident.content.response.address;
        listIncidentOpenCadIncidents.cityStateZip = incident.content.response.cityStateZip;
        listIncidentOpenCadIncidents.date = incident.content.response.date;
        listIncidentOpenCadIncidents.incidentNumber = incident.content.response.incidentNumber;
        listIncidentOpenCadIncidents.status = incident.content.response.status;
        copiedData.push(listIncidentOpenCadIncidents);
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
export class OpenCadIncidentsDataSource extends DataSource<any> {
  
  constructor(private _incidentDatabase: OpenCadIncidentsDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IncidentQueryDataOpenCadIncidents[]> {
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
