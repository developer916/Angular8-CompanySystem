import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCallFrequencyStationComponent } from './form-call-frequency-station.component';

describe('FormCallFrequencyStationComponent', () => {
  let component: FormCallFrequencyStationComponent;
  let fixture: ComponentFixture<FormCallFrequencyStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCallFrequencyStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCallFrequencyStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
