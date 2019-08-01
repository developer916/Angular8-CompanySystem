import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentComponent } from './components/incident/incident.component';
import { IncidentBasicResponseComponent } from './components/incident-basic-response/incident-basic-response.component';
import { IncidentBasicPersonsInvolvedComponent } from './components/incident-basic-persons-involved/incident-basic-persons-involved.component';
import { IncidentBasicSummaryComponent } from './components/incident-basic-summary/incident-basic-summary.component';
import { IncidentBasicCadComponent } from './components/incident-basic-cad/incident-basic-cad.component';
import { IncidentResourcesUnitComponent } from './components/incident-resources-unit/incident-resources-unit.component';
import { IncidentResourcesNarrativeComponent } from './components/incident-resources-narrative/incident-resources-narrative.component';
import { IncidentBasicPersonsInvolvedDetailComponent } from './components/incident-basic-persons-involved-detail/incident-basic-persons-involved-detail.component';
import { IncidentResourcesNarrativeDetailComponent } from './components/incident-resources-narrative-detail/incident-resources-narrative-detail.component';
import { IncidentResourcesUnitDetailComponent } from './components/incident-resources-unit-detail/incident-resources-unit-detail.component';
import { IncidentFireIgnitionDetailsComponent } from './components/incident-fire-ignition-details/incident-fire-ignition-details.component';
import { IncidentFireEquipmentDetailsComponent } from './components/incident-fire-equipment-details/incident-fire-equipment-details.component';
import { IncidentArsonAgencyReferredComponent } from './components/incident-arson-agency-referred/incident-arson-agency-referred.component';
import { IncidentArsonCaseDetailsComponent } from './components/incident-arson-case-details/incident-arson-case-details.component';
import { IncidentArsonJuvenileFiresetterComponent } from './components/incident-arson-juvenile-firesetter/incident-arson-juvenile-firesetter.component';
import { IncidentArsonJuvenileFiresetterDetailComponent } from './components/incident-arson-juvenile-firesetter-detail/incident-arson-juvenile-firesetter-detail.component';
import { IncidentStructureDescriptionStatusComponent } from './components/incident-structure-description-status/incident-structure-description-status.component';
import { IncidentStructureSystemsDamageComponent } from './components/incident-structure-systems-damage/incident-structure-systems-damage.component';
import { IncidentBasicComponent } from './components/incident-basic/incident-basic.component';
import { IncidentResourcesComponent } from './components/incident-resources/incident-resources.component';
import { IncidentFireComponent } from './components/incident-fire/incident-fire.component';
import { IncidentStructureComponent } from './components/incident-structure/incident-structure.component';
import { IncidentArsonComponent } from './components/incident-arson/incident-arson.component';
import { IncidentResourcesPersonnelDetailComponent } from './components/incident-resources-personnel-detail/incident-resources-personnel-detail.component';
import { IncidentResourcesPersonnelComponent } from './components/incident-resources-personnel/incident-resources-personnel.component';
import { IncidentCivilianComponent } from './components/incident-civilian/incident-civilian.component';
import { IncidentCivilianFactorsComponent } from './components/incident-civilian-factors/incident-civilian-factors.component';
import { IncidentCivilianFactorsDetailComponent } from './components/incident-civilian-factors-detail/incident-civilian-factors-detail.component';
import { IncidentCivilianInjuryComponent } from './components/incident-civilian-injury/incident-civilian-injury.component';
import { IncidentCivilianInjuryDetailComponent } from './components/incident-civilian-injury-detail/incident-civilian-injury-detail.component';
import { IncidentFireServiceComponent } from './components/incident-fire-service/incident-fire-service.component';
import { IncidentFireServiceFactorsComponent } from './components/incident-fire-service-factors/incident-fire-service-factors.component';
import { IncidentFireServiceInjuryComponent } from './components/incident-fire-service-injury/incident-fire-service-injury.component';
import { IncidentFireServiceFactorsDetailComponent } from './components/incident-fire-service-factors-detail/incident-fire-service-factors-detail.component';
import { IncidentFireServiceInjuryDetailComponent } from './components/incident-fire-service-injury-detail/incident-fire-service-injury-detail.component';
import { IncidentProtectiveEquipmentComponent } from './components/incident-protective-equipment/incident-protective-equipment.component';
import { IncidentProtectiveEquipmentDetailComponent } from './components/incident-protective-equipment-detail/incident-protective-equipment-detail.component';
import { IncidentWildlandComponent } from './components/incident-wildland/incident-wildland.component';
import { IncidentWildlandIgnitionComponent } from './components/incident-wildland-ignition/incident-wildland-ignition.component';
import { IncidentWildlandPropertyComponent } from './components/incident-wildland-property/incident-wildland-property.component';
import { IncidentHazmatComponent } from './components/incident-hazmat/incident-hazmat.component';
import { IncidentHazmatSpecialUnitReportComponent } from './components/incident-hazmat-special-unit-report/incident-hazmat-special-unit-report.component';
import { LoggedInGuard } from '../core/guards/logged-in.guard';

