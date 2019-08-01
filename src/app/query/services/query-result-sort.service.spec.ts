import { TestBed } from '@angular/core/testing';

import { QueryResultSortService } from './query-result-sort.service';

describe('QueryResultSortService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryResultSortService = TestBed.get(QueryResultSortService);
    expect(service).toBeTruthy();
  });
});
