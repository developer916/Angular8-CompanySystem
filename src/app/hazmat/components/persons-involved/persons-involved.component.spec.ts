import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsInvolvedComponent } from './persons-involved.component';

describe('PersonsInvolvedComponent', () => {
  let component: PersonsInvolvedComponent;
  let fixture: ComponentFixture<PersonsInvolvedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonsInvolvedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsInvolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
