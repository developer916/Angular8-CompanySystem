import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HazMatComponent } from './components/hazmat/hazmat.component';
import { HazmatReportComponent } from './components/hazmat-report/hazmat-report.component';
import { ReleaseComponent } from './components/release/release.component';
import { InvolvedComponent } from './components/involved/involved.component';
import { AgencyComponent } from './components/agency/agency.component';
import { IdentificationComponent } from './components/identification/identification.component';
import { ItemsAndEquipmentComponent } from './components/items-and-equipment/items-and-equipment.component';
import { DetectionAndDevicesComponent } from './components/detection-and-devices/detection-and-devices.component';
import { PersonsInvolvedComponent } from './components/persons-involved/persons-involved.component';
import { NarrativeComponent } from './components/narrative/narrative.component';
import { BasicComponent } from './components/basic/basic.component';
import { ResponseComponent } from './components/response/response.component';
import { CadComponent } from './components/cad/cad.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IncidentModule } from '../incident/incident.module';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonsInvolvedDetailComponent } from './components/persons-involved-detail/persons-involved-detail.component';
import { ItemsAndEquipmentDetailComponent } from './components/items-and-equipment-detail/items-and-equipment-detail.component';
import { DetectionAndDevicesDetailComponent } from './components/detection-and-devices-detail/detection-and-devices-detail.component';
import { NarrativeDetailComponent } from './components/narrative-detail/narrative-detail.component';
import { HazmatRoutingModule } from './hazmat-routing.module';
import { IdentificationDetailComponent } from './components/identification-detail/identification-detail.component';
import { HazMatReportToolbarComponent } from './components/hazmat-report-toolbar/hazmat-report-toolbar.component';
import { HazMatDataBrokerService} from './services/hazmat-data-broker.service';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    IncidentModule,
    HazmatRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: 'HazMatDataBrokerService',
      useClass: HazMatDataBrokerService
    }
  ],
  declarations: [ HazMatComponent, HazmatReportComponent, ReleaseComponent, InvolvedComponent, AgencyComponent, IdentificationComponent, ItemsAndEquipmentComponent, DetectionAndDevicesComponent, PersonsInvolvedComponent, NarrativeComponent, BasicComponent, ResponseComponent, CadComponent, PersonsInvolvedDetailComponent, ItemsAndEquipmentDetailComponent, DetectionAndDevicesDetailComponent, NarrativeDetailComponent, IdentificationDetailComponent, HazMatReportToolbarComponent]
})
export class HazMatModule { 
}
