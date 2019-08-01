import { inject, TestBed } from '@angular/core/testing';

import { IncidentAosDataBrokerService } from './incident-aos-data-broker.service';
import { DataService } from '../../core/services/data-service.service';
import { APP_CONFIG, AppConfig } from '../../app.config';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CoreModule } from '../../core/core.module';
import { API_URL, ApiService } from 'ng2-hallelujah';

/**
 * Mock Component only used for testing
 */
class MockComponent { }

const apiURI = {uri: 'http://localhost/api'};

describe('IncidentDataBrokerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: APP_CONFIG,
          useValue: AppConfig
        },
        {
          provide: API_URL,
          useValue: apiURI
        },
        ApiService,
        IncidentAosDataBrokerService,
        DataService
      ]
    });
  });

  it('should be created', inject([IncidentAosDataBrokerService, HttpTestingController], (service: IncidentAosDataBrokerService, httpMock: HttpTestingController) => {
    expect(service).toBeTruthy();
  }));
});
