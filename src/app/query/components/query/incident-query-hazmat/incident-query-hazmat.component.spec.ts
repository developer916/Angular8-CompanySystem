import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentQueryHazmatComponent } from './incident-query-hazmat.component';
import { CoreModule } from '../../../../core/core.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { APP_CONFIG } from '../../../../app.config';
import { UserService } from '../../../../core/services/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { API_URL, ApiService } from 'ng2-hallelujah';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QueryService } from '../../../services/query.service';
import {IncidentQueryComponent} from '../incident-query/incident-query.component';
import {IncidentQueryReviewComponent} from '../incident-query-review/incident-query-review.component';

/**
 * Mock UserService only used for testing
 */
class MockUserService extends UserService {
}

const apiURI = {uri: 'http://localhost/api'};

describe('IncidentQueryHazmatComponent', () => {
  let component: IncidentQueryHazmatComponent;
  let fixture: ComponentFixture<IncidentQueryHazmatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatCardModule,
        MatCheckboxModule,
        MatSelectModule,
        MatInputModule,
        MatRadioModule,
        MatButtonModule
      ],
      providers: [
        {
          provide: Http,
          useFactory: (backend, options) => {
            return new Http(backend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        {
          provide: UserService,
          useFactory: (config, http) => {
            return new MockUserService(config, http);
          },
          deps: [APP_CONFIG, Http]
        },
        {
          provide: APP_CONFIG,
          useValue: {}
        },
        {
          provide: API_URL,
          useValue: apiURI
        },
        ApiService,
        QueryService,
        MockBackend,
        BaseRequestOptions],
      declarations: [
        IncidentQueryHazmatComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryHazmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
