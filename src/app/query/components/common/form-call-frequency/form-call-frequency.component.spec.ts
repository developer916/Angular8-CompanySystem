import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCallFrequencyComponent } from './form-call-frequency.component';

describe('FormCallFrequencyComponent', () => {
  let component: FormCallFrequencyComponent;
  let fixture: ComponentFixture<FormCallFrequencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCallFrequencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCallFrequencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
