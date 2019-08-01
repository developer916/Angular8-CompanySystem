import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentCivilianFactorsDetailComponent } from './incident-civilian-factors-detail.component';
import { IncidentAosDataBrokerService } from '../../services/incident-aos-data-broker.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { API_URL, ApiService } from 'ng2-hallelujah';

const apiURI = {uri: 'http://localhost/api'};

describe('IncidentCivilianFactorsDetailComponent', () => {
  let component: IncidentCivilianFactorsDetailComponent;
  let fixture: ComponentFixture<IncidentCivilianFactorsDetailComponent>;

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
          provide: 'DataBrokerService',
          useClass: IncidentAosDataBrokerService
        },
        {
          provide: API_URL,
          useValue: apiURI
        },
        ApiService
      ],
      declarations: [
        IncidentCivilianFactorsDetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentCivilianFactorsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
