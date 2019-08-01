import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazMatReportToolbarComponent } from './hazmat-report-toolbar.component';

describe('HazMatReportToolbarComponent', () => {
  let component: HazMatReportToolbarComponent;
  let fixture: ComponentFixture<HazMatReportToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazMatReportToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazMatReportToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
