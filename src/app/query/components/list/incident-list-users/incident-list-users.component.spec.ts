import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListUsersComponent } from './incident-list-users.component';

describe('IncidentListUsersComponent', () => {
  let component: IncidentListUsersComponent;
  let fixture: ComponentFixture<IncidentListUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
