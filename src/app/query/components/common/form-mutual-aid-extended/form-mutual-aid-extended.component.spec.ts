import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMutualAidExtendedComponent } from './form-mutual-aid-extended.component';

describe('FormMutualAidExtendedComponent', () => {
  let component: FormMutualAidExtendedComponent;
  let fixture: ComponentFixture<FormMutualAidExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMutualAidExtendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMutualAidExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
