import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLinkedOccupancyComponent } from './form-linked-occupancy.component';

describe('FormLinkedOccupancyComponent', () => {
  let component: FormLinkedOccupancyComponent;
  let fixture: ComponentFixture<FormLinkedOccupancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLinkedOccupancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLinkedOccupancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
