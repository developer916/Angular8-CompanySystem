import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateTypeComponent } from './form-template-type.component';

describe('FormTemplateTypeComponent', () => {
  let component: FormTemplateTypeComponent;
  let fixture: ComponentFixture<FormTemplateTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTemplateTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTemplateTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
