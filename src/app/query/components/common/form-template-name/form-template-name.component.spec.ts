import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateNameComponent } from './form-template-name.component';

describe('FormTemplateNameComponent', () => {
  let component: FormTemplateNameComponent;
  let fixture: ComponentFixture<FormTemplateNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTemplateNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTemplateNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
