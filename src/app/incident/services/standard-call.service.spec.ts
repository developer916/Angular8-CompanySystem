import { TestBed } from '@angular/core/testing';

import { StandardCallService } from './standard-call.service';

describe('StandardCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StandardCallService = TestBed.get(StandardCallService);
    expect(service).toBeTruthy();
  });
});
