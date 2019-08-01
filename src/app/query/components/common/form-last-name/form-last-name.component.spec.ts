import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLastNameComponent } from './form-last-name.component';

describe('FormLastNameComponent', () => {
  let component: FormLastNameComponent;
  let fixture: ComponentFixture<FormLastNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLastNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLastNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
