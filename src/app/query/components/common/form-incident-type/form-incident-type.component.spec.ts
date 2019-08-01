import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIncidentTypeComponent } from './form-incident-type.component';

describe('FormIncidentTypeComponent', () => {
  let component: FormIncidentTypeComponent;
  let fixture: ComponentFixture<FormIncidentTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormIncidentTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIncidentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
