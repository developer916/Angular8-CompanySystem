import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionAndDevicesComponent } from './detection-and-devices.component';

describe('DetectionAndDevicesComponent', () => {
  let component: DetectionAndDevicesComponent;
  let fixture: ComponentFixture<DetectionAndDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectionAndDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectionAndDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
