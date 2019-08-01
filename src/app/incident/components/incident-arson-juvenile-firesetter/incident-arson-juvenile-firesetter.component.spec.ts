import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentArsonJuvenileFiresetterComponent } from './incident-arson-juvenile-firesetter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../../core/core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { API_URL, ApiService } from 'ng2-hallelujah';

const apiURI = {uri: 'http://localhost/api'};

describe('IncidentArsonJuvenileFiresetterComponent', () => {
  let component: IncidentArsonJuvenileFiresetterComponent;
  let fixture: ComponentFixture<IncidentArsonJuvenileFiresetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterTestingModule
      ],
      declarations: [
        IncidentArsonJuvenileFiresetterComponent
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
    fixture = TestBed.createComponent(IncidentArsonJuvenileFiresetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
