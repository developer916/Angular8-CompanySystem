import { DataSource } from '@angular/cdk/table';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { BehaviorSubject, merge as observableMerge, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../../../../core/services/data-service.service';
import { IncidentGraphQlquery } from '../../../graphql/incident-graph-qlquery';
import { IncidentQueryDataAgencyUnits } from '../../../model/incident-query-data-agency-units';
import { QueryService } from '../../../services/query.service';



@Component({
  selector: 'app-incident-list-agency-units',
  templateUrl: './incident-list-agency-units.component.html',
  styleUrls: ['./incident-list-agency-units.component.css']
})
export class IncidentListAgencyUnitsComponent implements OnInit, OnDestroy {

  displayedColumns = ['unitID', 'unitType', 'unitUse', 'autoNarrative', 'nonAgencyUnit', 'nonReportingUnit', 'delete'];
  incidentQueryDatabase: AgencyUnitsDatabase | null;
  dataSource: AgencyUnitsDataSource | null;
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
    this.incidentQueryDatabase = new AgencyUnitsDatabase(this.ds, this.qs);
    this.dataSource = new AgencyUnitsDataSource(this.incidentQueryDatabase, this.paginator);
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
   * @param {String} unitID
   */
  showIncidentDetail(unitID: number) {
    this.router.navigate(['/incident/' + unitID]);
  }

  submit(buttonType) {
    // Need to fix the date format from what the form gives us
    // if query
    // if (buttonType === 'Query') {
    //  this.router.navigate(['/incident/list-agency-units']);
    // }
    // if add -> goto edit page
    if (buttonType === 'Add') {
      this.router.navigate(['incident/edit-agency-units'])
    }
  }
}

/**
 * Class that retrieves incident data from the backend - currently via a GraphQL query
 */

export class AgencyUnitsDatabase {

  /**
   * The session that this database shows results for
   */
  QUERY_SESSION = 'Session.OS.Query.AgencyUnits';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  /**
   * Subscription to the GraphQL query for incident query data
   */
  private querySub: Subscription;

  /**
   * Observable object that holds incident query data
   * @type {BehaviorSubject<IncidentQueryData[]>}
   */
  dataChange: BehaviorSubject<IncidentQueryDataAgencyUnits[]> = new BehaviorSubject<IncidentQueryDataAgencyUnits[]>([]);
  
  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   */
  constructor(ds: DataService, qs: QueryService) {
    this.querySub = ds.graphQLQuery(IncidentGraphQlquery.queryIMIncidents, qs.getQueryParams(this.QUERY_SESSION)).subscribe(data => {
      const copiedData = this.data.slice();
      data['data']['incidents'].forEach(incident => {
        const listAgencyUnits: IncidentQueryDataAgencyUnits = new class implements IncidentQueryDataAgencyUnits {
          autoNarrative: string;
          delete: string;
          nonAgencyUnit: string;
          nonReportingUnit: string;
          unitID: number;
          unitType: string;
          unitUse: string;
        };

        listAgencyUnits.autoNarrative = incident.content.autoNarrative;
        listAgencyUnits.delete = incident.content.delete;
        listAgencyUnits.nonAgencyUnit = incident.content.nonAgencyUnit;
        listAgencyUnits.nonReportingUnit = incident.content.nonReportingUnit;
        listAgencyUnits.unitID = incident.content.response.unitID == null ? '' : incident.content.response.unitID.unitIDText;
        listAgencyUnits.unitType = incident.content.unitType;
        listAgencyUnits.unitUse = incident.content.unitUse;
        copiedData.push(listAgencyUnits);
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
export class AgencyUnitsDataSource extends DataSource<any> {
  private router: any; // double check
  constructor(private _incidentDatabase: AgencyUnitsDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IncidentQueryDataAgencyUnits[]> {
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
