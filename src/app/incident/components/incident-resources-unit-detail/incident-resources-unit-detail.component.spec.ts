import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentResourcesUnitDetailComponent } from './incident-resources-unit-detail.component';
import { CoreModule } from '../../../core/core.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBrokerServiceInterface } from '../../../core/model/data-broker-service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { API_URL, ApiService } from 'ng2-hallelujah';
import { RouterTestingModule } from '@angular/router/testing';


const apiURI = {uri: 'http://localhost/api'};

/**
 * Mock DataBrokerService for testing
 */
class MockDataBrokerService implements DataBrokerServiceInterface {
  populateSessionData(id: string,
                      session: string,
                      formControls?: Map<string, FormControl>) { }

  getIncidentCadData(incidentNumber: string): Observable<any> {
    return of(null);
  }
}

/**
 * Mock ActivatedRoute for testing
 */
class MockActivatedRoute extends ActivatedRoute {
  public params = of({id: 123});
}

describe('IncidentResourcesUnitDetailComponent', () => {
  let component: IncidentResourcesUnitDetailComponent;
  let fixture: ComponentFixture<IncidentResourcesUnitDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: new MockActivatedRoute()
        },
        {
          provide: 'DataBrokerService',
          useClass: MockDataBrokerService
        },
        {
          provide: API_URL,
          useValue: apiURI
        },
        ApiService
      ],
      declarations: [
        IncidentResourcesUnitDetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentResourcesUnitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
