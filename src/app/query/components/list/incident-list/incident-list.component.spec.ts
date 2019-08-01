import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListComponent } from './incident-list.component';
import { CoreModule } from '../../../../core/core.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { APP_CONFIG } from '../../../../app.config';
import { UserService } from '../../../../core/services/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CdkTableModule } from '@angular/cdk/table';
import { API_URL, ApiService } from 'ng2-hallelujah';
import { QueryService } from '../../../services/query.service';

/**
 * Mock UserService only used for testing
 */
class MockUserService extends UserService {
}

const apiURI = {uri: 'http://localhost/api'};

describe('IncidentListComponent', () => {
  let component: IncidentListComponent;
  let fixture: ComponentFixture<IncidentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        RouterTestingModule,
        CdkTableModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatCardModule
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
          provide: API_URL,
          useValue: apiURI
        },
        ApiService,
        QueryService,
        MockBackend,
        BaseRequestOptions
      ],
      declarations: [IncidentListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
