import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueryUsersComponent } from './incident-query-users.component';

describe('IncidentQueryUsersComponent', () => {
  let component: IncidentQueryUsersComponent;
  let fixture: ComponentFixture<IncidentQueryUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentQueryUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentQueryUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
