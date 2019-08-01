import { Component } from '@angular/core';
import { IncidentDatabase, IncidentDataSource, IncidentListComponent } from 'app/query/components/list/incident-list/incident-list.component';
import { IncidentGraphQlquery } from 'app/query/graphql/incident-graph-qlquery';


@Component({
  selector: 'app-incident-list-read-only-incidents',
  templateUrl: './incident-list-read-only.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentListReadOnlyComponent extends IncidentListComponent {

  displayedColumns = ['incidentNumber', 'status', 'alarmDateTime', 'incidentType', 'incidentAddress', 'city'];
  alwaysShowPdf = true;

  /**
   * Called when the component is created
   */
  ngOnInit() {
    this.incidentQueryDatabase = new IncidentDatabase(this.ds, this.qs, this.ols, this.logger, 'Session.OS.Query.ReadOnly', IncidentGraphQlquery.queryIMIncidents, 'incidents');
    this.dataSource = new IncidentDataSource(this.incidentQueryDatabase, this.qrss);
    this.dataSource.sort = this.sort;
  }
}
