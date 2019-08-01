import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DataService } from '../../../../core/services/data-service.service';
import { QueryService } from '../../../services/query.service';
import { BehaviorSubject, Observable, Subscription, merge as observableMerge } from 'rxjs';
import { IncidentGraphQlquery } from '../../../graphql/incident-graph-qlquery';
import { IncidentQueryDataFieldDrillEntry } from '../../../model/incident-query-data-field-drill-entry';
import { map } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-incident-list-field-drill-entry',
  templateUrl: './incident-list-field-drill-entry.component.html',
  styleUrls: ['./incident-list-field-drill-entry.component.css']
})
export class IncidentListFieldDrillEntryComponent implements OnInit, OnDestroy {

  displayedColumns = ['duplicate', 'status', 'stage', 'date', 'shift', 'drill', 'location', 'delete'];
  incidentQueryDatabase: FieldDrillEntryDatabase | null;
  dataSource: FieldDrillEntryDataSource | null;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  /**
   *
   * @param {DataService} ds
   */
  constructor(private router: Router, private ds: DataService, private qs: QueryService) { }

  ngOnInit() {
    this.incidentQueryDatabase = new FieldDrillEntryDatabase(this.ds, this.qs);
    this.dataSource = new FieldDrillEntryDataSource(this.incidentQueryDatabase, this.paginator);
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
   * @param {String} date
   */
  showIncidentDetail(date: String) {
    this.router.navigate(['/incident/' + date]);
  }

}

/**
 * Class that retrieves incident data from the backend - currently via a GraphQL query
 */
export class FieldDrillEntryDatabase {

  /**
   * The session that this database shows results for
   */
  QUERY_SESSION = 'Session.OS.Query.FieldDrillEntry';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  /**
   * Subscription to the GraphQL query for incident query data
   */
  private querySub: Subscription;

  /**
   * Observable object that holds incident query data
   * @type {BehaviorSubject<IncidentQueryData[]>}
   */
  dataChange: BehaviorSubject<IncidentQueryDataFieldDrillEntry[]> = new BehaviorSubject<IncidentQueryDataFieldDrillEntry[]>([]);

  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   */
  constructor(ds: DataService, qs: QueryService) {
    this.querySub = ds.graphQLQuery(IncidentGraphQlquery.queryIMIncidents, qs.getQueryParams(this.QUERY_SESSION)).subscribe(data => {
      const copiedData = this.data.slice();
      data['data']['incidents'].forEach(incident => {
        const listIncidentFieldDrillEntry: IncidentQueryDataFieldDrillEntry = new class implements IncidentQueryDataFieldDrillEntry {
          date: Number;
          delete: String;
          drill: String;
          duplicate: String;
          id: String;
          location: String;
          shift: String;
          stage: String;
          status: String;
        };
        listIncidentFieldDrillEntry.date = incident.content.date;
        listIncidentFieldDrillEntry.delete = incident.content.response.delete;
        listIncidentFieldDrillEntry.drill = incident.content.response.drill;
        listIncidentFieldDrillEntry.duplicate = incident.content.response.duplicate;
        listIncidentFieldDrillEntry.location = incident.content.response.location;
        listIncidentFieldDrillEntry.shift = incident.content.response.shift;
        listIncidentFieldDrillEntry.stage = incident.content.response.stage;
        listIncidentFieldDrillEntry.status = incident.content.response.status;
        listIncidentFieldDrillEntry.id = incident.content.idHash;
        copiedData.push(listIncidentFieldDrillEntry);
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
export class FieldDrillEntryDataSource extends DataSource<any> {

  constructor(private _incidentDatabase: FieldDrillEntryDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IncidentQueryDataFieldDrillEntry[]> {
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
