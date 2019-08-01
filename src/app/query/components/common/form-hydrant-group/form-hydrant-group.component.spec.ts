import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHydrantGroupComponent } from './form-hydrant-group.component';

describe('FormHydrantGroupComponent', () => {
  let component: FormHydrantGroupComponent;
  let fixture: ComponentFixture<FormHydrantGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHydrantGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHydrantGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
