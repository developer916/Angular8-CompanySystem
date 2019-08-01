import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchUnitTypeComponent } from './form-search-unit-type.component';

describe('FormSearchUnitTypeComponent', () => {
  let component: FormSearchUnitTypeComponent;
  let fixture: ComponentFixture<FormSearchUnitTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSearchUnitTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchUnitTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
