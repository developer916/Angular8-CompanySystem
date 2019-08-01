import { DataSource } from '@angular/cdk/table';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { BehaviorSubject, merge as observableMerge, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../../../../core/services/data-service.service';
import { IncidentGraphQlquery } from '../../../graphql/incident-graph-qlquery';
import { IncidentQueryDataManageHazmatDocumentArchiveAttachments } from '../../../model/incident-query-data-manage-hazmat-document-archive-attachments';
import { QueryService } from '../../../services/query.service';


@Component({
  selector: 'app-incident-list-manage-hazmat-document-archive-attachments',
  templateUrl: './incident-list-manage-hazmat-document-archive-attachments.component.html',
  styleUrls: ['./incident-list-manage-hazmat-document-archive-attachments.component.css']
})
export class IncidentListManageHazmatDocumentArchiveAttachmentsComponent implements OnInit, OnDestroy {

  displayedColumns = ['print', 'email', 'incidentNumber', 'currentHazmat', 'alarmDateTime', 'archiveDocument', 'archiveType', 'archiveDate',
    'archiveStage', 'approve', 'archivedBy', 'incidentType', 'address', 'delete', 'attachment'];
  incidentQueryDatabase: ManageHazmatDocumentArchiveAttachmentsDatabase | null;
  dataSource: ManageHazmatDocumentArchiveAttachmentsDataSource | null;
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
    this.incidentQueryDatabase = new ManageHazmatDocumentArchiveAttachmentsDatabase(this.ds, this.qs);
    this.dataSource = new ManageHazmatDocumentArchiveAttachmentsDataSource(this.incidentQueryDatabase, this.paginator);
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
export class ManageHazmatDocumentArchiveAttachmentsDatabase {

  /**
   * The session that this database shows results for
   */
  QUERY_SESSION = 'Session.OS.Query.ManageHazmatDocument';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  /**
   * Subscription to the GraphQL query for incident query data
   */
  private querySub: Subscription;

  /**
   * Observable object that holds incident query data
   * @type {BehaviorSubject<IncidentQueryData[]>}
   */
  dataChange: BehaviorSubject<IncidentQueryDataManageHazmatDocumentArchiveAttachments[]> = new BehaviorSubject<IncidentQueryDataManageHazmatDocumentArchiveAttachments[]>([]);

  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   */
  constructor(ds: DataService, qs: QueryService) {
    this.querySub = ds.graphQLQuery(IncidentGraphQlquery.queryIMIncidents, qs.getQueryParams(this.QUERY_SESSION)).subscribe(data => {
      const copiedData = this.data.slice();
      data['data']['incidents'].forEach(incident => {
        const listManageHazmatDocumentArchiveAttachments: IncidentQueryDataManageHazmatDocumentArchiveAttachments = new class implements IncidentQueryDataManageHazmatDocumentArchiveAttachments {
          address: String;
          alarmDateTime: Number;
          approve: String;
          archiveDate: Number;
          archiveDocument: String;
          archiveStage: String;
          archiveType: String;
          archivedBy: String;
          attachment: String;
          currentHazmat: String;
          delete: String;
          email: String;
          incidentNumber: Number;
          incidentType: String;
          print: String;
        };
        listManageHazmatDocumentArchiveAttachments.address = incident.content.response.address;
        listManageHazmatDocumentArchiveAttachments.alarmDateTime = incident.content.response.alarmDateTime;
        listManageHazmatDocumentArchiveAttachments.approve = incident.content.response.approve;
        listManageHazmatDocumentArchiveAttachments.archiveDate = incident.content.response.archiveDate;
        listManageHazmatDocumentArchiveAttachments.archiveDocument = incident.content.response.archiveDocument;
        listManageHazmatDocumentArchiveAttachments.archiveStage = incident.content.response.archiveStage;
        listManageHazmatDocumentArchiveAttachments.archiveType = incident.content.response.archiveType;
        listManageHazmatDocumentArchiveAttachments.archivedBy = incident.content.response.archivedBy;
        listManageHazmatDocumentArchiveAttachments.attachment = incident.content.response.attachment;
        listManageHazmatDocumentArchiveAttachments.delete = incident.content.response.delete;
        listManageHazmatDocumentArchiveAttachments.email = incident.content.response.email;
        listManageHazmatDocumentArchiveAttachments.incidentNumber = incident.content.response.incidentNumber;
        listManageHazmatDocumentArchiveAttachments.incidentType = incident.content.response.incidentType;
        listManageHazmatDocumentArchiveAttachments.print = incident.content.response.print;
        listManageHazmatDocumentArchiveAttachments.currentHazmat = incident.content.response.currentHazmat;
        copiedData.push(listManageHazmatDocumentArchiveAttachments);
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
export class ManageHazmatDocumentArchiveAttachmentsDataSource extends DataSource<any> {

  constructor(private _incidentDatabase: ManageHazmatDocumentArchiveAttachmentsDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IncidentQueryDataManageHazmatDocumentArchiveAttachments[]> {
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
