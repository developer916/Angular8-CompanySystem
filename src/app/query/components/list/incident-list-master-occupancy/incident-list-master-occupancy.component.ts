import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DataService } from '../../../../core/services/data-service.service';
import { QueryService } from '../../../services/query.service';
import { BehaviorSubject, merge as observableMerge, Observable, Subscription } from 'rxjs';
import { IncidentGraphQlquery } from '../../../graphql/incident-graph-qlquery';
import { IncidentQueryDataMasterOccupancy } from '../../../model/incident-query-data-master-occupancy';
import { DataSource } from '@angular/cdk/table';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-incident-list-master-occupancy',
  templateUrl: './incident-list-master-occupancy.component.html',
  styleUrls: ['./incident-list-master-occupancy.component.css']
})
export class IncidentListMasterOccupancyComponent implements OnInit, OnDestroy {

  displayedColumns = ['occupancyNumber', 'businessName', 'address', 'parcelNumber', 'addressID', 'masterOccupancyNumber', 'delete'];
  incidentQueryDatabase: MasterOccupancyDatabase | null;
  dataSource: MasterOccupancyDataSource | null;
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
    this.incidentQueryDatabase = new MasterOccupancyDatabase(this.ds, this.qs);
    this.dataSource = new MasterOccupancyDataSource(this.incidentQueryDatabase, this.paginator);
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
   * @param {String} personnelID
   */
  showIncidentDetail(personnelID: String) {
    this.router.navigate(['/incident/' + personnelID]);
  }

  submit(buttonType) {
    // Need to fix the date format from what the form gives us
    // if query
    // if (buttonType === 'Query') {
    //  this.router.navigate(['/incident/list-agency-personnel']);
    // }
    // if add -> goto edit page
    if (buttonType === 'Add') {
      this.router.navigate(['incident/edit-master-occupancy'])
    }
  }
}
/**
 * Class that retrieves incident data from the backend - currently via a GraphQL query
 */

export class MasterOccupancyDatabase {

  /**
   * The session that this database shows results for
   */
  QUERY_SESSION = 'Session.OS.Query.MasterOccupancy';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  /**
   * Subscription to the GraphQL query for incident query data
   */
  private querySub: Subscription;

  /**
   * Observable object that holds incident query data
   * @type {BehaviorSubject<IncidentQueryData[]>}
   */
  dataChange: BehaviorSubject<IncidentQueryDataMasterOccupancy[]> = new BehaviorSubject<IncidentQueryDataMasterOccupancy[]>([]);

  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   */
  constructor(ds: DataService, qs: QueryService) {
    this.querySub = ds.graphQLQuery(IncidentGraphQlquery.queryIMIncidents, qs.getQueryParams(this.QUERY_SESSION)).subscribe(data => {
      const copiedData = this.data.slice();
      data['data']['incidents'].forEach(incident => {
        const listMasterOccupancy: IncidentQueryDataMasterOccupancy = new class implements IncidentQueryDataMasterOccupancy {
          address: string;
          addressID: number;
          businessName: string;
          delete: string;
          masterOccupancyNumber: number;
          occupancyNumber: number;
          parcelNumber: number;
        };
        listMasterOccupancy.address = incident.content.response.address;
        listMasterOccupancy.addressID = incident.content.response.addressID;
        listMasterOccupancy.businessName = incident.content.response.businessName;
        listMasterOccupancy.delete = incident.content.response.delete;
        listMasterOccupancy.masterOccupancyNumber = incident.content.response.masterOccupancyNumber;
        listMasterOccupancy.occupancyNumber = incident.content.response.occupancyNumber == null ? '' : incident.content.response.occupancyNumber.occupancyNumberText;
        listMasterOccupancy.parcelNumber = incident.content.response.parcelNumber;
        copiedData.push(listMasterOccupancy);
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
export class MasterOccupancyDataSource extends DataSource<any> {

  private router: any; // double check
  
  constructor(private _incidentDatabase: MasterOccupancyDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IncidentQueryDataMasterOccupancy[]> {
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
