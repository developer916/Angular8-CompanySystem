import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IncidentQueryComponent} from './components/query/incident-query/incident-query.component';
import {IncidentQueryReviewComponent} from './components/query/incident-query-review/incident-query-review.component';
import {IncidentQueryAutoClosedComponent} from './components/query/incident-query-auto-closed/incident-query-auto-closed.component';
import {IncidentQueryHazmatComponent} from './components/query/incident-query-hazmat/incident-query-hazmat.component';
import {IncidentQueryControlledSubstanceInventoryComponent} from './components/query/incident-query-controlled-substance-inventory/incident-query-controlled-substance-inventory.component';
import {IncidentQueryReviewControlledSubstanceInventoryComponent} from './components/query/incident-query-review-controlled-substance-inventory/incident-query-review-controlled-substance-inventory.component';
import {IncidentQueryUnitStatusComponent} from './components/query/incident-query-unit-status/incident-query-unit-status.component';
import {IncidentQueryExposureReportsComponent} from './components/query/incident-query-exposure-reports/incident-query-exposure-reports.component';
import {IncidentQueryHydrantInspectionRecordComponent} from './components/query/incident-query-hydrant-inspection-record/incident-query-hydrant-inspection-record.component';
import {IncidentQueryPreIncidentSurveysComponent} from './components/query/incident-query-pre-incident-surveys/incident-query-pre-incident-surveys.component';
import {IncidentQueryHoseTestRecordComponent} from './components/query/incident-query-hose-test-record/incident-query-hose-test-record.component';
import {IncidentQueryTrainingCalendarComponent} from './components/query/incident-query-training-calendar/incident-query-training-calendar.component';
import {IncidentQueryFieldDrillReviewComponent} from './components/query/incident-query-field-drill-review/incident-query-field-drill-review.component';
import {IncidentQueryReadOnlyComponent} from './components/query/incident-query-read-only/incident-query-read-only.component';
import {IncidentQueryReadOnlyOccupancyReportsComponent} from './components/query/incident-query-read-only-occupancy-reports/incident-query-read-only-occupancy-reports.component';
import {IncidentQueryInspectionViolationSummaryComponent} from './components/query/incident-query-inspection-violation-summary/incident-query-inspection-violation-summary.component';
import {IncidentQueryPublicReportsComponent} from './components/query/incident-query-public-reports/incident-query-public-reports.component';
import {IncidentQueryControlledSubstanceAccountabilityComponent} from './components/query/incident-query-controlled-substance-accountability/incident-query-controlled-substance-accountability.component';
import {IncidentQueryOccupancyStructureSystemComponent} from './components/query/incident-query-occupancy-structure-system/incident-query-occupancy-structure-system.component';
import {IncidentQueryControlledSubstanceDailyUsageComponent} from './components/query/incident-query-controlled-substance-daily-usage/incident-query-controlled-substance-daily-usage.component';
import {IncidentQueryControlledSubstanceDrugControlNumberComponent} from './components/query/incident-query-controlled-substance-drug-control-number/incident-query-controlled-substance-drug-control-number.component';
import {IncidentQueryReadOnlyUnitStatusComponent} from './components/query/incident-query-read-only-unit-status/incident-query-read-only-unit-status.component';
import {IncidentQueryHydrantInspectionSummaryComponent} from './components/query/incident-query-hydrant-inspection-summary/incident-query-hydrant-inspection-summary.component';
import {IncidentQueryPreIncidentSurveySummaryComponent} from './components/query/incident-query-pre-incident-survey-summary/incident-query-pre-incident-survey-summary.component';
import {IncidentQueryHoseTestSummaryComponent} from './components/query/incident-query-hose-test-summary/incident-query-hose-test-summary.component';
import {IncidentQueryTrainingEventsComponent} from './components/query/incident-query-training-events/incident-query-training-events.component';
import {IncidentQueryTrainingContinuingEducationComponent} from './components/query/incident-query-training-continuing-education/incident-query-training-continuing-education.component';
import {IncidentQueryFieldDrillEntryComponent} from './components/query/incident-query-field-drill-entry/incident-query-field-drill-entry.component';
import {IncidentQueryCallFrequencySummaryComponent} from './components/query/incident-query-call-frequency-summary/incident-query-call-frequency-summary.component';
import {IncidentQueryMutualAidSummaryComponent} from './components/query/incident-query-mutual-aid-summary/incident-query-mutual-aid-summary.component';
import {IncidentQueryComparativeIncidentsSummaryComponent} from './components/query/incident-query-comparative-incidents-summary/incident-query-comparative-incidents-summary.component';
import {IncidentQueryArchiveDocumentsComponent} from './components/query/incident-query-archive-documents/incident-query-archive-documents.component';
import {IncidentQuerySummaryDetailComponent} from './components/query/incident-query-summary-detail/incident-query-summary-detail.component';
import {IncidentQueryManageIncidentArchiveAttachmentsComponent} from './components/query/incident-query-manage-incident-archive-attachments/incident-query-manage-incident-archive-attachments.component';
import {IncidentQueryHazmatDocumentArchiveComponent} from './components/query/incident-query-hazmat-document-archive/incident-query-hazmat-document-archive.component';
import {IncidentQueryManageHazmatDocumentArchiveAttachmentsComponent} from './components/query/incident-query-manage-hazmat-document-archive-attachments/incident-query-manage-hazmat-document-archive-attachments.component';
import {IncidentQueryCadIncidentsComponent} from './components/query/incident-query-cad-incidents/incident-query-cad-incidents.component';
import {IncidentQueryAgencyPersonnelComponent} from './components/query/incident-query-agency-personnel/incident-query-agency-personnel.component';
import {IncidentListAgencyPersonnelComponent} from './components/list/incident-list-agency-personnel/incident-list-agency-personnel.component';
import {IncidentEditAgencyPersonnelComponent} from './components/edit/incident-edit-agency-personnel/incident-edit-agency-personnel.component';
import {IncidentListComponent} from './components/list/incident-list/incident-list.component';
import {IncidentListReviewComponent} from './components/list/incident-list-review/incident-list-review.component';
import {IncidentListAutoCloseReportsComponent} from './components/list/incident-list-auto-close-reports/incident-list-auto-close-reports.component';
import {IncidentListHazmatReportsComponent} from './components/list/incident-list-hazmat-reports/incident-list-hazmat-reports.component';
import {IncidentListControlledSubstanceInventoryComponent} from './components/list/incident-list-controlled-substance-inventory/incident-list-controlled-substance-inventory.component';
import {IncidentListUnitStatusComponent} from './components/list/incident-list-unit-status/incident-list-unit-status.component';
import {IncidentListExposureReportsComponent} from './components/list/incident-list-exposure-reports/incident-list-exposure-reports.component';
import {IncidentListHydrantInspectionRecordComponent} from './components/list/incident-list-hydrant-inspection-record/incident-list-hydrant-inspection-record.component';
import {IncidentListReviewControlledSubstanceInventoryComponent} from './components/list/incident-list-review-controlled-substance-inventory/incident-list-review-controlled-substance-inventory.component';
import {IncidentListPreIncidentSurveyRecordComponent} from './components/list/incident-list-pre-incident-survey-record/incident-list-pre-incident-survey-record.component';
import {IncidentListHoseTestRecordComponent} from './components/list/incident-list-hose-test-record/incident-list-hose-test-record.component';
import {IncidentListTrainingCalendarComponent} from './components/list/incident-list-training-calendar/incident-list-training-calendar.component';
import {IncidentListFieldDrillEntryComponent} from './components/list/incident-list-field-drill-entry/incident-list-field-drill-entry.component';
import {IncidentListFieldDrillReviewComponent} from './components/list/incident-list-field-drill-review/incident-list-field-drill-review.component';
import {IncidentListReadOnlyComponent} from './components/list/incident-list-read-only/incident-list-read-only.component';
import {IncidentListReadOnlyOccupancyComponent} from './components/list/incident-list-read-only-occupancy/incident-list-read-only-occupancy.component';
import {IncidentListPublicReportsComponent} from './components/list/incident-list-public-reports/incident-list-public-reports.component';
import {IncidentListControlledSubstanceAccountabilityComponent} from './components/list/incident-list-controlled-substance-accountability/incident-list-controlled-substance-accountability.component';
import {IncidentListTrainingDrillHoursComponent} from './components/list/incident-list-training-drill-hours/incident-list-training-drill-hours.component';
import {IncidentListTrainingContinuingEducationComponent} from './components/list/incident-list-training-continuing-education/incident-list-training-continuing-education.component';
import {IncidentListArchiveReportsComponent} from './components/list/incident-list-archive-reports/incident-list-archive-reports.component';
import {IncidentListManageIncidentArchiveAttachmentsComponent} from './components/list/incident-list-manage-incident-archive-attachments/incident-list-manage-incident-archive-attachments.component';
import {IncidentListHazmatDocumentArchiveComponent} from './components/list/incident-list-hazmat-document-archive/incident-list-hazmat-document-archive.component';
import {IncidentListOpenCadIncidentsComponent} from './components/list/incident-list-open-cad-incidents/incident-list-open-cad-incidents.component';
import {IncidentListManageHazmatDocumentArchiveAttachmentsComponent} from './components/list/incident-list-manage-hazmat-document-archive-attachments/incident-list-manage-hazmat-document-archive-attachments.component';
import {IncidentQueryAgencyStationsComponent} from './components/query/incident-query-agency-stations/incident-query-agency-stations.component';
import {IncidentListAgencyStationsComponent} from './components/list/incident-list-agency-stations/incident-list-agency-stations.component';
import {IncidentEditAgencyStationsComponent} from './components/edit/incident-edit-agency-stations/incident-edit-agency-stations.component';
import {IncidentQueryAgencyUnitsComponent} from './components/query/incident-query-agency-units/incident-query-agency-units.component';
import {IncidentListAgencyUnitsComponent} from './components/list/incident-list-agency-units/incident-list-agency-units.component';
import {IncidentEditAgencyUnitsComponent} from './components/edit/incident-edit-agency-units/incident-edit-agency-units.component';
import {IncidentQueryAgencyGlobalContactsComponent} from './components/query/incident-query-agency-global-contacts/incident-query-agency-global-contacts.component';
import {IncidentListAgencyGlobalContactsComponent} from './components/list/incident-list-agency-global-contacts/incident-list-agency-global-contacts.component';
import {IncidentQueryAgencyMaintenanceUnitsComponent} from './components/query/incident-query-agency-maintenance-units/incident-query-agency-maintenance-units.component';
import {IncidentListAgencyMaintenanceUnitsComponent} from './components/list/incident-list-agency-maintenance-units/incident-list-agency-maintenance-units.component';
import {IncidentEditAgencyMaintenanceUnitsComponent} from './components/edit/incident-edit-agency-maintenance-units/incident-edit-agency-maintenance-units.component';
import {IncidentQueryPrePlanInventoryComponent} from './components/query/incident-query-pre-plan-inventory/incident-query-pre-plan-inventory.component';
import {IncidentListPrePlanInventoryComponent} from './components/list/incident-list-pre-plan-inventory/incident-list-pre-plan-inventory.component';
import {IncidentEditPrePlanInventoryComponent} from './components/edit/incident-edit-pre-plan-inventory/incident-edit-pre-plan-inventory.component';
import {IncidentQueryHydrantInventoryComponent} from './components/query/incident-query-hydrant-inventory/incident-query-hydrant-inventory.component';
import {IncidentListHydrantInventoryComponent} from './components/list/incident-list-hydrant-inventory/incident-list-hydrant-inventory.component';
import {IncidentEditAgencyHydrantInventoryComponent} from './components/edit/incident-edit-agency-hydrant-inventory/incident-edit-agency-hydrant-inventory.component';
import {IncidentQueryAgencyMaintenanceUnitHoseComponent} from './components/query/incident-query-agency-maintenance-unit-hose/incident-query-agency-maintenance-unit-hose.component';
import {IncidentListAgencyMaintenanceUnitHoseComponent} from './components/list/incident-list-agency-maintenance-unit-hose/incident-list-agency-maintenance-unit-hose.component';
import {IncidentEditAgencyMaintenanceUnitHoseComponent} from './components/edit/incident-edit-agency-maintenance-unit-hose/incident-edit-agency-maintenance-unit-hose.component';
import {IncidentQueryMasterOccupancyInventoryComponent} from './components/query/incident-query-master-occupancy-inventory/incident-query-master-occupancy-inventory.component';
import {IncidentListMasterOccupancyComponent} from './components/list/incident-list-master-occupancy/incident-list-master-occupancy.component';
import {IncidentEditMasterOccupancyComponent} from './components/edit/incident-edit-master-occupancy/incident-edit-master-occupancy.component';
import {IncidentQueryAgencyDocumentTemplatesComponent} from './components/query/incident-query-agency-document-templates/incident-query-agency-document-templates.component';
import {IncidentListAgencyDocumentTemplatesComponent} from './components/list/incident-list-agency-document-templates/incident-list-agency-document-templates.component';
import {IncidentQueryUsersComponent} from './components/query/incident-query-users/incident-query-users.component';
import {IncidentListUsersComponent} from './components/list/incident-list-users/incident-list-users.component';
import {IncidentEditUsersComponent} from './components/edit/incident-edit-users/incident-edit-users.component';
import {IncidentQuerySecureReportsComponent} from './components/query/incident-query-secure-reports/incident-query-secure-reports.component';
import {IncidentListSecureReportsComponent} from './components/list/incident-list-secure-reports/incident-list-secure-reports.component';
import {IncidentQueryChangePasswordComponent} from './components/query/incident-query-change-password/incident-query-change-password.component';
import {IncidentQueryExtractIncidentsNfirsComponent} from './components/query/incident-query-extract-incidents-nfirs/incident-query-extract-incidents-nfirs.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from '../core/core.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {CdkTableModule} from '@angular/cdk/table';
import { FormDateOffsetComponent } from './components/common/form-date-offset/form-date-offset.component';
import { FormDateRangeComponent } from './components/common/form-date-range/form-date-range.component';
import { FormUnitComponent } from './components/common/form-unit/form-unit.component';
import { FormStationComponent } from './components/common/form-station/form-station.component';
import { FormBattalionComponent } from './components/common/form-battalion/form-battalion.component';
import { FormDivisionComponent } from './components/common/form-division/form-division.component';
import { FormIncidentExposureComponent } from './components/common/form-incident-exposure/form-incident-exposure.component';
import { FormYearComponent } from './components/common/form-year/form-year.component';
import { FormUseLoginComponent } from './components/common/form-use-login/form-use-login.component';
import { FormPersonnelIdComponent } from './components/common/form-personnel-id/form-personnel-id.component';
import { FormCityComponent } from './components/common/form-city/form-city.component';
import { FormMaxResultsComponent } from './components/common/form-max-results/form-max-results.component';
import { FormStatusComponent } from './components/common/form-status/form-status.component';
import { FormShiftComponent } from './components/common/form-shift/form-shift.component';
import { FormIncidentTypeComponent } from './components/common/form-incident-type/form-incident-type.component';
import { FormChemicalNameComponent } from './components/common/form-chemical-name/form-chemical-name.component';
import { FormDotClassComponent } from './components/common/form-dot-class/form-dot-class.component';
import { FormChemicalBeginsWithComponent } from './components/common/form-chemical-begins-with/form-chemical-begins-with.component';
import { FormContainerTypeComponent } from './components/common/form-container-type/form-container-type.component';
import { FormUnNumberComponent } from './components/common/form-un-number/form-un-number.component';
import { FormAddressComponent } from './components/common/form-address/form-address.component';
import { FormMaintenanceNumberComponent } from './components/common/form-maintenance-number/form-maintenance-number.component';
import { FormLocationComponent } from './components/common/form-location/form-location.component';
import { FormInspectionQuarterComponent } from './components/common/form-inspection-quarter/form-inspection-quarter.component';
import { FormHydrantNumberComponent } from './components/common/form-hydrant-number/form-hydrant-number.component';
import { FormHydrantGroupComponent } from './components/common/form-hydrant-group/form-hydrant-group.component';
import { FormMapPageComponent } from './components/common/form-map-page/form-map-page.component';
import { FormPreplanNumberComponent } from './components/common/form-preplan-number/form-preplan-number.component';
import { FormPreplanStageComponent } from './components/common/form-preplan-stage/form-preplan-stage.component';
import { FormSearchMonthComponent } from './components/common/form-search-month/form-search-month.component';
import { FormDrillComponent } from './components/common/form-drill/form-drill.component';
import { FormSearchRequirementComponent } from './components/common/form-search-requirement/form-search-requirement.component';
import { FormSearchMethodComponent } from './components/common/form-search-method/form-search-method.component';
import { FormEventComponent } from './components/common/form-event/form-event.component';
import { FormActivityTypeComponent } from './components/common/form-activity-type/form-activity-type.component';
import { FormStageComponent } from './components/common/form-stage/form-stage.component';
import { FormBusinessNameComponent } from './components/common/form-business-name/form-business-name.component';
import { FormPhoneNumberComponent } from './components/common/form-phone-number/form-phone-number.component';
import { FormOccupancyClassComponent } from './components/common/form-occupancy-class/form-occupancy-class.component';
import { FormDistrictComponent } from './components/common/form-district/form-district.component';
import { FormLinkedOccupancyComponent } from './components/common/form-linked-occupancy/form-linked-occupancy.component';
import { FormParcelNumberComponent } from './components/common/form-parcel-number/form-parcel-number.component';
import { FormTaxIdComponent } from './components/common/form-tax-id/form-tax-id.component';
import { FormSubdivisionComponent } from './components/common/form-subdivision/form-subdivision.component';
import { FormOccupancyNumbersComponent } from './components/common/form-occupancy-numbers/form-occupancy-numbers.component';
import { FormWithinCityComponent } from './components/common/form-within-city/form-within-city.component';
import { FormInspectionZoneComponent } from './components/common/form-inspection-zone/form-inspection-zone.component';
import { FormFireMgmtZoneComponent } from './components/common/form-fire-mgmt-zone/form-fire-mgmt-zone.component';
import { FormInspectionCycleComponent } from './components/common/form-inspection-cycle/form-inspection-cycle.component';
import { FormFireSeverityZoneComponent } from './components/common/form-fire-severity-zone/form-fire-severity-zone.component';
import { FormInspectionComplianceComponent } from './components/common/form-inspection-compliance/form-inspection-compliance.component';
import { FormSummaryIncludesComponent } from './components/common/form-summary-includes/form-summary-includes.component';
import { FormSetViolationsComponent } from './components/common/form-set-violations/form-set-violations.component';
import { FormPropertyUseComponent } from './components/common/form-property-use/form-property-use.component';
import { FormTotalSquareFeetComponent } from './components/common/form-total-square-feet/form-total-square-feet.component';
import { FormEngineeredSystemComponent } from './components/common/form-engineered-system/form-engineered-system.component';
import { FormSystemTypeComponent } from './components/common/form-system-type/form-system-type.component';
import { FormZipCodeComponent } from './components/common/form-zip-code/form-zip-code.component';
import { FormFirstNameComponent } from './components/common/form-first-name/form-first-name.component';
import { FormLastNameComponent } from './components/common/form-last-name/form-last-name.component';
import { FormLicenseNumberComponent } from './components/common/form-license-number/form-license-number.component';
import { FormLicensePlateComponent } from './components/common/form-license-plate/form-license-plate.component';
import { FormMorphineControlComponent } from './components/common/form-morphine-control/form-morphine-control.component';
import { FormMidazolameControlComponent } from './components/common/form-midazolame-control/form-midazolame-control.component';
import { FormCallFrequencyComponent } from './components/common/form-call-frequency/form-call-frequency.component';
import { FormFiscalYearComponent } from './components/common/form-fiscal-year/form-fiscal-year.component';
import { FormZoneComponent } from './components/common/form-zone/form-zone.component';
import { FormDispatchZoneComponent } from './components/common/form-dispatch-zone/form-dispatch-zone.component';
import { FormUrbanSuburbanRuralComponent } from './components/common/form-urban-suburban-rural/form-urban-suburban-rural.component';
import { FormMutualAidReceivedComponent } from './components/common/form-mutual-aid-received/form-mutual-aid-received.component';
import { FormMutualAidExtendedComponent } from './components/common/form-mutual-aid-extended/form-mutual-aid-extended.component';
import { FormCallResponseIncidentTypeComponent } from './components/common/form-call-response-incident-type/form-call-response-incident-type.component';
import { FormCallResponseCategoryComponent } from './components/common/form-call-response-category/form-call-response-category.component';
import { FormCallFireLossComponent } from './components/common/form-call-fire-loss/form-call-fire-loss.component';
import { FormCallFrequencyStationComponent } from './components/common/form-call-frequency-station/form-call-frequency-station.component';
import { FormCallHourComponent } from './components/common/form-call-hour/form-call-hour.component';
import { FormCallMonthComponent } from './components/common/form-call-month/form-call-month.component';
import { FormSearchGenderComponent } from './components/common/form-search-gender/form-search-gender.component';
import { FormSearchRankComponent } from './components/common/form-search-rank/form-search-rank.component';
import { FormRecruitComponent } from './components/common/form-recruit/form-recruit.component';
import { FormParamedicComponent } from './components/common/form-paramedic/form-paramedic.component';
import { FormNewDriverOperatorComponent } from './components/common/form-new-driver-operator/form-new-driver-operator.component';
import { FormEmtComponent } from './components/common/form-emt/form-emt.component';
import { FormSearchUnitTypeComponent } from './components/common/form-search-unit-type/form-search-unit-type.component';
import { FormSearchUnitUseComponent } from './components/common/form-search-unit-use/form-search-unit-use.component';
import { FormSearchEmailComponent } from './components/common/form-search-email/form-search-email.component';
import { FormSearchNameComponent } from './components/common/form-search-name/form-search-name.component';
import { FormPreplanGroupComponent } from './components/common/form-preplan-group/form-preplan-group.component';
import { FormSearchEngineTypeComponent } from './components/common/form-search-engine-type/form-search-engine-type.component';
import { FormTemplateNameComponent } from './components/common/form-template-name/form-template-name.component';
import { FormTemplateTypeComponent } from './components/common/form-template-type/form-template-type.component';
import { FormUserIdComponent } from './components/common/form-user-id/form-user-id.component';
import { FormGroupNameComponent } from './components/common/form-group-name/form-group-name.component';
import { FormAdministratorComponent } from './components/common/form-administrator/form-administrator.component';
import { FormAccessEncryptedDataComponent } from './components/common/form-access-encrypted-data/form-access-encrypted-data.component';
import { FormReportBuilderComponent } from './components/common/form-report-builder/form-report-builder.component';
import { FormPasswordComponent } from './components/common/form-password/form-password.component';
import {FormReviewStatusComponent} from './components/common/form-review-status/form-review-status.component';
import {QueryRoutingModule} from './query-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatOptionModule,
    MatCheckboxModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    QueryRoutingModule
  ],
  declarations: [
    IncidentQueryComponent,
    IncidentQueryReviewComponent,
    IncidentQueryAutoClosedComponent,
    IncidentQueryHazmatComponent,
    IncidentQueryControlledSubstanceInventoryComponent,
    IncidentQueryReviewControlledSubstanceInventoryComponent,
    IncidentQueryUnitStatusComponent,
    IncidentQueryExposureReportsComponent,
    IncidentQueryHydrantInspectionRecordComponent,
    IncidentQueryPreIncidentSurveysComponent,
    IncidentQueryHoseTestRecordComponent,
    IncidentQueryTrainingCalendarComponent,
    IncidentQueryFieldDrillReviewComponent,
    IncidentQueryReadOnlyComponent,
    IncidentQueryReadOnlyOccupancyReportsComponent,
    IncidentQueryInspectionViolationSummaryComponent,
    IncidentQueryPublicReportsComponent,
    IncidentQueryControlledSubstanceAccountabilityComponent,
    IncidentQueryOccupancyStructureSystemComponent,
    IncidentQueryControlledSubstanceDailyUsageComponent,
    IncidentQueryControlledSubstanceDrugControlNumberComponent,
    IncidentQueryReadOnlyUnitStatusComponent,
    IncidentQueryHydrantInspectionSummaryComponent,
    IncidentQueryPreIncidentSurveySummaryComponent,
    IncidentQueryHoseTestSummaryComponent,
    IncidentQueryTrainingEventsComponent,
    IncidentQueryTrainingContinuingEducationComponent,
    IncidentQueryFieldDrillEntryComponent,
    IncidentQueryCallFrequencySummaryComponent,
    IncidentQueryMutualAidSummaryComponent,
    IncidentQueryComparativeIncidentsSummaryComponent,
    IncidentQueryArchiveDocumentsComponent,
    IncidentQuerySummaryDetailComponent,
    IncidentQueryManageIncidentArchiveAttachmentsComponent,
    IncidentQueryHazmatDocumentArchiveComponent,
    IncidentQueryManageHazmatDocumentArchiveAttachmentsComponent,
    IncidentQueryCadIncidentsComponent,
    IncidentQueryAgencyPersonnelComponent,
    IncidentListAgencyPersonnelComponent,
    IncidentEditAgencyPersonnelComponent,
    IncidentListComponent,
    IncidentListReviewComponent,
    IncidentListAutoCloseReportsComponent,
    IncidentListHazmatReportsComponent,
    IncidentListControlledSubstanceInventoryComponent,
    IncidentListUnitStatusComponent,
    IncidentListExposureReportsComponent,
    IncidentListHydrantInspectionRecordComponent,
    IncidentListReviewControlledSubstanceInventoryComponent,
    IncidentListPreIncidentSurveyRecordComponent,
    IncidentListHoseTestRecordComponent,
    IncidentListTrainingCalendarComponent,
    IncidentListFieldDrillEntryComponent,
    IncidentListFieldDrillReviewComponent,
    IncidentListReadOnlyComponent,
    IncidentListReadOnlyOccupancyComponent,
    IncidentListPublicReportsComponent,
    IncidentListControlledSubstanceAccountabilityComponent,
    IncidentListTrainingDrillHoursComponent,
    IncidentListTrainingContinuingEducationComponent,
    IncidentListArchiveReportsComponent,
    IncidentListManageIncidentArchiveAttachmentsComponent,
    IncidentListHazmatDocumentArchiveComponent,
    IncidentListOpenCadIncidentsComponent,
    IncidentListManageHazmatDocumentArchiveAttachmentsComponent,
    IncidentQueryAgencyStationsComponent,
    IncidentListAgencyStationsComponent,
    IncidentEditAgencyStationsComponent,
    IncidentQueryAgencyUnitsComponent,
    IncidentListAgencyUnitsComponent,
    IncidentEditAgencyUnitsComponent,
    IncidentQueryAgencyGlobalContactsComponent,
    IncidentListAgencyGlobalContactsComponent,
    IncidentQueryAgencyMaintenanceUnitsComponent,
    IncidentListAgencyMaintenanceUnitsComponent,
    IncidentEditAgencyMaintenanceUnitsComponent,
    IncidentQueryPrePlanInventoryComponent,
    IncidentListPrePlanInventoryComponent,
    IncidentEditPrePlanInventoryComponent,
    IncidentQueryHydrantInventoryComponent,
    IncidentListHydrantInventoryComponent,
    IncidentEditAgencyHydrantInventoryComponent,
    IncidentQueryAgencyMaintenanceUnitHoseComponent,
    IncidentListAgencyMaintenanceUnitHoseComponent,
    IncidentEditAgencyMaintenanceUnitHoseComponent,
    IncidentQueryMasterOccupancyInventoryComponent,
    IncidentListMasterOccupancyComponent,
    IncidentEditMasterOccupancyComponent,
    IncidentQueryAgencyDocumentTemplatesComponent,
    IncidentListAgencyDocumentTemplatesComponent,
    IncidentQueryUsersComponent,
    IncidentListUsersComponent,
    IncidentEditUsersComponent,
    IncidentQuerySecureReportsComponent,
    IncidentListSecureReportsComponent,
    IncidentQueryChangePasswordComponent,
    IncidentQueryExtractIncidentsNfirsComponent,
    FormDateOffsetComponent,
    FormDateRangeComponent,
    FormUnitComponent,
    FormStationComponent,
    FormBattalionComponent,
    FormDivisionComponent,
    FormIncidentExposureComponent,
    FormYearComponent,
    FormUseLoginComponent,
    FormPersonnelIdComponent,
    FormCityComponent,
    FormMaxResultsComponent,
    FormStatusComponent,
    FormShiftComponent,
    FormIncidentTypeComponent,
    FormChemicalNameComponent,
    FormDotClassComponent,
    FormChemicalBeginsWithComponent,
    FormContainerTypeComponent,
    FormUnNumberComponent,
    FormAddressComponent,
    FormMaintenanceNumberComponent,
    FormLocationComponent,
    FormInspectionQuarterComponent,
    FormHydrantNumberComponent,
    FormHydrantGroupComponent,
    FormMapPageComponent,
    FormPreplanNumberComponent,
    FormPreplanStageComponent,
    FormSearchMonthComponent,
    FormDrillComponent,
    FormSearchRequirementComponent,
    FormSearchMethodComponent,
    FormEventComponent,
    FormActivityTypeComponent,
    FormStageComponent,
    FormBusinessNameComponent,
    FormPhoneNumberComponent,
    FormOccupancyClassComponent,
    FormDistrictComponent,
    FormLinkedOccupancyComponent,
    FormParcelNumberComponent,
    FormTaxIdComponent,
    FormSubdivisionComponent,
    FormOccupancyNumbersComponent,
    FormWithinCityComponent,
    FormInspectionZoneComponent,
    FormFireMgmtZoneComponent,
    FormInspectionCycleComponent,
    FormFireSeverityZoneComponent,
    FormInspectionComplianceComponent,
    FormSummaryIncludesComponent,
    FormSetViolationsComponent,
    FormPropertyUseComponent,
    FormTotalSquareFeetComponent,
    FormEngineeredSystemComponent,
    FormSystemTypeComponent,
    FormZipCodeComponent,
    FormFirstNameComponent,
    FormLastNameComponent,
    FormLicenseNumberComponent,
    FormLicensePlateComponent,
    FormMorphineControlComponent,
    FormMidazolameControlComponent,
    FormCallFrequencyComponent,
    FormFiscalYearComponent,
    FormZoneComponent,
    FormDispatchZoneComponent,
    FormUrbanSuburbanRuralComponent,
    FormMutualAidReceivedComponent,
    FormMutualAidExtendedComponent,
    FormCallResponseIncidentTypeComponent,
    FormCallResponseCategoryComponent,
    FormCallFireLossComponent,
    FormCallFrequencyStationComponent,
    FormCallHourComponent,
    FormCallMonthComponent,
    FormSearchGenderComponent,
    FormSearchRankComponent,
    FormRecruitComponent,
    FormParamedicComponent,
    FormNewDriverOperatorComponent,
    FormEmtComponent,
    FormSearchUnitTypeComponent,
    FormSearchUnitUseComponent,
    FormSearchEmailComponent,
    FormSearchNameComponent,
    FormPreplanGroupComponent,
    FormSearchEngineTypeComponent,
    FormTemplateNameComponent,
    FormTemplateTypeComponent,
    FormUserIdComponent,
    FormGroupNameComponent,
    FormAdministratorComponent,
    FormAccessEncryptedDataComponent,
    FormReportBuilderComponent,
    FormPasswordComponent,
    FormReviewStatusComponent
  ]
})
export class QueryModule { }
