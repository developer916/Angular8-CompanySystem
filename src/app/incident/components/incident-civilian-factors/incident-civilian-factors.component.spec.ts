import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentCivilianFactorsComponent } from './incident-civilian-factors.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncidentAosDataBrokerService } from '../../services/incident-aos-data-broker.service';
import { API_URL, ApiService } from 'ng2-hallelujah';

const apiURI = {uri: 'http://localhost/api'};

describe('IncidentCivilianFactorsComponent', () => {
  let component: IncidentCivilianFactorsComponent;
  let fixture: ComponentFixture<IncidentCivilianFactorsComponent>;

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
        IncidentCivilianFactorsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentCivilianFactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
