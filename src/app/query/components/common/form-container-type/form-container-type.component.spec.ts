import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContainerTypeComponent } from './form-container-type.component';

describe('FormContainerTypeComponent', () => {
  let component: FormContainerTypeComponent;
  let fixture: ComponentFixture<FormContainerTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormContainerTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContainerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
