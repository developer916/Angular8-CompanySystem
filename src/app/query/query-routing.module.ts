import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentListComponent } from '../query/components/list/incident-list/incident-list.component';
import { IncidentQueryComponent } from '../query/components/query/incident-query/incident-query.component';
import { IncidentQueryReviewComponent } from '../query/components/query/incident-query-review/incident-query-review.component';
import { IncidentQueryAutoClosedComponent } from '../query/components/query/incident-query-auto-closed/incident-query-auto-closed.component';
import { IncidentQueryControlledSubstanceInventoryComponent } from '../query/components/query/incident-query-controlled-substance-inventory/incident-query-controlled-substance-inventory.component';
import { IncidentQueryReviewControlledSubstanceInventoryComponent } from '../query/components/query/incident-query-review-controlled-substance-inventory/incident-query-review-controlled-substance-inventory.component';
import { IncidentQueryHazmatComponent} from '../query/components/query/incident-query-hazmat/incident-query-hazmat.component';
import { IncidentQueryUnitStatusComponent } from '../query/components/query/incident-query-unit-status/incident-query-unit-status.component';
import { LoggedInGuard } from '../core/guards/logged-in.guard';
import {IncidentQueryExposureReportsComponent} from '../query/components/query/incident-query-exposure-reports/incident-query-exposure-reports.component';
import {IncidentQueryHydrantInspectionRecordComponent} from '../query/components/query/incident-query-hydrant-inspection-record/incident-query-hydrant-inspection-record.component';
import {IncidentQueryPreIncidentSurveysComponent} from '../query/components/query/incident-query-pre-incident-surveys/incident-query-pre-incident-surveys.component';
import {IncidentQueryHoseTestRecordComponent} from '../query/components/query/incident-query-hose-test-record/incident-query-hose-test-record.component';
import {IncidentQueryTrainingCalendarComponent} from '../query/components/query/incident-query-training-calendar/incident-query-training-calendar.component';
import {IncidentQueryFieldDrillReviewComponent} from '../query/components/query/incident-query-field-drill-review/incident-query-field-drill-review.component';
import {IncidentQueryReadOnlyComponent} from '../query/components/query/incident-query-read-only/incident-query-read-only.component';
import {IncidentQueryReadOnlyOccupancyReportsComponent} from '../query/components/query/incident-query-read-only-occupancy-reports/incident-query-read-only-occupancy-reports.component';
import {IncidentQueryInspectionViolationSummaryComponent} from '../query/components/query/incident-query-inspection-violation-summary/incident-query-inspection-violation-summary.component';
import {IncidentQueryPublicReportsComponent} from '../query/components/query/incident-query-public-reports/incident-query-public-reports.component';
import {IncidentQueryControlledSubstanceAccountabilityComponent} from '../query/components/query/incident-query-controlled-substance-accountability/incident-query-controlled-substance-accountability.component';
import {IncidentQueryOccupancyStructureSystemComponent} from '../query/components/query/incident-query-occupancy-structure-system/incident-query-occupancy-structure-system.component';
import {IncidentQueryControlledSubstanceDailyUsageComponent} from '../query/components/query/incident-query-controlled-substance-daily-usage/incident-query-controlled-substance-daily-usage.component';
import {IncidentQueryControlledSubstanceDrugControlNumberComponent} from '../query/components/query/incident-query-controlled-substance-drug-control-number/incident-query-controlled-substance-drug-control-number.component';
import {IncidentQueryReadOnlyUnitStatusComponent} from '../query/components/query/incident-query-read-only-unit-status/incident-query-read-only-unit-status.component';
import {IncidentQueryHydrantInspectionSummaryComponent} from '../query/components/query/incident-query-hydrant-inspection-summary/incident-query-hydrant-inspection-summary.component';
import {IncidentQueryPreIncidentSurveySummaryComponent} from '../query/components/query/incident-query-pre-incident-survey-summary/incident-query-pre-incident-survey-summary.component';
import {IncidentQueryHoseTestSummaryComponent} from '../query/components/query/incident-query-hose-test-summary/incident-query-hose-test-summary.component';
import {IncidentQueryTrainingEventsComponent} from '../query/components/query/incident-query-training-events/incident-query-training-events.component';
import {IncidentQueryTrainingContinuingEducationComponent} from '../query/components/query/incident-query-training-continuing-education/incident-query-training-continuing-education.component';
import {IncidentListReviewComponent} from '../query/components/list/incident-list-review/incident-list-review.component';
import {IncidentListAutoCloseReportsComponent} from '../query/components/list/incident-list-auto-close-reports/incident-list-auto-close-reports.component';
import {IncidentListHazmatReportsComponent} from '../query/components/list/incident-list-hazmat-reports/incident-list-hazmat-reports.component';
import {IncidentListControlledSubstanceInventoryComponent} from '../query/components/list/incident-list-controlled-substance-inventory/incident-list-controlled-substance-inventory.component';
import {IncidentListUnitStatusComponent} from '../query/components/list/incident-list-unit-status/incident-list-unit-status.component';
import {IncidentListExposureReportsComponent} from '../query/components/list/incident-list-exposure-reports/incident-list-exposure-reports.component';
import {IncidentListHydrantInspectionRecordComponent} from '../query/components/list/incident-list-hydrant-inspection-record/incident-list-hydrant-inspection-record.component';
import {IncidentListReviewControlledSubstanceInventoryComponent} from '../query/components/list/incident-list-review-controlled-substance-inventory/incident-list-review-controlled-substance-inventory.component';
import {IncidentListPreIncidentSurveyRecordComponent} from '../query/components/list/incident-list-pre-incident-survey-record/incident-list-pre-incident-survey-record.component';
import {IncidentListHoseTestRecordComponent} from '../query/components/list/incident-list-hose-test-record/incident-list-hose-test-record.component';
import {IncidentListTrainingCalendarComponent} from '../query/components/list/incident-list-training-calendar/incident-list-training-calendar.component';
import {IncidentListFieldDrillEntryComponent} from '../query/components/list/incident-list-field-drill-entry/incident-list-field-drill-entry.component';
import {IncidentQueryFieldDrillEntryComponent} from '../query/components/query/incident-query-field-drill-entry/incident-query-field-drill-entry.component';
import {IncidentListFieldDrillReviewComponent} from '../query/components/list/incident-list-field-drill-review/incident-list-field-drill-review.component';
import {IncidentListReadOnlyComponent} from '../query/components/list/incident-list-read-only/incident-list-read-only.component';
import {IncidentListReadOnlyOccupancyComponent} from '../query/components/list/incident-list-read-only-occupancy/incident-list-read-only-occupancy.component';
import {IncidentListControlledSubstanceAccountabilityComponent} from '../query/components/list/incident-list-controlled-substance-accountability/incident-list-controlled-substance-accountability.component';
import {IncidentListTrainingDrillHoursComponent} from '../query/components/list/incident-list-training-drill-hours/incident-list-training-drill-hours.component';
import {IncidentListTrainingContinuingEducationComponent} from '../query/components/list/incident-list-training-continuing-education/incident-list-training-continuing-education.component';
import {IncidentQueryCallFrequencySummaryComponent} from '../query/components/query/incident-query-call-frequency-summary/incident-query-call-frequency-summary.component';
import {IncidentQueryMutualAidSummaryComponent} from '../query/components/query/incident-query-mutual-aid-summary/incident-query-mutual-aid-summary.component';
import {IncidentQueryComparativeIncidentsSummaryComponent} from '../query/components/query/incident-query-comparative-incidents-summary/incident-query-comparative-incidents-summary.component';
import {IncidentQueryArchiveDocumentsComponent} from '../query/components/query/incident-query-archive-documents/incident-query-archive-documents.component';
import {IncidentListArchiveReportsComponent} from '../query/components/list/incident-list-archive-reports/incident-list-archive-reports.component';
import {IncidentQuerySummaryDetailComponent} from '../query/components/query/incident-query-summary-detail/incident-query-summary-detail.component';
import {IncidentQueryManageIncidentArchiveAttachmentsComponent} from '../query/components/query/incident-query-manage-incident-archive-attachments/incident-query-manage-incident-archive-attachments.component';
import {IncidentListManageIncidentArchiveAttachmentsComponent} from '../query/components/list/incident-list-manage-incident-archive-attachments/incident-list-manage-incident-archive-attachments.component';
import {IncidentQueryHazmatDocumentArchiveComponent} from '../query/components/query/incident-query-hazmat-document-archive/incident-query-hazmat-document-archive.component';
import {IncidentListHazmatDocumentArchiveComponent} from '../query/components/list/incident-list-hazmat-document-archive/incident-list-hazmat-document-archive.component';
import {IncidentQueryCadIncidentsComponent} from '../query/components/query/incident-query-cad-incidents/incident-query-cad-incidents.component';
import {IncidentListOpenCadIncidentsComponent} from '../query/components/list/incident-list-open-cad-incidents/incident-list-open-cad-incidents.component';
import {IncidentQueryManageHazmatDocumentArchiveAttachmentsComponent} from '../query/components/query/incident-query-manage-hazmat-document-archive-attachments/incident-query-manage-hazmat-document-archive-attachments.component';
import {IncidentListManageHazmatDocumentArchiveAttachmentsComponent} from '../query/components/list/incident-list-manage-hazmat-document-archive-attachments/incident-list-manage-hazmat-document-archive-attachments.component';
import {IncidentQueryAgencyPersonnelComponent} from '../query/components/query/incident-query-agency-personnel/incident-query-agency-personnel.component';
import {IncidentListAgencyPersonnelComponent} from '../query/components/list/incident-list-agency-personnel/incident-list-agency-personnel.component';
import {IncidentEditAgencyPersonnelComponent} from '../query/components/edit/incident-edit-agency-personnel/incident-edit-agency-personnel.component';
import {IncidentQueryAgencyStationsComponent} from '../query/components/query/incident-query-agency-stations/incident-query-agency-stations.component';
import {IncidentListAgencyStationsComponent} from '../query/components/list/incident-list-agency-stations/incident-list-agency-stations.component';
import {IncidentEditAgencyStationsComponent} from '../query/components/edit/incident-edit-agency-stations/incident-edit-agency-stations.component';
import {IncidentQueryAgencyUnitsComponent} from '../query/components/query/incident-query-agency-units/incident-query-agency-units.component';
import {IncidentEditAgencyUnitsComponent} from '../query/components/edit/incident-edit-agency-units/incident-edit-agency-units.component';
import {IncidentListAgencyUnitsComponent} from '../query/components/list/incident-list-agency-units/incident-list-agency-units.component';
import {IncidentQueryAgencyGlobalContactsComponent} from '../query/components/query/incident-query-agency-global-contacts/incident-query-agency-global-contacts.component';
import {IncidentListAgencyGlobalContactsComponent} from '../query/components/list/incident-list-agency-global-contacts/incident-list-agency-global-contacts.component';
import {IncidentQueryAgencyMaintenanceUnitsComponent} from '../query/components/query/incident-query-agency-maintenance-units/incident-query-agency-maintenance-units.component';
import {IncidentListAgencyMaintenanceUnitsComponent} from '../query/components/list/incident-list-agency-maintenance-units/incident-list-agency-maintenance-units.component';
import {IncidentEditAgencyMaintenanceUnitsComponent} from '../query/components/edit/incident-edit-agency-maintenance-units/incident-edit-agency-maintenance-units.component';
import {IncidentQueryPrePlanInventoryComponent} from '../query/components/query/incident-query-pre-plan-inventory/incident-query-pre-plan-inventory.component';
import {IncidentListPrePlanInventoryComponent} from '../query/components/list/incident-list-pre-plan-inventory/incident-list-pre-plan-inventory.component';
import {IncidentEditPrePlanInventoryComponent} from '../query/components/edit/incident-edit-pre-plan-inventory/incident-edit-pre-plan-inventory.component';
import {IncidentQueryHydrantInventoryComponent} from '../query/components/query/incident-query-hydrant-inventory/incident-query-hydrant-inventory.component';
import {IncidentListHydrantInventoryComponent} from '../query/components/list/incident-list-hydrant-inventory/incident-list-hydrant-inventory.component';
import {IncidentEditAgencyHydrantInventoryComponent} from '../query/components/edit/incident-edit-agency-hydrant-inventory/incident-edit-agency-hydrant-inventory.component';
import {IncidentQueryAgencyMaintenanceUnitHoseComponent} from '../query/components/query/incident-query-agency-maintenance-unit-hose/incident-query-agency-maintenance-unit-hose.component';
import {IncidentListAgencyMaintenanceUnitHoseComponent} from '../query/components/list/incident-list-agency-maintenance-unit-hose/incident-list-agency-maintenance-unit-hose.component';
import {IncidentEditAgencyMaintenanceUnitHoseComponent} from '../query/components/edit/incident-edit-agency-maintenance-unit-hose/incident-edit-agency-maintenance-unit-hose.component';
import {IncidentQueryMasterOccupancyInventoryComponent} from '../query/components/query/incident-query-master-occupancy-inventory/incident-query-master-occupancy-inventory.component';
import {IncidentListMasterOccupancyComponent} from '../query/components/list/incident-list-master-occupancy/incident-list-master-occupancy.component';
import {IncidentEditMasterOccupancyComponent} from '../query/components/edit/incident-edit-master-occupancy/incident-edit-master-occupancy.component';
import {IncidentQueryAgencyDocumentTemplatesComponent} from '../query/components/query/incident-query-agency-document-templates/incident-query-agency-document-templates.component';
import {IncidentListAgencyDocumentTemplatesComponent} from '../query/components/list/incident-list-agency-document-templates/incident-list-agency-document-templates.component';
import {IncidentQueryUsersComponent} from '../query/components/query/incident-query-users/incident-query-users.component';
import {IncidentListUsersComponent} from '../query/components/list/incident-list-users/incident-list-users.component';
import {IncidentEditUsersComponent} from '../query/components/edit/incident-edit-users/incident-edit-users.component';
import {IncidentQuerySecureReportsComponent} from '../query/components/query/incident-query-secure-reports/incident-query-secure-reports.component';
import {IncidentListSecureReportsComponent} from '../query/components/list/incident-list-secure-reports/incident-list-secure-reports.component';
import {IncidentQueryChangePasswordComponent} from '../query/components/query/incident-query-change-password/incident-query-change-password.component';
import {IncidentQueryExtractIncidentsNfirsComponent} from '../query/components/query/incident-query-extract-incidents-nfirs/incident-query-extract-incidents-nfirs.component';
import {IncidentListPublicReportsComponent} from '../query/components/list/incident-list-public-reports/incident-list-public-reports.component';


