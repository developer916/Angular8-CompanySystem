import { async, inject, TestBed } from '@angular/core/testing';
import { IncidentComponent } from './incident.component';
import { CoreModule } from '../../../core/core.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { APP_CONFIG, AppConfig } from '../../../app.config';
import { RouterTestingModule } from '@angular/router/testing';
import { DataBrokerServiceInterface } from '../../../core/model/data-broker-service';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { UIBuildService } from '../../../core/services/ui-build.service';
import { RuleEngineService } from '../../../core/services/rule-engine.service';
import { API_URL, ApiService } from 'ng2-hallelujah';
import {Incident} from "../../model/incident";

/**
 * Mock DataBrokerService for testing
 */
class MockDataBrokerService implements DataBrokerServiceInterface {
  populateSessionData(id: string,
                      session: string,
                      formControls?: Map<string, FormControl>) {
  }
  getIncidentCadData(incidentNumber: string): Observable<any> {
    return of(null);
  }

  loadIncident(incidentId: string): Observable<Incident> {
    return undefined;
  }

  loadIncidentResources(incident: Observable<Incident>) {
  }

  saveIncident() {
  }
}

/**
 * Mock UserService only used for testing
 */
class MockUserService extends UserService {
}

/**
 * Mock ActivatedRoute for testing
 */
class MockActivatedRoute extends ActivatedRoute {
  public params = of({id: 123});
}

const apiURI = {uri: 'http://localhost/api'};

describe('IncidentComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: APP_CONFIG,
          useValue: AppConfig
        },
        {
          provide: UserService,
          useFactory: (config, http) => {
            return new MockUserService(config, http);
          },
          deps: [APP_CONFIG]
        },
        {
          provide: 'DataBrokerService',
          useClass: MockDataBrokerService
        },
        {
          provide: ActivatedRoute,
          useValue: new MockActivatedRoute()
        },
        {
          provide: API_URL,
          useValue: apiURI
        },
        ApiService,
        UIBuildService,
        RuleEngineService,
        IncidentComponent
      ],
      declarations: [
        IncidentComponent
      ]
    }).compileComponents();
  }));

  it('should be created', inject([IncidentComponent, HttpTestingController], (component: IncidentComponent, httpMock: HttpTestingController) => {
    expect(component).toBeTruthy();
  }));

});
