import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from '../core/guards/logged-in.guard';
import {HazMatComponent} from './components/hazmat/hazmat.component';
import {HazmatReportComponent} from './components/hazmat-report/hazmat-report.component';
import {ReleaseComponent} from './components/release/release.component';
import {PersonsInvolvedComponent} from './components/persons-involved/persons-involved.component';
import {NarrativeComponent} from './components/narrative/narrative.component';
import {InvolvedComponent} from './components/involved/involved.component';
import {AgencyComponent} from './components/agency/agency.component';
import {IdentificationComponent} from './components/identification/identification.component';
import {ItemsAndEquipmentComponent} from './components/items-and-equipment/items-and-equipment.component';
import {DetectionAndDevicesComponent} from './components/detection-and-devices/detection-and-devices.component';
import {BasicComponent} from './components/basic/basic.component';
import {ResponseComponent} from './components/response/response.component';
import {CadComponent} from './components/cad/cad.component';
import {NarrativeDetailComponent} from './components/narrative-detail/narrative-detail.component';
import {PersonsInvolvedDetailComponent} from './components/persons-involved-detail/persons-involved-detail.component';
import {ItemsAndEquipmentDetailComponent} from './components/items-and-equipment-detail/items-and-equipment-detail.component';
import {DetectionAndDevicesDetailComponent} from './components/detection-and-devices-detail/detection-and-devices-detail.component';
import {IdentificationDetailComponent} from './components/identification-detail/identification-detail.component';

const hazmatRoutes: Routes = [
  {
    path:  'hazmat/:id',
    component: HazMatComponent,
    canActivate: [LoggedInGuard],
    children: [
      {
        path: '',
        redirectTo: 'hazmat-report',
        pathMatch: 'full'
      },
      {
        path: 'hazmat-report',
        component: HazmatReportComponent,
        children: [
          {
            path: '',
            redirectTo: 'release',
            pathMatch: 'full'
          },
          {
            path: 'release',
            component: ReleaseComponent,
          },
          {
            path: 'involved',
            component: InvolvedComponent,
          },
          {
            path: 'agency',
            component: AgencyComponent,
          },
          {
            path: 'identification',
            component: IdentificationComponent,
            children: [
              {
                path: ':id',
                component: IdentificationDetailComponent
              }
            ]
          },
          {
            path: 'itemsequipment',
            component: ItemsAndEquipmentComponent,
            children: [
              {
                path: ':id',
                component: ItemsAndEquipmentDetailComponent
              }
            ]
          },
          {
            path: 'detectiondevices',
            component: DetectionAndDevicesComponent,
            children: [
              {
                path: ':id',
                component: DetectionAndDevicesDetailComponent
              }
            ]
          },
          {
            path: 'personsinvolved',
            component: PersonsInvolvedComponent,
            children: [
              {
                path: ':id',
                component: PersonsInvolvedDetailComponent
              }
            ]
          },
          {
            path: 'narrative',
            component: NarrativeComponent,
            children: [
              {
                path: ':id',
                component: NarrativeDetailComponent
              }
            ]
          },
        ]
      },
      {
        path: 'basic',
        component: BasicComponent,
        children: [
          {
            path: '',
            redirectTo: 'response',
            pathMatch: 'full'
          },
          {
            path: 'response',
            component: ResponseComponent,
          },
          {
            path: 'cad',
            component: CadComponent,
          }
        ]
      },
    ]
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(hazmatRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class HazmatRoutingModule {
}
