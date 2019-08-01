import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { QueryService } from '../../../services/query.service';
import { DataService } from '../../../../core/services/data-service.service';
import { Router } from '@angular/router';
import { BehaviorSubject, merge as observableMerge, Observable, Subscription } from 'rxjs';
import { IncidentQueryDataAgencyStations } from '../../../model/incident-query-data-agency-stations';
import { IncidentGraphQlquery } from '../../../graphql/incident-graph-qlquery';
import { DataSource } from '@angular/cdk/table';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-incident-list-agency-stations',
  templateUrl: './incident-list-agency-stations.component.html',
  styleUrls: ['./incident-list-agency-stations.component.css']
})
export class IncidentListAgencyStationsComponent implements OnInit, OnDestroy {

  displayedColumns = ['stationID', 'address', 'city', 'delete'];
  incidentQueryDatabase: AgencyStationsDatabase | null;
  dataSource: AgencyStationsDataSource | null;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  /**
   *
   * @param router
   * @param {DataService} ds
   * @param qs
   */
  constructor(private router: Router, private ds: DataService, private qs: QueryService) {
  }

  /**
   * Called when the component is created
   */
  ngOnInit() {
    this.incidentQueryDatabase = new AgencyStationsDatabase(this.ds, this.qs);
    this.dataSource = new AgencyStationsDataSource(this.incidentQueryDatabase, this.paginator);
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
   * @param {String} stationID
   */
  showIncidentDetail(stationID: Number) {
    this.router.navigate(['/incident/' + stationID]);
  }

  submit(buttonType) {
    // Need to fix the date format from what the form gives us
    // if query
    // if (buttonType === 'Query') {
    //  this.router.navigate(['/incident/list-agency-personnel']);
    // }
    // if add -> goto edit page
    if (buttonType === 'Add') {
      this.router.navigate(['incident/edit-agency-stations'])
    }
  }
}

/**
 * Class that retrieves incident data from the backend - currently via a GraphQL query
 */
export class AgencyStationsDatabase {

  /**
   * The session that this database shows results for
   */
  QUERY_SESSION = 'Session.OS.Query.AgencyStations';  // TODO: Check that this is the correct value as defined in OnScene (if we care)
  
  /**
   * Subscription to the GraphQL query for incident query data
   */
  private querySub: Subscription;

  /**
   * Observable object that holds incident query data
   * @type {BehaviorSubject<IncidentQueryData[]>}
   */
  dataChange: BehaviorSubject<IncidentQueryDataAgencyStations[]> = new BehaviorSubject<IncidentQueryDataAgencyStations[]>([]);

  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   */
  constructor(ds: DataService, qs: QueryService) {
    this.querySub = ds.graphQLQuery(IncidentGraphQlquery.queryIMIncidents, qs.getQueryParams(this.QUERY_SESSION)).subscribe(data => {
      const copiedData = this.data.slice();
      data['data']['incidents'].forEach(incident => {
        const listAgencyStations: IncidentQueryDataAgencyStations = new class implements IncidentQueryDataAgencyStations {
          address: string;
          city: string;
          delete: boolean;
          stationID: number;
        };

        listAgencyStations.address = incident.content.address;
        listAgencyStations.city = incident.content.city;
        listAgencyStations.delete = incident.content.delete;
        listAgencyStations.stationID = incident.content.response.stationID == null ? '' : incident.content.response.stationID.stationIDText;
        copiedData.push(listAgencyStations);
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
export class AgencyStationsDataSource extends DataSource<any> {

  constructor(private _incidentDatabase: AgencyStationsDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IncidentQueryDataAgencyStations[]> {
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
