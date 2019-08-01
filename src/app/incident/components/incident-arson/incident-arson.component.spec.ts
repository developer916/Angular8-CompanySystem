import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentArsonComponent } from './incident-arson.component';
import { CoreModule } from '../../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildrenOutletContexts } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { API_URL, ApiService } from 'ng2-hallelujah';

const apiURI = {uri: 'http://localhost/api'};

describe('IncidentArsonComponent', () => {
  let component: IncidentArsonComponent;
  let fixture: ComponentFixture<IncidentArsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterTestingModule
      ],
      declarations: [
        IncidentArsonComponent
      ],
      providers: [
        {
          provide: API_URL,
          useValue: apiURI
        },
        ApiService,
        ChildrenOutletContexts,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentArsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
