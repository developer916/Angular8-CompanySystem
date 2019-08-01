import { BehaviorSubject, merge as observableMerge, Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatPaginator } from '@angular/material/paginator';
import { DataService } from '../../../../core/services/data-service.service';
import { QueryService } from '../../../services/query.service';
import { Router } from '@angular/router';
import { IncidentGraphQlquery } from '../../../graphql/incident-graph-qlquery';
import { map } from 'rxjs/operators';
import { IncidentQueryDataHoseTestRecord } from '../../../model/incident-query-data-hose-test-record';


@Component({
  selector: 'app-incident-list-hose-test-record',
  templateUrl: './incident-list-hose-test-record.component.html',
  styleUrls: ['./incident-list-hose-test-record.component.css']
})
export class IncidentListHoseTestRecordComponent implements OnInit, OnDestroy {

  displayedColumns = ['print', 'hoseTestRecord', 'hoseTestReport', 'unit', 'station', 'officerID', 'officerName', 'dueDate', 'totalTested', 'totalRemaining', 'comment'];
  incidentQueryDatabase: HoseTestRecordDatabase | null;
  dataSource: HoseTestRecordDataSource | null;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  /**
   *
   * @param {DataService} ds
   */
  constructor(private router: Router, private ds: DataService, private qs: QueryService) { }

  /**
   * Called when the component is created
   */
  ngOnInit() {
    this.incidentQueryDatabase = new HoseTestRecordDatabase(this.ds, this.qs);
    this.dataSource = new HoseTestRecordDataSource(this.incidentQueryDatabase, this.paginator);
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
   * @param {String} preplan
   */
  showIncidentDetailRecord(hoseTestRecord: String) {
    this.router.navigate(['/incident/' + hoseTestRecord]);
  }

  showIncidentDetailReport(hoseTestReport: String) {
    this.router.navigate(['/incident/' + hoseTestReport])
  }

}

/**
 * Class that retrieves incident data from the backend - currently via a GraphQL query
 */
export class HoseTestRecordDatabase {

  /**
   * The session that this database shows results for
   */
  QUERY_SESSION = 'Session.OS.Query.HoseTestRecord';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  /**
   * Subscription to the GraphQL query for incident query data
   */
  private querySub: Subscription;

  /**
   * Observable object that holds incident query data
   * @type {BehaviorSubject<IncidentQueryDataPreIncidentSurveyRecord[]>}
   */
  dataChange: BehaviorSubject<IncidentQueryDataHoseTestRecord[]> = new BehaviorSubject<IncidentQueryDataHoseTestRecord[]>([]);

  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   */
  constructor(ds: DataService, qs: QueryService) {
    this.querySub = ds.graphQLQuery(IncidentGraphQlquery.queryIMIncidents, qs.getQueryParams(this.QUERY_SESSION)).subscribe(data => {
      const copiedData = this.data.slice();
      data['data']['incidents'].forEach(incident => {
        const listIncidentHoseTestRecord: IncidentQueryDataHoseTestRecord = new class implements IncidentQueryDataHoseTestRecord {
          comment: String;
          dueDate: Number;
          hoseTestRecord: String;
          hoseTestReport: String;
          id: String;
          officerID: Number;
          officerName: String;
          print: Boolean;
          station: String;
          totalRemaining: Number;
          totalTested: Number;
          unit: String;
        };
        listIncidentHoseTestRecord.comment = incident.content.response.comment;
        listIncidentHoseTestRecord.dueDate = incident.content.response.dueDate;
        listIncidentHoseTestRecord.hoseTestRecord = incident.content.response.hoseTestRecord;
        listIncidentHoseTestRecord.hoseTestReport = incident.content.response.hoseTestReport;
        listIncidentHoseTestRecord.officerID = incident.content.response.officerID;
        listIncidentHoseTestRecord.officerName = incident.content.response.officerName;
        listIncidentHoseTestRecord.print = incident.content.response.print;
        listIncidentHoseTestRecord.station = incident.content.response.station;
        listIncidentHoseTestRecord.totalRemaining = incident.content.response.totalRemaining;
        listIncidentHoseTestRecord.totalTested = incident.content.response.totalTested;
        listIncidentHoseTestRecord.unit = incident.content.response.unit;
        listIncidentHoseTestRecord.id = incident.content.idHash;
        copiedData.push(listIncidentHoseTestRecord);
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
export class HoseTestRecordDataSource extends DataSource<any> {

  constructor(private _incidentDatabase: HoseTestRecordDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IncidentQueryDataHoseTestRecord[]> {
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