const queryRoutes: Routes = [
  {
    path: 'query/incidents',
    component: IncidentQueryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/review',
    component: IncidentQueryReviewComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/auto-closed',
    component: IncidentQueryAutoClosedComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/hazmat-reports',
    component: IncidentQueryHazmatComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/controlled-substance-inventory',
    component: IncidentQueryControlledSubstanceInventoryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/review-controlled-substance-inventory',
    component: IncidentQueryReviewControlledSubstanceInventoryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/unit-status',
    component: IncidentQueryUnitStatusComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/exposure-reports',
    component: IncidentQueryExposureReportsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/hydrant-inspection-record',
    component: IncidentQueryHydrantInspectionRecordComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/pre-incident-surveys',
    component: IncidentQueryPreIncidentSurveysComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/hose-test-record',
    component: IncidentQueryHoseTestRecordComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/training-calendar',
    component: IncidentQueryTrainingCalendarComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/field-drill-review',
    component: IncidentQueryFieldDrillReviewComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/read-only',
    component: IncidentQueryReadOnlyComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/read-only-occupancy-reports',
    component: IncidentQueryReadOnlyOccupancyReportsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/inspection-violation-summary',
    component: IncidentQueryInspectionViolationSummaryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/public-reports',
    component: IncidentQueryPublicReportsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/controlled-substance-accountability',
    component: IncidentQueryControlledSubstanceAccountabilityComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/occupancy-structure-system',
    component: IncidentQueryOccupancyStructureSystemComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/controlled-substance-daily-usage',
    component: IncidentQueryControlledSubstanceDailyUsageComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/controlled-substance-drug-control-number',
    component: IncidentQueryControlledSubstanceDrugControlNumberComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/read-only-unit-status',
    component: IncidentQueryReadOnlyUnitStatusComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/hydrant-inspection-summary',
    component: IncidentQueryHydrantInspectionSummaryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/pre-incident-survey-summary',
    component: IncidentQueryPreIncidentSurveySummaryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/hose-test-summary',
    component: IncidentQueryHoseTestSummaryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/training-events',
    component: IncidentQueryTrainingEventsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/training-continuing-education',
    component: IncidentQueryTrainingContinuingEducationComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/field-drill-entry',
    component: IncidentQueryFieldDrillEntryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/mutual-aid-summary',
    component: IncidentQueryMutualAidSummaryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/comparative-incidents-summary',
    component: IncidentQueryComparativeIncidentsSummaryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/archive-documents',
    component: IncidentQueryArchiveDocumentsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/summary-detail',
    component: IncidentQuerySummaryDetailComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/manage-incident-archive-attachments',
    component: IncidentQueryManageIncidentArchiveAttachmentsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/hazmat-document-archive',
    component: IncidentQueryHazmatDocumentArchiveComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/cad-incidents',
    component: IncidentQueryCadIncidentsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/manage-hazmat-document-archive-attachments',
    component: IncidentQueryManageHazmatDocumentArchiveAttachmentsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/agency-personnel',
    component: IncidentQueryAgencyPersonnelComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/agency-stations',
    component: IncidentQueryAgencyStationsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/agency-units',
    component: IncidentQueryAgencyUnitsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/agency-global-contacts',
    component: IncidentQueryAgencyGlobalContactsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/agency-maintenance-units',
    component: IncidentQueryAgencyMaintenanceUnitsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/pre-plan-inventory',
    component: IncidentQueryPrePlanInventoryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/hydrant-inventory',
    component: IncidentQueryHydrantInventoryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/agency-maintenance-unit-hose',
    component: IncidentQueryAgencyMaintenanceUnitHoseComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/master-occupancy-inventory',
    component: IncidentQueryMasterOccupancyInventoryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/agency-document-templates',
    component: IncidentQueryAgencyDocumentTemplatesComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/users',
    component: IncidentQueryUsersComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/secure-reports',
    component: IncidentQuerySecureReportsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/change-password',
    component: IncidentQueryChangePasswordComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/extract-incidents-nfirs',
    component: IncidentQueryExtractIncidentsNfirsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/incidents',
    component: IncidentListComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/review',
    component: IncidentListReviewComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/auto-closed',
    component: IncidentListAutoCloseReportsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/hazmat-reports',
    component: IncidentListHazmatReportsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/controlled-substance-inventory',
    component: IncidentListControlledSubstanceInventoryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/unit-status',
    component: IncidentListUnitStatusComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/exposure-reports',
    component: IncidentListExposureReportsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/hydrant-inspection-record',
    component: IncidentListHydrantInspectionRecordComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/review-controlled-substance-inventory',
    component: IncidentListReviewControlledSubstanceInventoryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/pre-incident-survey-record',
    component: IncidentListPreIncidentSurveyRecordComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/hose-test-record',
    component: IncidentListHoseTestRecordComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/training-calendar',
    component: IncidentListTrainingCalendarComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/field-drill-entry',
    component: IncidentListFieldDrillEntryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/field-drill-review',
    component: IncidentListFieldDrillReviewComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/read-only',
    component: IncidentListReadOnlyComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/read-only-occupancy',
    component: IncidentListReadOnlyOccupancyComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/public-reports',
    component: IncidentListPublicReportsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/controlled-substance-accountability',
    component: IncidentListControlledSubstanceAccountabilityComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/training-drill-hours',
    component: IncidentListTrainingDrillHoursComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/training-continuing-education',
    component: IncidentListTrainingContinuingEducationComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'query/call-frequency-summary',
    component: IncidentQueryCallFrequencySummaryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/archive-reports',
    component: IncidentListArchiveReportsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/manage-incident-archive-attachments',
    component: IncidentListManageIncidentArchiveAttachmentsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/hazmat-document-archive',
    component: IncidentListHazmatDocumentArchiveComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/open-cad-incidents',
    component: IncidentListOpenCadIncidentsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/manage-hazmat-document-archive-attachments',
    component: IncidentListManageHazmatDocumentArchiveAttachmentsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/agency-personnel',
    component: IncidentListAgencyPersonnelComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/agency-global-contacts',
    component: IncidentListAgencyGlobalContactsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/agency-maintenance-units',
    component: IncidentListAgencyMaintenanceUnitsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/pre-plan-inventory',
    component: IncidentListPrePlanInventoryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/agency-maintenance-unit-hose',
    component: IncidentListAgencyMaintenanceUnitHoseComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/agency-stations',
    component: IncidentListAgencyStationsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/agency-units',
    component: IncidentListAgencyUnitsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/hydrant-inventory',
    component: IncidentListHydrantInventoryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/master-occupancy',
    component: IncidentListMasterOccupancyComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/users',
    component: IncidentListUsersComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/agency-document-templates',
    component: IncidentListAgencyDocumentTemplatesComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'list/secure-reports',
    component: IncidentListSecureReportsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'agency-personnel',
    component: IncidentEditAgencyPersonnelComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'agency-stations',
    component: IncidentEditAgencyStationsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'agency-units',
    component: IncidentEditAgencyUnitsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'agency-maintenance-units',
    component: IncidentEditAgencyMaintenanceUnitsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'pre-plan-inventory',
    component: IncidentEditPrePlanInventoryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'agency-hydrant-inventory',
    component: IncidentEditAgencyHydrantInventoryComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'agency-maintenance-unit-hose',
    component: IncidentEditAgencyMaintenanceUnitHoseComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'master-occupancy',
    component: IncidentEditMasterOccupancyComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'users',
    component: IncidentEditUsersComponent,
    canActivate: [LoggedInGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(queryRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class QueryRoutingModule {
}
