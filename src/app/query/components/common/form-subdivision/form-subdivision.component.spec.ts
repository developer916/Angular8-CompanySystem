import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubdivisionComponent } from './form-subdivision.component';

describe('FormSubdivisionComponent', () => {
  let component: FormSubdivisionComponent;
  let fixture: ComponentFixture<FormSubdivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSubdivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSubdivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
