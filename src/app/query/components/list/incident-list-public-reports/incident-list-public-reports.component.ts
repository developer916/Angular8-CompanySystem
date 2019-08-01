import { Component, OnInit } from '@angular/core';
import { IncidentDatabase, IncidentDataSource, IncidentListComponent } from '../incident-list/incident-list.component';
import { QueryPublicIncidents } from '../../../graphql/public-incidents.graphql';
import { LookupService } from '../../../../core/services/lookup.service';
import { IncidentQueryData } from '../../../model/incident-query-data';
import { DataUtils } from '../../../../core/services/data-utils';

@Component({
  selector: 'app-incident-list-public-reports',
  templateUrl: './incident-list-public-reports.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentListPublicReportsComponent extends IncidentListComponent implements OnInit {

  displayedColumns = ['incidentNumber', 'status', 'alarmDateTime', 'incidentType', 'incidentAddress', 'cityStateZip'];
  alwaysShowPdf = true;

  ngOnInit() {
    this.logger.debug('Executing query review incidents');
    this.incidentQueryDatabase = new PublicIncidentDatabase(this.ds, this.qs, this.ols, this.logger, 'Session.OS.Query.PublicReports', QueryPublicIncidents.queryPublicIncidents, 'publicIncidents');
    this.dataSource = new IncidentDataSource(this.incidentQueryDatabase, this.qrss);
    this.dataSource.sort = this.sort;
  }
}
/**
 * Class that retrieves incident data from the backend - currently via a GraphQL query
 */
export class PublicIncidentDatabase extends IncidentDatabase {

  populateResults(incident: any, queryResultsData: any[], ols: LookupService) {
    const resultList: IncidentQueryData = new IncidentQueryData();
    resultList.id = incident.content.idHash;
    resultList.incidentNumber = this.formatIncidentNumber(incident);
    resultList.status = incident.content.response.status;
    resultList.alarmDateTime = DataUtils.formatDateTimeFoS(incident.content.response.alarmDateTime);
    resultList.incidentType = this.formatIncidentType(incident, ols);
    resultList.incidentAddress = incident.content.response.streetAddress == null ? '' : incident.content.response.streetAddress.addressText;
    resultList.cityStateZip = incident.content.response.city + ', ' + incident.content.response.state + ' ' + incident.content.response.zipCode;
    queryResultsData.push(resultList);
  }
}
