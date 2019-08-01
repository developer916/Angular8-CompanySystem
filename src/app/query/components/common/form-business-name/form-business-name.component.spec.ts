import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBusinessNameComponent } from './form-business-name.component';

describe('FormBusinessNameComponent', () => {
  let component: FormBusinessNameComponent;
  let fixture: ComponentFixture<FormBusinessNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBusinessNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBusinessNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
