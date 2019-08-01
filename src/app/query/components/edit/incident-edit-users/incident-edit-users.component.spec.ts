import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentEditUsersComponent } from './incident-edit-users.component';

describe('IncidentEditUsersComponent', () => {
  let component: IncidentEditUsersComponent;
  let fixture: ComponentFixture<IncidentEditUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentEditUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentEditUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
