import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentBasicComponent } from './incident-basic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../../core/core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ChildrenOutletContexts } from '@angular/router';
import { API_URL, ApiService } from 'ng2-hallelujah';

const apiURI = {uri: 'http://localhost/api'};

describe('IncidentBasicComponent', () => {
  let component: IncidentBasicComponent;
  let fixture: ComponentFixture<IncidentBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterTestingModule
      ],
      declarations: [
        IncidentBasicComponent
      ],
      providers: [
        ChildrenOutletContexts,
        {
          provide: API_URL,
          useValue: apiURI
        },
        ApiService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
