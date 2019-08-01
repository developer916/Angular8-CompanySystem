import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentArsonCaseDetailsComponent } from './incident-arson-case-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../../core/core.module';
import { API_URL, ApiService } from 'ng2-hallelujah';
import { RouterTestingModule } from '@angular/router/testing';

const apiURI = {uri: 'http://localhost/api'};

describe('IncidentArsonCaseDetailsComponent', () => {
  let component: IncidentArsonCaseDetailsComponent;
  let fixture: ComponentFixture<IncidentArsonCaseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterTestingModule
      ],
      declarations: [
        IncidentArsonCaseDetailsComponent
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
    fixture = TestBed.createComponent(IncidentArsonCaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
