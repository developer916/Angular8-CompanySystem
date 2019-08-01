import { TestBed } from '@angular/core/testing';

import { QueryResultPatchService } from './query-result-patch.service'

describe('QueryResultPatchServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryResultPatchService = TestBed.get(QueryResultPatchService);
    expect(service).toBeTruthy();
  });
});
