import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithinCityComponent } from './form-within-city.component';

describe('FormWithinCityComponent', () => {
  let component: FormWithinCityComponent;
  let fixture: ComponentFixture<FormWithinCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWithinCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithinCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
