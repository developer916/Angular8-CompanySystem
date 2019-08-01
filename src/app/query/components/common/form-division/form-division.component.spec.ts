import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDivisionComponent } from './form-division.component';

describe('FormDivisionComponent', () => {
  let component: FormDivisionComponent;
  let fixture: ComponentFixture<FormDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
