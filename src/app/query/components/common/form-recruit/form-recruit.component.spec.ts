import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecruitComponent } from './form-recruit.component';

describe('FormRecruitComponent', () => {
  let component: FormRecruitComponent;
  let fixture: ComponentFixture<FormRecruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRecruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRecruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
