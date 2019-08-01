import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {Router} from '@angular/router';
import {DataService} from '../../../../core/services/data-service.service';
import {QueryService} from '../../../services/query.service';

import {BehaviorSubject, merge as observableMerge, Observable, Subscription} from 'rxjs';
import {IncidentQueryDataAgencyDocumentTemplates} from '../../../model/incident-query-data-agency-document-templates';
import {DataSource} from '@angular/cdk/table';
import {map} from 'rxjs/operators';
import {IncidentGraphQlquery} from '../../../graphql/incident-graph-qlquery';



@Component({
  selector: 'app-incident-list-agency-document-templates',
  templateUrl: './incident-list-agency-document-templates.component.html',
  styleUrls: ['./incident-list-agency-document-templates.component.css']
})
export class IncidentListAgencyDocumentTemplatesComponent implements OnInit, OnDestroy {

  displayedColumns = ['print', 'templateName', 'version', 'templateType', 'attach', 'delete'];
  incidentQueryDatabase: AgencyDocumentTemplatesDatabase | null;
  dataSource: AgencyDocumentTemplatesDataSource | null;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

/**
 *
 * @param {DataService} ds
 * */

  constructor(private router: Router, private ds: DataService, private qs: QueryService) {
    }

  /**
   * Called when the component is created
   */

  ngOnInit() {
    this.incidentQueryDatabase = new AgencyDocumentTemplatesDatabase(this.ds, this.qs);
    this.dataSource = new AgencyDocumentTemplatesDataSource(this.incidentQueryDatabase, this.paginator);
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
export class AgencyDocumentTemplatesDatabase {

  /**
   * The session that this database shows results for
   */
  QUERY_SESSION = 'Session.OS.Query.AgencyDocumentTemplates';  // TODO: Check that this is the correct value as defined in OnScene (if we care)

  /**
   * Subscription to the GraphQL query for incident query data
   */
  private querySub: Subscription;

  /**
   * Observable object that holds incident query data
   * @type {BehaviorSubject<IncidentQueryData[]>}
   */
  dataChange: BehaviorSubject<IncidentQueryDataAgencyDocumentTemplates[]> = new BehaviorSubject<IncidentQueryDataAgencyDocumentTemplates[]>([]);

  /**
   * Constructor. Sets up the GraphQL query for incident query data and subscribes to query results
   *
   * @param {DataService} ds
   */
  constructor(ds: DataService, qs: QueryService) {
    this.querySub = ds.graphQLQuery(IncidentGraphQlquery.queryIMIncidents, qs.getQueryParams(this.QUERY_SESSION)).subscribe(data => {
      const copiedData = this.data.slice();
      data['data']['incidents'].forEach(incident => {
        const listAgencyDocumentTemplates: IncidentQueryDataAgencyDocumentTemplates = new class implements IncidentQueryDataAgencyDocumentTemplates {
          attach: string;
          delete: string;
          print: string;
          templateName: string;
          templateType: string;
          version: string;
        };

        listAgencyDocumentTemplates.attach = incident.content.response.attach;
        listAgencyDocumentTemplates.delete = incident.content.response.delete;
        listAgencyDocumentTemplates.print = incident.content.response.print;
        listAgencyDocumentTemplates.templateName = incident.content.response.templateName;
        listAgencyDocumentTemplates.templateType = incident.content.response.templateType;
        listAgencyDocumentTemplates.version = incident.content.response.version;
        copiedData.push(listAgencyDocumentTemplates);
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
export class AgencyDocumentTemplatesDataSource extends DataSource<any> {
  constructor(private _incidentDatabase: AgencyDocumentTemplatesDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IncidentQueryDataAgencyDocumentTemplates[]> {
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

