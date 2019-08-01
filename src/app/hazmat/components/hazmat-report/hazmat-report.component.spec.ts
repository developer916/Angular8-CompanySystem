import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { HazMatReportToolbarComponent } from '../hazmat-report-toolbar/hazmat-report-toolbar.component';
import { HazmatReportComponent } from './hazmat-report.component';

describe('HazmatReportComponent', () => {
  let component: HazmatReportComponent;
  let fixture: ComponentFixture<HazmatReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazmatReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazmatReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
