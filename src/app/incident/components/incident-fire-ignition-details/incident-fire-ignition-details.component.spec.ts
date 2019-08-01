import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentFireIgnitionDetailsComponent } from './incident-fire-ignition-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../../core/core.module';
import { API_URL, ApiService } from 'ng2-hallelujah';
import { RouterTestingModule } from '@angular/router/testing';


const apiURI = {uri: 'http://localhost/api'};

describe('IncidentFireIgnitionDetailsComponent', () => {
  let component: IncidentFireIgnitionDetailsComponent;
  let fixture: ComponentFixture<IncidentFireIgnitionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterTestingModule
      ],
      declarations: [
        IncidentFireIgnitionDetailsComponent
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
    fixture = TestBed.createComponent(IncidentFireIgnitionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
