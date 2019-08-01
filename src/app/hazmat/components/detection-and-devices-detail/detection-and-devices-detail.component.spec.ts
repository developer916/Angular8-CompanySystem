import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionAndDevicesDetailComponent } from './detection-and-devices-detail.component';

describe('DetectionAndDevicesDetailComponent', () => {
  let component: DetectionAndDevicesDetailComponent;
  let fixture: ComponentFixture<DetectionAndDevicesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectionAndDevicesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectionAndDevicesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
