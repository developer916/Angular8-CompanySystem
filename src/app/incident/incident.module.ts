import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { IncidentComponent } from './components/incident/incident.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { IncidentBasicResponseComponent } from './components/incident-basic-response/incident-basic-response.component';
import { IncidentBasicPersonsInvolvedComponent } from './components/incident-basic-persons-involved/incident-basic-persons-involved.component';
import { IncidentBasicSummaryComponent } from './components/incident-basic-summary/incident-basic-summary.component';
import { IncidentBasicCadComponent } from './components/incident-basic-cad/incident-basic-cad.component';
import { IncidentAosDataBrokerService } from './services/incident-aos-data-broker.service';
import { IncidentRoutingModule } from 'app/incident/incident-routing.module';
import { IncidentResourcesNarrativeComponent } from './components/incident-resources-narrative/incident-resources-narrative.component';
import { IncidentResourcesUnitComponent } from './components/incident-resources-unit/incident-resources-unit.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IncidentBasicPersonsInvolvedDetailComponent } from './components/incident-basic-persons-involved-detail/incident-basic-persons-involved-detail.component';
import {
  IncidentResourcesNarrativeDetailComponent,
} from './components/incident-resources-narrative-detail/incident-resources-narrative-detail.component';
import { IncidentResourcesUnitDetailComponent } from './components/incident-resources-unit-detail/incident-resources-unit-detail.component';
import { IncidentBasicComponent } from './components/incident-basic/incident-basic.component';
import { IncidentResourcesComponent } from './components/incident-resources/incident-resources.component';
import { IncidentFireComponent } from './components/incident-fire/incident-fire.component';
import { IncidentFireEquipmentDetailsComponent } from './components/incident-fire-equipment-details/incident-fire-equipment-details.component';
import { IncidentFireIgnitionDetailsComponent } from './components/incident-fire-ignition-details/incident-fire-ignition-details.component';
import { IncidentStructureComponent } from './components/incident-structure/incident-structure.component';
import { IncidentStructureDescriptionStatusComponent } from './components/incident-structure-description-status/incident-structure-description-status.component';
import { IncidentStructureSystemsDamageComponent } from './components/incident-structure-systems-damage/incident-structure-systems-damage.component';
import { IncidentArsonComponent } from './components/incident-arson/incident-arson.component';
import { IncidentArsonAgencyReferredComponent } from './components/incident-arson-agency-referred/incident-arson-agency-referred.component';
import { IncidentArsonCaseDetailsComponent } from './components/incident-arson-case-details/incident-arson-case-details.component';
import { IncidentArsonJuvenileFiresetterComponent } from './components/incident-arson-juvenile-firesetter/incident-arson-juvenile-firesetter.component';
import { IncidentArsonJuvenileFiresetterDetailComponent } from './components/incident-arson-juvenile-firesetter-detail/incident-arson-juvenile-firesetter-detail.component';
import { IncidentResourcesPersonnelComponent } from './components/incident-resources-personnel/incident-resources-personnel.component';
import { IncidentResourcesPersonnelDetailComponent } from './components/incident-resources-personnel-detail/incident-resources-personnel-detail.component';
import { IncidentCivilianComponent } from './components/incident-civilian/incident-civilian.component';
import { IncidentCivilianFactorsComponent } from './components/incident-civilian-factors/incident-civilian-factors.component';
import { IncidentCivilianInjuryComponent } from './components/incident-civilian-injury/incident-civilian-injury.component';
import { IncidentCivilianInjuryDetailComponent } from './components/incident-civilian-injury-detail/incident-civilian-injury-detail.component';
import { IncidentCivilianFactorsDetailComponent } from './components/incident-civilian-factors-detail/incident-civilian-factors-detail.component';
import { IncidentFireServiceComponent } from './components/incident-fire-service/incident-fire-service.component';
import { IncidentFireServiceFactorsComponent } from './components/incident-fire-service-factors/incident-fire-service-factors.component';
import { IncidentFireServiceInjuryComponent } from './components/incident-fire-service-injury/incident-fire-service-injury.component';
import { IncidentProtectiveEquipmentComponent } from './components/incident-protective-equipment/incident-protective-equipment.component';
import { IncidentFireServiceFactorsDetailComponent } from './components/incident-fire-service-factors-detail/incident-fire-service-factors-detail.component';
import { IncidentProtectiveEquipmentDetailComponent } from './components/incident-protective-equipment-detail/incident-protective-equipment-detail.component';
import { IncidentFireServiceInjuryDetailComponent } from './components/incident-fire-service-injury-detail/incident-fire-service-injury-detail.component';
import { IncidentWildlandComponent } from './components/incident-wildland/incident-wildland.component';
import { IncidentWildlandIgnitionComponent } from './components/incident-wildland-ignition/incident-wildland-ignition.component';
import { IncidentWildlandPropertyComponent } from './components/incident-wildland-property/incident-wildland-property.component';
import { QueryService } from '../query/services/query.service';
import { IncidentHazmatComponent } from './components/incident-hazmat/incident-hazmat.component';
import { IncidentHazmatSpecialUnitReportComponent } from './components/incident-hazmat-special-unit-report/incident-hazmat-special-unit-report.component';
import { LoggedInGuard } from '../core/guards/logged-in.guard';
import { IncidentToolbarComponent } from './components/incident-toolbar/incident-toolbar.component';
import { StandardCallService } from './services/standard-call.service';
import { IncidentResourcesNarrativeOverwriteModalDialogComponent } from './components/incident-resources-narrative-overwrite-modal-dialog/incident-resources-narrative-overwrite-modal-dialog.component';
import { IncidentPdfComponent } from './components/incident-pdf/incident-pdf.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CoreModule,
    IncidentRoutingModule,
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
    MatDialogModule
  ],
  providers: [
    QueryService,
    StandardCallService,
    {
      provide: 'DataBrokerService',
      useClass: IncidentAosDataBrokerService
    },
    LoggedInGuard
  ],
  entryComponents: [
    IncidentResourcesNarrativeOverwriteModalDialogComponent
  ],
  exports: [
    IncidentToolbarComponent
  ],
  declarations: [
    IncidentComponent,
    IncidentBasicComponent,
    IncidentBasicResponseComponent,
    IncidentBasicPersonsInvolvedComponent,
    IncidentBasicSummaryComponent,
    IncidentBasicCadComponent,
    IncidentResourcesComponent,
    IncidentResourcesUnitComponent,
    IncidentResourcesUnitDetailComponent,
    IncidentResourcesNarrativeComponent,
    IncidentResourcesNarrativeDetailComponent,
    IncidentResourcesPersonnelComponent,
    IncidentResourcesPersonnelDetailComponent,
    IncidentBasicPersonsInvolvedDetailComponent,
    IncidentFireComponent,
    IncidentFireEquipmentDetailsComponent,
    IncidentFireIgnitionDetailsComponent,
    IncidentStructureComponent,
    IncidentStructureDescriptionStatusComponent,
    IncidentStructureSystemsDamageComponent,
    IncidentArsonComponent,
    IncidentArsonAgencyReferredComponent,
    IncidentArsonCaseDetailsComponent,
    IncidentArsonJuvenileFiresetterComponent,
    IncidentArsonJuvenileFiresetterDetailComponent,
    IncidentCivilianComponent,
    IncidentCivilianFactorsComponent,
    IncidentCivilianInjuryComponent,
    IncidentCivilianInjuryDetailComponent,
    IncidentCivilianFactorsDetailComponent,
    IncidentFireServiceComponent,
    IncidentFireServiceFactorsComponent,
    IncidentFireServiceInjuryComponent,
    IncidentProtectiveEquipmentComponent,
    IncidentFireServiceFactorsDetailComponent,
    IncidentProtectiveEquipmentDetailComponent,
    IncidentFireServiceInjuryDetailComponent,
    IncidentWildlandComponent,
    IncidentWildlandIgnitionComponent,
    IncidentWildlandPropertyComponent,
    IncidentHazmatComponent,
    IncidentHazmatSpecialUnitReportComponent,
    IncidentToolbarComponent,
    IncidentResourcesNarrativeOverwriteModalDialogComponent,
    IncidentPdfComponent
  ]
})
export class IncidentModule { }
