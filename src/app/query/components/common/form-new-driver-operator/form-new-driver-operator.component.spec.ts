import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewDriverOperatorComponent } from './form-new-driver-operator.component';

describe('FormNewDriverOperatorComponent', () => {
  let component: FormNewDriverOperatorComponent;
  let fixture: ComponentFixture<FormNewDriverOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNewDriverOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewDriverOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
