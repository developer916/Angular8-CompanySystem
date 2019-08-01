import { TestBed } from '@angular/core/testing';

import { QueryResultFormatterService } from './query-result-formatter.service';

describe('QueryResultFormatterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryResultFormatterService = TestBed.get(QueryResultFormatterService);
    expect(service).toBeTruthy();
  });
});
