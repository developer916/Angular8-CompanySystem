import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReportBuilderComponent } from './form-report-builder.component';

describe('FormReportBuilderComponent', () => {
  let component: FormReportBuilderComponent;
  let fixture: ComponentFixture<FormReportBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReportBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReportBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
