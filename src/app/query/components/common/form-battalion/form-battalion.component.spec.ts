import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBattalionComponent } from './form-battalion.component';

describe('FormBattalionComponent', () => {
  let component: FormBattalionComponent;
  let fixture: ComponentFixture<FormBattalionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBattalionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBattalionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
