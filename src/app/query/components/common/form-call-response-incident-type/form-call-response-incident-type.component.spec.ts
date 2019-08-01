import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCallResponseIncidentTypeComponent } from './form-call-response-incident-type.component';

describe('FormCallResponseIncidentTypeComponent', () => {
  let component: FormCallResponseIncidentTypeComponent;
  let fixture: ComponentFixture<FormCallResponseIncidentTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCallResponseIncidentTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCallResponseIncidentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
