import { DataSource } from '@angular/cdk/table';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { BehaviorSubject, merge as observableMerge, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../../../../core/services/data-service.service';
import { IncidentGraphQlquery } from '../../../graphql/incident-graph-qlquery';
import { IncidentQueryDataHydrantInspectionRecord } from '../../../model/incident-query-data-hydrant-inspection-record';
import { QueryService } from '../../../services/query.service';

@Component({
  selector: 'app-incident-list-hydrant-inspection-record',
  templateUrl: './incident-list-hydrant-inspection-record.component.html',
  styleUrls: ['./incident-list-hydrant-inspection-record.component.css']
})
export class IncidentListHydrantInspectionRecordComponent implements OnInit, OnDestroy {

  displayedColumns = ['print', 'inspectionRecord', 'inspectionReport', 'dueDate', 'shift', 'station', 'mapPage', 'totalInspected', 'totalRemaining'];
  incidentQueryDatabase: HydrantInspectionRecordDatabase | null;
  dataSource: HydrandInspectionRecordDataSource | null;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  /**
   *
   * @param {DataService} ds
   */
  constructor(private router: Router, private ds: DataService, private qs: QueryService) { }

  ngOnInit() {
    this.incidentQueryDatabase = new HydrantInspectionRecordDatabase(this.ds, this.qs);
    this.dataSource = new HydrandInspectionRecordDataSource(this.incidentQueryDatabase, this.paginator);
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
export class HydrantInspectionRecordDatabase {

  /**
   * The session that this database shows results for
   */
  QUERY_SESSION = 'Session.OS.Query.HydrantInspectionRecord';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  /**
   * Subscription to the GraphQL query for incident query data
   */
  private querySub: Subscription;

  /**
   * Observable object that holds incident query data
   * @type {BehaviorSubject<IncidentQueryData[]>}
   */
  dataChange: BehaviorSubject<IncidentQueryDataHydrantInspectionRecord[]> = new BehaviorSubject<IncidentQueryDataHydrantInspectionRecord[]>([]);

  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   */
  constructor(ds: DataService, qs: QueryService) {
    this.querySub = ds.graphQLQuery(IncidentGraphQlquery.queryIMIncidents, qs.getQueryParams(this.QUERY_SESSION)).subscribe(data => {
      const copiedData = this.data.slice();
      data['data']['incidents'].forEach(incident => {
        const listIncidentHydrantInspectionRecord: IncidentQueryDataHydrantInspectionRecord = new class implements IncidentQueryDataHydrantInspectionRecord {
          dueDate: number;
          inspectionRecord: string;
          inspectionReport: string;
          mapPage: string;
          print: string;
          shift: string;
          station: string;
          totalInspected: number;
          totalRemaining: number;
        };
        listIncidentHydrantInspectionRecord.dueDate = incident.content.response.dueDate;
        listIncidentHydrantInspectionRecord.inspectionRecord = incident.content.response.inspectionRecord;
        listIncidentHydrantInspectionRecord.inspectionReport = incident.content.response.inspectionReport;
        listIncidentHydrantInspectionRecord.mapPage = incident.content.response.mapPage;
        listIncidentHydrantInspectionRecord.print = incident.content.response.print;
        listIncidentHydrantInspectionRecord.shift = incident.content.response.shift;
        listIncidentHydrantInspectionRecord.station = incident.content.response.station;
        listIncidentHydrantInspectionRecord.totalInspected = incident.content.response.totalInspected;
        listIncidentHydrantInspectionRecord.totalRemaining = incident.content.response.totalRemaining;
        copiedData.push(listIncidentHydrantInspectionRecord);
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
export class HydrandInspectionRecordDataSource extends DataSource<any> {
  
  constructor(private _incidentDatabase: HydrantInspectionRecordDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IncidentQueryDataHydrantInspectionRecord[]> {
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
