import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOccupancyClassComponent } from './form-occupancy-class.component';

describe('FormOccupancyClassComponent', () => {
  let component: FormOccupancyClassComponent;
  let fixture: ComponentFixture<FormOccupancyClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOccupancyClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOccupancyClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
