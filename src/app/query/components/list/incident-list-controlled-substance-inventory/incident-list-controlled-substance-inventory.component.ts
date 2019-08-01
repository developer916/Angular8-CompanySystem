import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DataService } from '../../../../core/services/data-service.service';
import { QueryService } from '../../../services/query.service';
import { BehaviorSubject, Observable, Subscription, merge as observableMerge } from 'rxjs';
import { IncidentGraphQlquery } from '../../../graphql/incident-graph-qlquery';
import { DataSource } from '@angular/cdk/table';
import { map } from 'rxjs/operators';
import { IncidentQueryDataControlledSubstanceInventory } from '../../../model/incident-query-data-controlled-substance-inventory';


@Component({
  selector: 'app-incident-list-controlled-substance-inventory',
  templateUrl: './incident-list-controlled-substance-inventory.component.html',
  styleUrls: ['./incident-list-controlled-substance-inventory.component.css']
})
export class IncidentListControlledSubstanceInventoryComponent implements OnInit, OnDestroy {

  displayedColumns = ['unitMaintenanceNumber', 'unit', 'date', 'compliance', 'accountability', 'status'];
  incidentQueryDatabase: ControlledSubstanceInventoryDatabase | null;
  dataSource: ControlledSubstanceInventoryDataSource | null;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  /**
   *
   * @param {DataService} ds
   */
  constructor(private router: Router, private ds: DataService, private qs: QueryService) {
  }

  ngOnInit() {
    this.incidentQueryDatabase = new ControlledSubstanceInventoryDatabase(this.ds, this.qs);
    this.dataSource = new ControlledSubstanceInventoryDataSource(this.incidentQueryDatabase, this.paginator);
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
   * @param {String} incidentNumber
   */
  showIncidentDetail(unitMaintenanceNumber: number) {
    this.router.navigate(['/incident/' + unitMaintenanceNumber]);
  }
}

/**
 * Class that retrieves incident data from the backend - currently via a GraphQL query
 */
export class ControlledSubstanceInventoryDatabase {

  /**
   * The session that this database shows results for
   */
  QUERY_SESSION = 'Session.OS.Query.ControlledSubstanceInventory';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  /**
   * Subscription to the GraphQL query for incident query data
   */
  private querySub: Subscription;

  /**
   * Observable object that holds incident query data
   * @type {BehaviorSubject<IncidentQueryData[]>}
   */
  dataChange: BehaviorSubject<IncidentQueryDataControlledSubstanceInventory[]> = new BehaviorSubject<IncidentQueryDataControlledSubstanceInventory[]>([]);

  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   */
  constructor(ds: DataService, qs: QueryService) {
    this.querySub = ds.graphQLQuery(IncidentGraphQlquery.queryIMIncidents, qs.getQueryParams(this.QUERY_SESSION)).subscribe(data => {
      const copiedData = this.data.slice();
      data['data']['incidents'].forEach(incident => {
        const listIncidentControlledSubstanceInventory: IncidentQueryDataControlledSubstanceInventory = new class implements IncidentQueryDataControlledSubstanceInventory {
          accountability: string;
          compliance: string;
          date: number;
          id: string;
          status: string;
          unit: string;
          unitMaintenanceNumber: number;
        };
        listIncidentControlledSubstanceInventory.accountability = incident.content.accountability;
        listIncidentControlledSubstanceInventory.compliance = incident.content.response.compliance;
        listIncidentControlledSubstanceInventory.date = incident.content.response.date;
        listIncidentControlledSubstanceInventory.status = incident.content.response.status;
        listIncidentControlledSubstanceInventory.unit = incident.content.response.unit;
        listIncidentControlledSubstanceInventory.unitMaintenanceNumber = incident.content.response.unitMaintenanceNumber;
        listIncidentControlledSubstanceInventory.id = incident.content.idHash;
        copiedData.push(listIncidentControlledSubstanceInventory);
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
export class ControlledSubstanceInventoryDataSource extends DataSource<any> {

  constructor(private _incidentDatabase: ControlledSubstanceInventoryDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IncidentQueryDataControlledSubstanceInventory[]> {
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
