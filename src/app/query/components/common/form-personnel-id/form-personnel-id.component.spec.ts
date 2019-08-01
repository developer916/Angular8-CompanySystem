import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonnelIdComponent } from './form-personnel-id.component';

describe('FormPersonnelIdComponent', () => {
  let component: FormPersonnelIdComponent;
  let fixture: ComponentFixture<FormPersonnelIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPersonnelIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPersonnelIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
