import { DataSource } from '@angular/cdk/table';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { BehaviorSubject, merge as observableMerge, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../../../../core/services/data-service.service';
import { IncidentGraphQlquery } from '../../../graphql/incident-graph-qlquery';
import { IncidentQueryDataManageIncidentArchiveAttachments } from '../../../model/incident-query-data-manage-incident-archive-attachments';
import { QueryService } from '../../../services/query.service';


@Component({
  selector: 'app-incident-list-manage-incident-archive-attachments',
  templateUrl: './incident-list-manage-incident-archive-attachments.component.html',
  styleUrls: ['./incident-list-manage-incident-archive-attachments.component.css']
})
export class IncidentListManageIncidentArchiveAttachmentsComponent implements OnInit, OnDestroy {

  displayedColumns = ['print', 'email', 'incidentNumber', 'alarmDateTime', 'archiveDocument', 'archiveType', 'archiveDate', 'archiveStage', 'approve', 'archivedBy',
    'incidentType', 'address', 'delete', 'attachment'];
  incidentQueryDatabase: ManageIncidentArchiveAttachmentsDatabase | null;
  dataSource: ManageIncidentArchiveAttachmentsDataSource | null;
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
    this.incidentQueryDatabase = new ManageIncidentArchiveAttachmentsDatabase(this.ds, this.qs);
    this.dataSource = new ManageIncidentArchiveAttachmentsDataSource(this.incidentQueryDatabase, this.paginator);
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
export class ManageIncidentArchiveAttachmentsDatabase {

  /**
   * The session that this database shows results for
   */
  QUERY_SESSION = 'Session.OS.Query.ManageIncidentArchiveAttachment';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  /**
   * Subscription to the GraphQL query for incident query data
   */
  private querySub: Subscription;

  /**
   * Observable object that holds incident query data
   * @type {BehaviorSubject<IncidentQueryData[]>}
   */
  dataChange: BehaviorSubject<IncidentQueryDataManageIncidentArchiveAttachments[]> = new BehaviorSubject<IncidentQueryDataManageIncidentArchiveAttachments[]>([]);

  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   */
  constructor(ds: DataService, qs: QueryService) {
    this.querySub = ds.graphQLQuery(IncidentGraphQlquery.queryIMIncidents, qs.getQueryParams(this.QUERY_SESSION)).subscribe(data => {
      const copiedData = this.data.slice();
      data['data']['incidents'].forEach(incident => {
        const listManageIncidentArchiveAttachments: IncidentQueryDataManageIncidentArchiveAttachments = new class implements IncidentQueryDataManageIncidentArchiveAttachments {
          address: String;
          alarmDateTime: Number;
          approve: String;
          archiveDate: Number;
          archiveDocument: String;
          archiveStage: String;
          archiveType: String;
          archivedBy: String;
          attachment: String;
          delete: String;
          email: String;
          incidentNumber: Number;
          incidentType: String;
          print: String;
        };
        listManageIncidentArchiveAttachments.address = incident.content.response.address;
        listManageIncidentArchiveAttachments.alarmDateTime = incident.content.response.alarmDateTime;
        listManageIncidentArchiveAttachments.approve = incident.content.response.approve;
        listManageIncidentArchiveAttachments.archiveDate = incident.content.response.archiveDate;
        listManageIncidentArchiveAttachments.archiveDocument = incident.content.response.archiveDocument;
        listManageIncidentArchiveAttachments.archiveStage = incident.content.response.archiveStage;
        listManageIncidentArchiveAttachments.archiveType = incident.content.response.archiveType;
        listManageIncidentArchiveAttachments.archivedBy = incident.content.response.archivedBy;
        listManageIncidentArchiveAttachments.attachment = incident.content.response.attachment;
        listManageIncidentArchiveAttachments.delete = incident.content.response.delete;
        listManageIncidentArchiveAttachments.email = incident.content.response.email;
        listManageIncidentArchiveAttachments.incidentNumber = incident.content.response.incidentNumber;
        listManageIncidentArchiveAttachments.incidentType = incident.content.response.incidentType;
        listManageIncidentArchiveAttachments.print = incident.content.response.print;
        copiedData.push(listManageIncidentArchiveAttachments);
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
export class ManageIncidentArchiveAttachmentsDataSource extends DataSource<any> {

  constructor(private _incidentDatabase: ManageIncidentArchiveAttachmentsDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IncidentQueryDataManageIncidentArchiveAttachments[]> {
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
