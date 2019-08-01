import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentHazmatSpecialUnitReportComponent } from './incident-hazmat-special-unit-report.component';
import { API_URL, ApiService } from 'ng2-hallelujah';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../../core/core.module';
import { RouterTestingModule } from '@angular/router/testing';


const apiURI = {uri: 'http://localhost/api'};

describe('IncidentHazmatSpecialUnitReportComponent', () => {
  let component: IncidentHazmatSpecialUnitReportComponent;
  let fixture: ComponentFixture<IncidentHazmatSpecialUnitReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterTestingModule
      ],
      declarations: [
        IncidentHazmatSpecialUnitReportComponent
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
    fixture = TestBed.createComponent(IncidentHazmatSpecialUnitReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
