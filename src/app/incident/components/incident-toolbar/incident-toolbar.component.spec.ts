import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { IncidentToolbarComponent } from './incident-toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataBrokerServiceInterface } from '../../../core/model/data-broker-service';
import { RuleEngineService } from '../../../core/services/rule-engine.service';
import { ListDetailService } from '../../../core/services/list-detail.service';
import { DataService } from '../../../core/services/data-service.service';
import { APP_CONFIG, AppConfig } from '../../../app.config';
import { ErrorHandlerService } from 'app/core/services/error-handler.service';
import { FormBuilderService } from '../../../core/services/form-builder.service';
import { LookupService } from '../../../core/services/lookup.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';

/**
 * Mock DataBrokerService for testing
 */
class MockDataBrokerService implements DataBrokerServiceInterface {
  populateSessionData(id: string,
                      session: string,
                      formControls?: Map<string, FormControl>) {
  }

  loadIncident() { }

  saveIncident(closing = false) { }

  getIncidentCadData(incidentNumber: string): Observable<any> {
    return of(null);
  }
}

/**
 * Mock Component only used for testing
 */
@Component({
  template: ''
})
class MockComponent { }

describe('ToolbarComponent', () => {
  let component: IncidentToolbarComponent;
  let fixture: ComponentFixture<IncidentToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path: 'basic', component: MockComponent}
        ]),
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatOptionModule,
        MatSelectModule
      ],
      declarations: [
        IncidentToolbarComponent,
        MockComponent
      ],
      providers: [
        {
          provide: 'DataBrokerService',
          useClass: MockDataBrokerService
        },
        {
          provide: APP_CONFIG,
          useValue: AppConfig
        },
        DataService,
        ListDetailService,
        RuleEngineService,
        ErrorHandlerService,
        FormBuilderService,
        LookupService,
        MatSnackBar,
        IncidentToolbarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', inject([IncidentToolbarComponent, HttpTestingController], (toolbar: IncidentToolbarComponent, httpMock: HttpTestingController) => {
    expect(toolbar).toBeTruthy();
  }));
});
