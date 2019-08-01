import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMapPageComponent } from './form-map-page.component';

describe('FormMapPageComponent', () => {
  let component: FormMapPageComponent;
  let fixture: ComponentFixture<FormMapPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMapPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
