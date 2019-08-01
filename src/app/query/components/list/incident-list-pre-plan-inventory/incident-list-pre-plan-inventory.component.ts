import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DataService } from '../../../../core/services/data-service.service';
import { QueryService } from '../../../services/query.service';
import { BehaviorSubject, merge as observableMerge, Observable, Subscription } from 'rxjs';
import { IncidentQueryDataPrePlanInventory } from '../../../model/incident-query-data-pre-plan-inventory';
import { IncidentGraphQlquery } from '../../../graphql/incident-graph-qlquery';
import { DataSource } from '@angular/cdk/table';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-incident-list-pre-plan-inventory',
  templateUrl: './incident-list-pre-plan-inventory.component.html',
  styleUrls: ['./incident-list-pre-plan-inventory.component.css']
})
export class IncidentListPrePlanInventoryComponent implements OnInit, OnDestroy {

  displayedColumns = ['duplicate', 'prePlan', 'prePlanNumber', 'documentHistory', 'district', 'location', 'city', 'group', 'inspectionCycle', 'delete'];
  incidentQueryDatabase: PrePlanInventoryDatabase | null;
  dataSource: PrePlanInventoryDataSource | null;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  /**
   *
   * @param {DataService} ds
   */

  constructor(private router: Router, private ds: DataService, private qs: QueryService) {
  }

  ngOnInit() {
    this.incidentQueryDatabase = new PrePlanInventoryDatabase(this.ds, this.qs);
    this.dataSource = new PrePlanInventoryDataSource(this.incidentQueryDatabase, this.paginator);
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
   * @param {String} prePlan
   */
  showIncidentDetail(prePlan: number) {
    this.router.navigate(['/incident/' + prePlan]);
  }

  submit(buttonType) {
    // Need to fix the date format from what the form gives us
    // if query
    // if (buttonType === 'Query') {
    //  this.router.navigate(['/incident/list-agency-pre-plan-inventory']);
    // }
    // if add -> goto edit page
    if (buttonType === 'Add') {
      this.router.navigate(['incident/edit-pre-plan-inventory'])
    }
  }
}

/**
 * Class that retrieves incident data from the backend - currently via a GraphQL query
 */

export class PrePlanInventoryDatabase {

  /**
   * The session that this database shows results for
   */
  QUERY_SESSION = 'Session.OS.Query.PrePlanInventory';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  /**
   * Subscription to the GraphQL query for incident query data
   */
  private querySub: Subscription;

  /**
   * Observable object that holds incident query data
   * @type {BehaviorSubject<IncidentQueryData[]>}
   */
  dataChange: BehaviorSubject<IncidentQueryDataPrePlanInventory[]> = new BehaviorSubject<IncidentQueryDataPrePlanInventory[]>([]);

  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   */
  constructor(ds: DataService, qs: QueryService) {
    this.querySub = ds.graphQLQuery(IncidentGraphQlquery.queryIMIncidents, qs.getQueryParams(this.QUERY_SESSION)).subscribe(data => {
      const copiedData = this.data.slice();
      data['data']['incidents'].forEach(incident => {
        const listPrePlanInventory: IncidentQueryDataPrePlanInventory = new class implements IncidentQueryDataPrePlanInventory {
          city: string;
          delete: string;
          district: number;
          documentHistory: string;
          duplicate: string;
          group: number;
          inspectionCycle: number;
          location: string;
          prePlan: number;
          prePlanNumber: number;
        };

        listPrePlanInventory.city = incident.content.city;
        listPrePlanInventory.delete = incident.content.delete;
        listPrePlanInventory.district = incident.content.district;
        listPrePlanInventory.documentHistory = incident.content.documentHistory;
        listPrePlanInventory.duplicate = incident.content.duplicate;
        listPrePlanInventory.group = incident.content.group;
        listPrePlanInventory.inspectionCycle = incident.content.inspectionCycle;
        listPrePlanInventory.location = incident.content.location;
        listPrePlanInventory.prePlan = incident.content.response.personnelID == null ? '' : incident.content.response.prePlan.prePlanText;
        listPrePlanInventory.prePlanNumber = incident.content.prePlanNumber;
        copiedData.push(listPrePlanInventory);
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
export class PrePlanInventoryDataSource extends DataSource<any> {

  private router: any; // double check
  
  constructor(private _incidentDatabase: PrePlanInventoryDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IncidentQueryDataPrePlanInventory[]> {
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
