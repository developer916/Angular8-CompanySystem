import { BehaviorSubject, merge as observableMerge, Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatPaginator } from '@angular/material/paginator';
import { DataService } from '../../../../core/services/data-service.service';
import { QueryService } from '../../../services/query.service';
import { Router } from '@angular/router';
import { IncidentGraphQlquery } from '../../../graphql/incident-graph-qlquery';
import { map } from 'rxjs/operators';
import { IncidentQueryDataPreIncidentSurveyRecord } from '../../../model/incident-query-data-pre-incident-survey-record';


@Component({
  selector: 'app-incident-list-pre-incident-survey-record',
  templateUrl: './incident-list-pre-incident-survey-record.component.html',
  styleUrls: ['./incident-list-pre-incident-survey-record.component.css']
})

export class IncidentListPreIncidentSurveyRecordComponent implements OnInit, OnDestroy {

  displayedColumns = ['print', 'preplan', 'station', 'shift', 'address', 'surveyDate', 'duration', 'officerID', 'officerName', 'accuracy', 'stage', 'stageDate'];
  incidentQueryDatabase: PreIncidentSurveyRecordDatabase | null;
  dataSource: PreIncidentSurveyRecordDataSource | null;
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
    this.incidentQueryDatabase = new PreIncidentSurveyRecordDatabase(this.ds, this.qs);
    this.dataSource = new PreIncidentSurveyRecordDataSource(this.incidentQueryDatabase, this.paginator);
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
  showIncidentDetail(preplan: String) {
    this.router.navigate(['/incident/' + preplan]);
  }
}

/**
 * Class that retrieves incident data from the backend - currently via a GraphQL query
 */
export class PreIncidentSurveyRecordDatabase {

  /**
   * The session that this database shows results for
   */
  QUERY_SESSION = 'Session.OS.Query.PreIncidentSurveyRecord';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  /**
   * Subscription to the GraphQL query for incident query data
   */
  private querySub: Subscription;

  /**
   * Observable object that holds incident query data
   * @type {BehaviorSubject<IncidentQueryDataPreIncidentSurveyRecord[]>}
   */
  dataChange: BehaviorSubject<IncidentQueryDataPreIncidentSurveyRecord[]> = new BehaviorSubject<IncidentQueryDataPreIncidentSurveyRecord[]>([]);

  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   */
  constructor(ds: DataService, qs: QueryService) {
    this.querySub = ds.graphQLQuery(IncidentGraphQlquery.queryIMIncidents, qs.getQueryParams(this.QUERY_SESSION)).subscribe(data => {
      const copiedData = this.data.slice();
      data['data']['incidents'].forEach(incident => {
        const listIncidentPreIncidentSurveyRecord: IncidentQueryDataPreIncidentSurveyRecord = new class implements IncidentQueryDataPreIncidentSurveyRecord {
          accuracy: String;
          address: String;
          duration: Number;
          id: String;
          officerID: Number;
          officerName: String;
          preplan: String;
          print: Boolean;
          shift: Boolean;
          stage: String;
          stageDate: Number;
          station: Number;
        };
        listIncidentPreIncidentSurveyRecord.accuracy = incident.content.response.accuracy;
        listIncidentPreIncidentSurveyRecord.address = incident.content.response.address;
        listIncidentPreIncidentSurveyRecord.duration = incident.content.response.duration;
        listIncidentPreIncidentSurveyRecord.officerID = incident.content.response.officerID;
        listIncidentPreIncidentSurveyRecord.officerName = incident.content.response.officerName;
        listIncidentPreIncidentSurveyRecord.preplan = incident.content.response.preplan;
        listIncidentPreIncidentSurveyRecord.print = incident.content.response.print;
        listIncidentPreIncidentSurveyRecord.shift = incident.content.response.shift;
        listIncidentPreIncidentSurveyRecord.stage = incident.content.response.stage;
        listIncidentPreIncidentSurveyRecord.stageDate = incident.content.response.stageDate;
        listIncidentPreIncidentSurveyRecord.station = incident.content.response.station;
        listIncidentPreIncidentSurveyRecord.id = incident.content.idHash;
        copiedData.push(listIncidentPreIncidentSurveyRecord);
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
export class PreIncidentSurveyRecordDataSource extends DataSource<any> {
  
  constructor(private _incidentDatabase: PreIncidentSurveyRecordDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IncidentQueryDataPreIncidentSurveyRecord[]> {
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
