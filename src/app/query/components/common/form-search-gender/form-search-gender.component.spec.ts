import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchGenderComponent } from './form-search-gender.component';

describe('FormSearchGenderComponent', () => {
  let component: FormSearchGenderComponent;
  let fixture: ComponentFixture<FormSearchGenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSearchGenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
