import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentResourcesNarrativeDetailComponent } from './incident-resources-narrative-detail.component';
import { CoreModule } from '../../../core/core.module';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { DataBrokerServiceInterface } from '../../../core/model/data-broker-service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { API_URL, ApiService } from 'ng2-hallelujah';
import { RouterTestingModule } from '@angular/router/testing';


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

const apiURI = {uri: 'http://localhost/api'};

describe('IncidentResourcesNarrativeDetailComponent', () => {
  let component: IncidentResourcesNarrativeDetailComponent;
  let fixture: ComponentFixture<IncidentResourcesNarrativeDetailComponent>;

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
        IncidentResourcesNarrativeDetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentResourcesNarrativeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
