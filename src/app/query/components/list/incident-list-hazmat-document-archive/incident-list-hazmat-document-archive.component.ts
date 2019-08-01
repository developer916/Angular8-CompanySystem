import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DataService } from '../../../../core/services/data-service.service';
import { QueryService } from '../../../services/query.service';
import { BehaviorSubject, merge as observableMerge, Observable, Subscription } from 'rxjs';
import { IncidentQueryDataHazmatDocumentArchive } from '../../../model/incident-query-data-hazmat-document-archive';
import { IncidentGraphQlquery } from '../../../graphql/incident-graph-qlquery';
import { DataSource } from '@angular/cdk/table';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-incident-list-hazmat-document-archive',
  templateUrl: './incident-list-hazmat-document-archive.component.html',
  styleUrls: ['./incident-list-hazmat-document-archive.component.css']
})
export class IncidentListHazmatDocumentArchiveComponent implements OnInit, OnDestroy {

  displayedColumns = ['incidentNumber', 'currentHazmat', 'alarmDateTime', 'archiveDocuments', 'archiveType', 'archiveDate', 'archivedBy', 'incidentType', 'address'];
  incidentQueryDatabase: HazmatDocumentArchiveDatabase | null;
  dataSource: HazmatDocumentArchiveDataSource | null;
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
    this.incidentQueryDatabase = new HazmatDocumentArchiveDatabase(this.ds, this.qs);
    this.dataSource = new HazmatDocumentArchiveDataSource(this.incidentQueryDatabase, this.paginator);
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
export class HazmatDocumentArchiveDatabase {

  /**
   * The session that this database shows results for
   */
  QUERY_SESSION = 'Session.OS.Query.HazmatDocumentArchive';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  /**
   * Subscription to the GraphQL query for incident query data
   */
  private querySub: Subscription;

  /**
   * Observable object that holds incident query data
   * @type {BehaviorSubject<IncidentQueryData[]>}
   */

  dataChange: BehaviorSubject<IncidentQueryDataHazmatDocumentArchive[]> = new BehaviorSubject<IncidentQueryDataHazmatDocumentArchive[]>([]);

  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   */
  constructor(ds: DataService, qs: QueryService) {
    this.querySub = ds.graphQLQuery(IncidentGraphQlquery.queryIMIncidents, qs.getQueryParams(this.QUERY_SESSION)).subscribe(data => {
      const copiedData = this.data.slice();
      data['data']['incidents'].forEach(incident => {
        const listIncidentHazmatDocumentArchive: IncidentQueryDataHazmatDocumentArchive = new class implements IncidentQueryDataHazmatDocumentArchive {
          address: String;
          alarmDateTime: Number;
          archiveDate: Date;
          archiveDocuments: String;
          archiveType: String;
          archivedBy: String;
          currentHazmat: String;
          incidentNumber: Number;
          incidentType: String;
        };
        listIncidentHazmatDocumentArchive.address = incident.content.response.address;
        listIncidentHazmatDocumentArchive.alarmDateTime = incident.content.response.alarmDateTime;
        listIncidentHazmatDocumentArchive.archiveDate = incident.content.response.archiveDate;
        listIncidentHazmatDocumentArchive.archiveDocuments = incident.content.response.archiveDocuments;
        listIncidentHazmatDocumentArchive.archiveType = incident.content.response.archiveType;
        listIncidentHazmatDocumentArchive.archivedBy = incident.content.response.archivedBy;
        listIncidentHazmatDocumentArchive.currentHazmat = incident.content.response.currentHazmat;
        listIncidentHazmatDocumentArchive.incidentNumber = incident.content.response.incidentNumber;
        listIncidentHazmatDocumentArchive.incidentType = incident.content.response.incidentType;
        copiedData.push(listIncidentHazmatDocumentArchive);
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
export class HazmatDocumentArchiveDataSource extends DataSource<any> {
  
  constructor(private _incidentDatabase: HazmatDocumentArchiveDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IncidentQueryDataHazmatDocumentArchive[]> {
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
