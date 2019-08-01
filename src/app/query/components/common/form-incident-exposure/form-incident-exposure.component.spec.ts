import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIncidentExposureComponent } from './form-incident-exposure.component';

describe('FormIncidentExposureComponent', () => {
  let component: FormIncidentExposureComponent;
  let fixture: ComponentFixture<FormIncidentExposureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormIncidentExposureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIncidentExposureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
