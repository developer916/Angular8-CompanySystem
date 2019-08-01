import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFirstNameComponent } from './form-first-name.component';

describe('FormFirstNameComponent', () => {
  let component: FormFirstNameComponent;
  let fixture: ComponentFixture<FormFirstNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFirstNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFirstNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
