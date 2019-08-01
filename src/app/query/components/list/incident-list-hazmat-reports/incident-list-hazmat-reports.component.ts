import { Component, OnInit } from '@angular/core';
import { DataUtils } from '../../../../core/services/data-utils';
import { LookupService } from '../../../../core/services/lookup.service';
import { QueryHazmatUnitOperations } from '../../../graphql/hazmat-unit-operations.graphql';
import { IncidentQueryData } from '../../../model/incident-query-data';
import { IncidentDatabase, IncidentDataSource, IncidentListComponent } from '../incident-list/incident-list.component';

@Component({
  selector: 'app-incident-list-hazmat-reports',
  templateUrl: './incident-list-hazmat-reports.component.html',
  styleUrls: ['../../../query.module.css']
})
export class IncidentListHazmatReportsComponent extends IncidentListComponent implements OnInit {

  displayedColumns = ['incidentNumber', 'reportBy', 'alarmDateTime', 'incidentAddress', 'status'];
  alwaysShowPdf = true;

  ngOnInit() {
    this.logger.debug('Executing query Hazmat incidents');
    this.incidentQueryDatabase = new HazMatDatabase(this.ds, this.qs, this.ols, this.logger, 'Session.OS.Query.Hazmat', QueryHazmatUnitOperations.queryHazmatUnitOperations, 'hazmatUnitOperations');
    this.dataSource = new IncidentDataSource(this.incidentQueryDatabase, this.qrss);
    this.dataSource.sort = this.sort;
  }

  showHazmatForm(incidentNumber: string) {
    this.router.navigate(['/hazmat/' + incidentNumber]);
  }
}

/**
 * Class that retrieves incident data from the backend - currently via a GraphQL query
 */
export class HazMatDatabase extends IncidentDatabase {

  populateResults(incident: any, queryResultsData: any[], ols: LookupService) {
    this.logger.debug(incident);
    const resultList: IncidentQueryData = new IncidentQueryData();
    resultList.id = incident.content.idHash;
    resultList.incidentNumber = this.formatIncidentNumber(incident);
    resultList.reportBy = this.formatReportBy(incident.content.inputForms[0].inputFormHazMatUnitOperation);
    this.logger.debug(incident.content.response.alarmDateTime);
    resultList.alarmDateTime = DataUtils.formatDateTimeFoS(incident.content.response.alarmDateTime);
    resultList.incidentAddress = incident.content.response.streetAddress == null ? '' : incident.content.response.streetAddress.addressText;
    resultList.status = incident.content.inputForms[0].status;
    queryResultsData.push(resultList);
  }

  private formatReportBy(inputForm: any) {
    return inputForm.unitId + ': ' + inputForm.reportByPersonnelId + ' - ' + inputForm.reportByFirstName + ' ' + inputForm.reportByLastName;
  }
}
