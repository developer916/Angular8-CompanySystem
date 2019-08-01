import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPreplanGroupComponent } from './form-preplan-group.component';

describe('FormPreplanGroupComponent', () => {
  let component: FormPreplanGroupComponent;
  let fixture: ComponentFixture<FormPreplanGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPreplanGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPreplanGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
