import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchRequirementComponent } from './form-search-requirement.component';

describe('FormSearchRequirementComponent', () => {
  let component: FormSearchRequirementComponent;
  let fixture: ComponentFixture<FormSearchRequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSearchRequirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
