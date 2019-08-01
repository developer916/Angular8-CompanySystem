import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentBasicResponseComponent } from './incident-basic-response.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../../core/core.module';
import { DataBrokerServiceInterface } from '../../../core/model/data-broker-service';
import { Observable, of } from 'rxjs';
import { API_URL, ApiService } from 'ng2-hallelujah';
import { RouterTestingModule } from '@angular/router/testing';

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

describe('IncidentBasicResponseComponent', () => {
  let component: IncidentBasicResponseComponent;
  let fixture: ComponentFixture<IncidentBasicResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterTestingModule
      ],
      declarations: [
        IncidentBasicResponseComponent
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentBasicResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
