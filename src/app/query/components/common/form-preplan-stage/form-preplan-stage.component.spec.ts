import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPreplanStageComponent } from './form-preplan-stage.component';

describe('FormPreplanStageComponent', () => {
  let component: FormPreplanStageComponent;
  let fixture: ComponentFixture<FormPreplanStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPreplanStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPreplanStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
