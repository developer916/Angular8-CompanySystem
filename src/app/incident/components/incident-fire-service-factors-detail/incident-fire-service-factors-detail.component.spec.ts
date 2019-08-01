import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentFireServiceFactorsDetailComponent } from './incident-fire-service-factors-detail.component';
import { IncidentAosDataBrokerService } from '../../services/incident-aos-data-broker.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { API_URL, ApiService } from 'ng2-hallelujah';


const apiURI = {uri: 'http://localhost/api'};

describe('IncidentFireServiceFactorsDetailComponent', () => {
  let component: IncidentFireServiceFactorsDetailComponent;
  let fixture: ComponentFixture<IncidentFireServiceFactorsDetailComponent>;

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
        IncidentFireServiceFactorsDetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentFireServiceFactorsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
