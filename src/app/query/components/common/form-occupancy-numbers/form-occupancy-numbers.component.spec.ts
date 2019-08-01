import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOccupancyNumbersComponent } from './form-occupancy-numbers.component';

describe('FormOccupancyNumbersComponent', () => {
  let component: FormOccupancyNumbersComponent;
  let fixture: ComponentFixture<FormOccupancyNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOccupancyNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOccupancyNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
