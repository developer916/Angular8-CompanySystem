import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentBasicPersonsInvolvedComponent } from './incident-basic-persons-involved.component';
import { CoreModule } from '../../../core/core.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBrokerServiceInterface } from '../../../core/model/data-broker-service';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { API_URL, ApiService } from 'ng2-hallelujah';

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
}

const apiURI = {uri: 'http://localhost/api'};

describe('IncidentBasicPersonsInvolvedComponent', () => {
  let component: IncidentBasicPersonsInvolvedComponent;
  let fixture: ComponentFixture<IncidentBasicPersonsInvolvedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterTestingModule
      ],
      declarations: [
        IncidentBasicPersonsInvolvedComponent
      ],
      providers: [
        {
          provide: 'DataBrokerService',
          useClass: MockDataBrokerService
        },
        {
          provide: API_URL,
          useValue: apiURI
        },
        ApiService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentBasicPersonsInvolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
