import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserIdComponent } from './form-user-id.component';

describe('FormUserIdComponent', () => {
  let component: FormUserIdComponent;
  let fixture: ComponentFixture<FormUserIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUserIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
