import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFireSeverityZoneComponent } from './form-fire-severity-zone.component';

describe('FormFireSeverityZoneComponent', () => {
  let component: FormFireSeverityZoneComponent;
  let fixture: ComponentFixture<FormFireSeverityZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFireSeverityZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFireSeverityZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