const incidentRoutes: Routes = [
  {
    path:  'incident/:id',
    component: IncidentComponent,
    canActivate: [LoggedInGuard],
    children: [
      {
        path: '',
        redirectTo: 'basic',
        pathMatch: 'full'
      },
      {
        path: 'basic',
        component: IncidentBasicComponent,
        children: [
          {
            path: '',
            redirectTo: 'response',
            pathMatch: 'full'
          },
          {
            path: 'response',
            component: IncidentBasicResponseComponent,
          },
          {
            path: 'persons-involved',
            component: IncidentBasicPersonsInvolvedComponent,
            children: [
              {
                path: ':id',
                component: IncidentBasicPersonsInvolvedDetailComponent
              }
            ]
          },
          {
            path: 'summary',
            component: IncidentBasicSummaryComponent,
          },
          {
            path: 'cad',
            component: IncidentBasicCadComponent,
          },
        ]
      },
      {
        path: 'resources',
        component: IncidentResourcesComponent,
        children: [
          {
            path: '',
            redirectTo: 'unit',
            pathMatch: 'full'
          },
          {
            path: 'unit',
            component: IncidentResourcesUnitComponent,
            children: [
              {
                path: ':id',
                component: IncidentResourcesUnitDetailComponent
              }
            ]
          },
          {
            path: 'narrative',
            component: IncidentResourcesNarrativeComponent,
            children: [
              {
                path: ':id',
                component: IncidentResourcesNarrativeDetailComponent
              }
            ]
          },
          {
            path: 'personnel',
            component: IncidentResourcesPersonnelComponent,
            children: [
              {
                path: ':id',
                component: IncidentResourcesPersonnelDetailComponent
              }
            ]
          }
        ]
      },
      {
        path: 'fire',
        component: IncidentFireComponent,
        children: [
          {
            path: '',
            redirectTo: 'fire-ignition-details',
            pathMatch: 'full'
          },
          {
            path: 'fire-ignition-details',
            component: IncidentFireIgnitionDetailsComponent
          },
          {
            path: 'fire-equipment-details',
            component: IncidentFireEquipmentDetailsComponent
          }
        ]
      },
      {
        path: 'structure',
        component: IncidentStructureComponent,
        children: [
          {
            path: '',
            redirectTo: 'structure-description-status',
            pathMatch: 'full'
          },
          {
            path: 'structure-description-status',
            component: IncidentStructureDescriptionStatusComponent
          },
          {
            path: 'structure-systems-damage',
            component: IncidentStructureSystemsDamageComponent
          }
        ]
      },
      {
        path: 'arson',
        component: IncidentArsonComponent,
        children: [
          {
            path: '',
            redirectTo: 'arson-case-details',
            pathMatch: 'full'
          },
          {
            path: 'arson-case-details',
            component: IncidentArsonCaseDetailsComponent
          },
          {
            path: 'arson-agency-referred-to',
            component: IncidentArsonAgencyReferredComponent
          },
          {
            path: 'arson-juvenile-firesetter',
            component: IncidentArsonJuvenileFiresetterComponent,
            children: [
              {
                path: ':id',
                component: IncidentArsonJuvenileFiresetterDetailComponent
              }
            ]

          }
        ]
      },
      {
        path: 'civilian',
        component: IncidentCivilianComponent,
        children: [
          {
            path: '',
            redirectTo: 'civilian-injury',
            pathMatch: 'full'
          },
          {
            path: 'civilian-injury',
            component: IncidentCivilianInjuryComponent,
            children: [
              {
                path: ':id',
                component: IncidentCivilianInjuryDetailComponent
              }
            ]

          },
          {
            path: 'civilian-factors',
            component: IncidentCivilianFactorsComponent,
            children: [
              {
                path: ':id',
                component: IncidentCivilianFactorsDetailComponent
              }
            ]

          }
        ]
      },
      {
        path: 'fire-service',
        component: IncidentFireServiceComponent,
        children: [
          {
            path: '',
            redirectTo: 'fire-service-injury',
            pathMatch: 'full'
          },
          {
            path: 'fire-service-injury',
            component: IncidentFireServiceInjuryComponent,
            children: [
              {
                path: ':id',
                component: IncidentFireServiceInjuryDetailComponent
              }
            ]

          },
          {
            path: 'fire-service-factors',
            component: IncidentFireServiceFactorsComponent,
            children: [
              {
                path: ':id',
                component: IncidentFireServiceFactorsDetailComponent
              }
            ]

          },
          {
            path: 'protective-equipment',
            component: IncidentProtectiveEquipmentComponent,
            children: [
              {
                path: ':id',
                component: IncidentProtectiveEquipmentDetailComponent
              }
            ]

          }
        ]
      },
      {
        path: 'wildland',
        component: IncidentWildlandComponent,
        children: [
          {
            path: '',
            redirectTo: 'wildland-ignition',
            pathMatch: 'full'
          },
          {
            path: 'wildland-ignition',
            component: IncidentWildlandIgnitionComponent
          },
          {
            path: 'wildland-property',
            component: IncidentWildlandPropertyComponent
          }
        ]
      },
      {
        path: 'hazmat',
        component: IncidentHazmatComponent,
        children: [
          {
            path: '',
            redirectTo: 'hazmat-special-unit-report',
            pathMatch: 'full'
          },
          {
            path: 'hazmat-special-unit-report',
            component: IncidentHazmatSpecialUnitReportComponent
          }
        ]
      }
    ]
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(incidentRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class IncidentRoutingModule {
}
