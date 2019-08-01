import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentReviewComponent } from './components/incident-review/incident-review.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IncidentModule } from '../incident/incident.module';
import { CoreModule } from '../core/core.module';
import { ReviewIncidentComponent } from './components/review-incident/review-incident.component';
import { ReviewComponent } from './components/review/review.component';
import { AmmendmentsComponent } from './components/ammendments/ammendments.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IncidentReviewRoutingModule } from './incident-review-routing.module';
import { ReviewDataBrokerService } from './services/review-data-broker.service';
import { IncidentReviewToolbarComponent } from './components/incident-review-toolbar/incident-review-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatToolbarModule,
    IncidentModule,
    CoreModule,
    IncidentReviewRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: 'ReviewDataBrokerService',
      useClass: ReviewDataBrokerService
    }
  ],
  declarations: [IncidentReviewComponent, ReviewIncidentComponent, ReviewComponent, AmmendmentsComponent, IncidentReviewToolbarComponent]
})
export class IncidentReviewModule { }
