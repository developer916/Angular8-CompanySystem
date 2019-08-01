import { IncidentReviewModule } from './incident-review.module';

describe('IncidentReviewModule', () => {
  let incidentReviewModule: IncidentReviewModule;

  beforeEach(() => {
    incidentReviewModule = new IncidentReviewModule();
  });

  it('should create an instance', () => {
    expect(incidentReviewModule).toBeTruthy();
  });
});
