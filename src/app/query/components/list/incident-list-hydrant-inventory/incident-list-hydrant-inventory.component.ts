import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {Router} from '@angular/router';
import {DataService} from '../../../../core/services/data-service.service';
import {QueryService} from '../../../services/query.service';
import {BehaviorSubject, merge as observableMerge, Observable, Subscription} from 'rxjs';
import {IncidentQueryDataHydrantInventory} from '../../../model/incident-query-data-hydrant-inventory';
import {IncidentGraphQlquery} from '../../../graphql/incident-graph-qlquery';
import {DataSource} from '@angular/cdk/table';
import {map} from 'rxjs/operators';



@Component({
  selector: 'app-incident-list-hydrant-inventory',
  templateUrl: './incident-list-hydrant-inventory.component.html',
  styleUrls: ['./incident-list-hydrant-inventory.component.css']
})
export class IncidentListHydrantInventoryComponent implements OnInit, OnDestroy {

  displayedColumns = ['duplicate', 'hydrantNumber', 'hydrant', 'station', 'mapPage', 'city', 'group', 'inspectionCycle', 'delete'];
  incidentQueryDatabase: HydrantInventoryDatabase | null;
  dataSource: HydrantInventoryDataSource | null;
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
    this.incidentQueryDatabase = new HydrantInventoryDatabase(this.ds, this.qs);
    this.dataSource = new HydrantInventoryDataSource(this.incidentQueryDatabase, this.paginator);
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
   * @param {String} hydrantNumber
   */
  showIncidentDetail (hydrantNumber: number) {
    this.router.navigate(['/incident/' + hydrantNumber]);
  }

  submit(buttonType) {
    // Need to fix the date format from what the form gives us
    // if query
    // if (buttonType === 'Query') {
    //  this.router.navigate(['/incident/list-agency-personnel']);
    // }
    // if add -> goto edit page
    if (buttonType === 'Add') {
      this.router.navigate(['incident/edit-agency-hydrant-inventory'])
    }
  }
}
/**
 * Class that retrieves incident data from the backend - currently via a GraphQL query
 */

export class HydrantInventoryDatabase {

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
  dataChange: BehaviorSubject<IncidentQueryDataHydrantInventory[]> = new BehaviorSubject<IncidentQueryDataHydrantInventory[]>([]);

  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   */
  constructor(ds: DataService, qs: QueryService) {
    this.querySub = ds.graphQLQuery(IncidentGraphQlquery.queryIMIncidents, qs.getQueryParams(this.QUERY_SESSION)).subscribe(data => {
      const copiedData = this.data.slice();
      data['data']['incidents'].forEach(incident => {
        const listHydrantInventory: IncidentQueryDataHydrantInventory = new class implements IncidentQueryDataHydrantInventory {
          city: string;
          delete: string;
          duplicate: string;
          group: number;
          hydrant: number;
          hydrantNumber: number;
          inspectionCycle: number;
          mapPage: string;
          station: number;
        };
        listHydrantInventory.city = incident.content.response.city;
        listHydrantInventory.delete = incident.content.response.delete;
        listHydrantInventory.duplicate = incident.content.response.duplicate;
        listHydrantInventory.group = incident.content.response.group;
        listHydrantInventory.hydrant = incident.content.response.hydrant;
        listHydrantInventory.hydrantNumber = incident.content.response.hydrantNumber == null ? '' : incident.content.response.hydrantNumber.hydrantNumberText;
        listHydrantInventory.inspectionCycle = incident.content.response.inspectionCycle;
        listHydrantInventory.mapPage = incident.content.response.mapPage;
        listHydrantInventory.station = incident.content.response.station;
        copiedData.push(listHydrantInventory);
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
export class HydrantInventoryDataSource extends DataSource<any> {

  private router: any; // double check
  
  constructor(private _incidentDatabase: HydrantInventoryDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IncidentQueryDataHydrantInventory[]> {
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

