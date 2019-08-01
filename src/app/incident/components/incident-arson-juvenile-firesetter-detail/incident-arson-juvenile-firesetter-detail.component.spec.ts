import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentArsonJuvenileFiresetterDetailComponent } from './incident-arson-juvenile-firesetter-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../../core/core.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { API_URL, ApiService } from 'ng2-hallelujah';
import { RouterTestingModule } from '@angular/router/testing';

/**
 * Mock ActivatedRoute for testing
 */
class MockActivatedRoute extends ActivatedRoute {
  public params = of({id: 123});
}

const apiURI = {uri: 'http://localhost/api'};

describe('IncidentArsonJuvenileFiresetterDetailComponent', () => {
  let component: IncidentArsonJuvenileFiresetterDetailComponent;
  let fixture: ComponentFixture<IncidentArsonJuvenileFiresetterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterTestingModule
      ],
      declarations: [
        IncidentArsonJuvenileFiresetterDetailComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: new MockActivatedRoute()
        },
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
    fixture = TestBed.createComponent(IncidentArsonJuvenileFiresetterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
