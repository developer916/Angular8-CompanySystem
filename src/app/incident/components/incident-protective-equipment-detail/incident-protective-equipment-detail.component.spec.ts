import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentProtectiveEquipmentDetailComponent } from './incident-protective-equipment-detail.component';
import { IncidentAosDataBrokerService } from '../../services/incident-aos-data-broker.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { API_URL, ApiService } from 'ng2-hallelujah';


const apiURI = {uri: 'http://localhost/api'};

describe('IncidentProtectiveEquipmentDetailComponent', () => {
  let component: IncidentProtectiveEquipmentDetailComponent;
  let fixture: ComponentFixture<IncidentProtectiveEquipmentDetailComponent>;

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
        IncidentProtectiveEquipmentDetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentProtectiveEquipmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
