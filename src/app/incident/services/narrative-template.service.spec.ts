import { TestBed } from '@angular/core/testing';

import { NarrativeTemplateService } from './narrative-template.service';

describe('NarrativeTemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NarrativeTemplateService = TestBed.get(NarrativeTemplateService);
    expect(service).toBeTruthy();
  });
});
