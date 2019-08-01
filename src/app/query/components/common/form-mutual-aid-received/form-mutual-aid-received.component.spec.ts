import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMutualAidReceivedComponent } from './form-mutual-aid-received.component';

describe('FormMutualAidReceivedComponent', () => {
  let component: FormMutualAidReceivedComponent;
  let fixture: ComponentFixture<FormMutualAidReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMutualAidReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMutualAidReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
