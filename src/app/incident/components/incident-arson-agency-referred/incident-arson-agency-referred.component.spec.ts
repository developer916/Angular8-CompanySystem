import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentArsonAgencyReferredComponent } from './incident-arson-agency-referred.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../../core/core.module';
import { API_URL, ApiService } from 'ng2-hallelujah';
import { RouterTestingModule } from '@angular/router/testing';

const apiURI = {uri: 'http://localhost/api'};

describe('IncidentArsonAgencyReferredComponent', () => {
  let component: IncidentArsonAgencyReferredComponent;
  let fixture: ComponentFixture<IncidentArsonAgencyReferredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterTestingModule
      ],
      declarations: [
        IncidentArsonAgencyReferredComponent
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
    fixture = TestBed.createComponent(IncidentArsonAgencyReferredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
