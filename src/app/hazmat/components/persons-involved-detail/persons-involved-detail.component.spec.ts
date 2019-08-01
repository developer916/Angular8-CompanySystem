import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsInvolvedDetailComponent } from './persons-involved-detail.component';

describe('PersonsInvolvedDetailComponent', () => {
  let component: PersonsInvolvedDetailComponent;
  let fixture: ComponentFixture<PersonsInvolvedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonsInvolvedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsInvolvedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
