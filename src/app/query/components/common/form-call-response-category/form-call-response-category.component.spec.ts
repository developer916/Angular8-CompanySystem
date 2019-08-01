import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCallResponseCategoryComponent } from './form-call-response-category.component';

describe('FormCallResponseCategoryComponent', () => {
  let component: FormCallResponseCategoryComponent;
  let fixture: ComponentFixture<FormCallResponseCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCallResponseCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCallResponseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
