import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {IncidentModule} from './incident/incident.module';
// Application routes
import {AppRoutingModule} from './app-routing.module';
import {UserService} from './core/services/user.service';
import {CustomRouteReuseStrategy} from './core/custom-route-reuse-strategy';
import {RouteReuseStrategy} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {API_URL, ApiService, HallelujahModule} from 'ng2-hallelujah';
import {environment} from '../environments';
import {ServiceWorkerModule} from '@angular/service-worker';
import {QueryModule} from './query/query.module';
import {IncidentReviewModule} from './incident-review/incident-review.module';
import {HazMatModule} from './hazmat/hazmat.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HazMatModule,
    IncidentModule,
    IncidentReviewModule,
    QueryModule,
    AppRoutingModule,
    HallelujahModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    UserService,
    ApiService,
    {
      provide: API_URL,
      useValue: 'http://' + environment.api_host + environment.api_port + environment.api_base_path
    },
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    }
    // {
    //   provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    //   useValue: { appearance: 'outline'}
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
