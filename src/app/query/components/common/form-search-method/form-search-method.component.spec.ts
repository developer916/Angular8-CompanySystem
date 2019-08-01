import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchMethodComponent } from './form-search-method.component';

describe('FormSearchMethodComponent', () => {
  let component: FormSearchMethodComponent;
  let fixture: ComponentFixture<FormSearchMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSearchMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
