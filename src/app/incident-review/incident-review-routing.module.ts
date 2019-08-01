import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from '../core/guards/logged-in.guard';
import {IncidentReviewComponent} from '../incident-review/components/incident-review/incident-review.component';
import {ReviewComponent} from '../incident-review/components/review/review.component';
import {AmmendmentsComponent} from '../incident-review/components/ammendments/ammendments.component';
import {ReviewIncidentComponent} from '../incident-review/components/review-incident/review-incident.component';


const incidentReviewRoutes: Routes = [
  {
    path:  'incident-review/:id',
    component: IncidentReviewComponent,
    canActivate: [LoggedInGuard],
    children: [
      {
        path: '',
        redirectTo: 'review-incident',
        pathMatch: 'full'
      },
      {
        path: 'review-incident',
        component: ReviewIncidentComponent,
        children: [
          {
            path: '',
            redirectTo: 'review',
            pathMatch: 'full'
          },
          {
            path: 'review',
            component: ReviewComponent,
          },
          {
            path: 'ammendments',
            component: AmmendmentsComponent,
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(incidentReviewRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class IncidentReviewRoutingModule {
}
