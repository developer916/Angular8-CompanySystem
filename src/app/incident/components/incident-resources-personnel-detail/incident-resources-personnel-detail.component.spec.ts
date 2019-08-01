import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentResourcesPersonnelDetailComponent } from './incident-resources-personnel-detail.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../../core/core.module';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataBrokerServiceInterface } from '../../../core/model/data-broker-service';
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

describe('IncidentResourcesPersonnelDetailComponent', () => {
  let component: IncidentResourcesPersonnelDetailComponent;
  let fixture: ComponentFixture<IncidentResourcesPersonnelDetailComponent>;

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
      declarations: [ IncidentResourcesPersonnelDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentResourcesPersonnelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
