import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentFireEquipmentDetailsComponent } from './incident-fire-equipment-details.component';
import { CoreModule } from '../../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { API_URL, ApiService } from 'ng2-hallelujah';
import { RouterTestingModule } from '@angular/router/testing';


const apiURI = {uri: 'http://localhost/api'};

describe('IncidentFireEquipmentDetailsComponent', () => {
  let component: IncidentFireEquipmentDetailsComponent;
  let fixture: ComponentFixture<IncidentFireEquipmentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterTestingModule
      ],
      declarations: [
        IncidentFireEquipmentDetailsComponent
      ],
      providers: [
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
    fixture = TestBed.createComponent(IncidentFireEquipmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
