import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDispatchZoneComponent } from './form-dispatch-zone.component';

describe('FormDispatchZoneComponent', () => {
  let component: FormDispatchZoneComponent;
  let fixture: ComponentFixture<FormDispatchZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDispatchZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDispatchZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
