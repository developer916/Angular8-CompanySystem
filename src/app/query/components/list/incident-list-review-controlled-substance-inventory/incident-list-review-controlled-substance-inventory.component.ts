import { DataSource } from '@angular/cdk/table';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { BehaviorSubject, merge as observableMerge, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../../../../core/services/data-service.service';
import { IncidentGraphQlquery } from '../../../graphql/incident-graph-qlquery';
import { IncidentQueryDataReviewControlledSubstanceInventory } from '../../../model/incident-query-data-review-controlled-substance-inventory';
import { QueryService } from '../../../services/query.service';


@Component({
  selector: 'app-incident-list-review-controlled-substance-inventory',
  templateUrl: './incident-list-review-controlled-substance-inventory.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentListReviewControlledSubstanceInventoryComponent implements OnInit, OnDestroy {

  displayedColumns = ['dueDate', 'unitNumber', 'unitID', 'reportByName', 'reportByID', 'closed', 'accountability'];
  incidentQueryDatabase: ReviewControlledSubstanceInventoryDatabase | null;
  dataSource: ReviewControlledSubstanceInventoryDataSource | null;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  /**
   *
   * @param {DataService} ds
   */

  constructor(private router: Router, private ds: DataService, private qs: QueryService) { }

  ngOnInit() {
    this.incidentQueryDatabase = new ReviewControlledSubstanceInventoryDatabase(this.ds, this.qs);
    this.dataSource = new ReviewControlledSubstanceInventoryDataSource(this.incidentQueryDatabase, this.paginator);
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
export class ReviewControlledSubstanceInventoryDatabase {

  /**
 * The session that this database shows results for
 */
  QUERY_SESSION = 'Session.OS.Query.ReviewControlledSubstanceInventory';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  /**
   * Subscription to the GraphQL query for incident query data
   */
  private querySub: Subscription;

  /**
   * Observable object that holds incident query data
   * @type {BehaviorSubject<IncidentQueryData[]>}
   */
  dataChange: BehaviorSubject<IncidentQueryDataReviewControlledSubstanceInventory[]> = new BehaviorSubject<IncidentQueryDataReviewControlledSubstanceInventory[]>([]);

  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   */
  constructor(ds: DataService, qs: QueryService) {
    this.querySub = ds.graphQLQuery(IncidentGraphQlquery.queryIMIncidents, qs.getQueryParams(this.QUERY_SESSION)).subscribe(data => {
      const copiedData = this.data.slice();
      data['data']['incidents'].forEach(incident => {
        const listIncidentReviewControlledSubstanceInventory: IncidentQueryDataReviewControlledSubstanceInventory = new class implements IncidentQueryDataReviewControlledSubstanceInventory {
          accountability: string;
          closed: boolean;
          dueDate: number;
          reportByID: number;
          reportByName: string;
          unitID: number;
          unitNumber: number;
        };
        listIncidentReviewControlledSubstanceInventory.accountability = incident.content.response.accountability;
        listIncidentReviewControlledSubstanceInventory.closed = incident.content.response.closed;
        listIncidentReviewControlledSubstanceInventory.dueDate = incident.content.response.dueDate;
        listIncidentReviewControlledSubstanceInventory.reportByID = incident.content.response.reportByID;
        listIncidentReviewControlledSubstanceInventory.reportByName = incident.content.response.reportByName;
        listIncidentReviewControlledSubstanceInventory.unitID = incident.content.response.unitID;
        listIncidentReviewControlledSubstanceInventory.unitNumber = incident.content.response.unitNumber;
        copiedData.push(listIncidentReviewControlledSubstanceInventory);
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
export class ReviewControlledSubstanceInventoryDataSource extends DataSource<any> {

  constructor(private _incidentDatabase: ReviewControlledSubstanceInventoryDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IncidentQueryDataReviewControlledSubstanceInventory[]> {
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
