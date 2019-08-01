import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryChangePasswordComponent } from './incident-query-change-password.component';

describe('IncidentQueryChangePasswordComponent', () => {
  let component: IncidentQueryChangePasswordComponent;
  let fixture: ComponentFixture<IncidentQueryChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
