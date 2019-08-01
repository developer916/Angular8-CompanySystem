import { DataSource } from '@angular/cdk/table';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { BehaviorSubject, merge as observableMerge, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../../../../core/services/data-service.service';
import { IncidentGraphQlquery } from '../../../graphql/incident-graph-qlquery';
import { IncidentQueryDataFieldDrillReview } from '../../../model/incident-query-data-field-drill-review';
import { QueryService } from '../../../services/query.service';


@Component({
  selector: 'app-incident-list-field-drill-review',
  templateUrl: './incident-list-field-drill-review.component.html',
  styleUrls: ['./incident-list-field-drill-review.component.css']
})
export class IncidentListFieldDrillReviewComponent implements OnInit, OnDestroy {

  displayedColumns = ['stage', 'date', 'shift', 'drill', 'location', 'accepted', 'rejected', 'reason'];
  incidentQueryDatabase: FieldDrillReviewDatabase | null;
  dataSource: FieldDrillReviewDataSource | null;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  /**
   *
   * @param {DataService} ds
   */
  constructor(private router: Router, private qs: QueryService, private ds: DataService) { }

  ngOnInit() {
    this.incidentQueryDatabase = new FieldDrillReviewDatabase(this.ds, this.qs);
    this.dataSource = new FieldDrillReviewDataSource(this.incidentQueryDatabase, this.paginator);
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
export class FieldDrillReviewDatabase {

  /**
   * The session that this database shows results for
   */
  QUERY_SESSION = 'Session.OS.Query.FieldDrillReview';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  /**
   * Subscription to the GraphQL query for incident query data
   */
  private querySub: Subscription;

  /**
   * Observable object that holds incident query data
   * @type {BehaviorSubject<IncidentQueryData[]>}
   */
  dataChange: BehaviorSubject<IncidentQueryDataFieldDrillReview[]> = new BehaviorSubject<IncidentQueryDataFieldDrillReview[]>([]);

  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   */
  constructor(ds: DataService, qs: QueryService) {
    this.querySub = ds.graphQLQuery(IncidentGraphQlquery.queryIMIncidents, qs.getQueryParams(this.QUERY_SESSION)).subscribe(data => {
      const copiedData = this.data.slice();
      data['data']['incidents'].forEach(incident => {
        const listIncidentFieldDrillReview: IncidentQueryDataFieldDrillReview = new class implements IncidentQueryDataFieldDrillReview {
          id: String;
          accepted: Boolean;
          date: Number;
          drill: String;
          location: String;
          reason: String;
          rejected: Boolean;
          shift: String;
          stage: String;
        };
        listIncidentFieldDrillReview.accepted = incident.content.accepted;
        listIncidentFieldDrillReview.date = incident.content.response.date;
        listIncidentFieldDrillReview.drill = incident.content.response.drill;
        listIncidentFieldDrillReview.location = incident.content.response.location;
        listIncidentFieldDrillReview.reason = incident.content.response.reason;
        listIncidentFieldDrillReview.rejected = incident.content.response.rejected;
        listIncidentFieldDrillReview.shift = incident.content.response.shift;
        listIncidentFieldDrillReview.stage = incident.content.response.stage;
        listIncidentFieldDrillReview.id = incident.content.idHash;
        copiedData.push(listIncidentFieldDrillReview);
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
export class FieldDrillReviewDataSource extends DataSource<any> {

  constructor(private _incidentDatabase: FieldDrillReviewDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IncidentQueryDataFieldDrillReview[]> {
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
