import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDrillComponent } from './form-drill.component';

describe('FormDrillComponent', () => {
  let component: FormDrillComponent;
  let fixture: ComponentFixture<FormDrillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDrillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
