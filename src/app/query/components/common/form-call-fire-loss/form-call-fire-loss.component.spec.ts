import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCallFireLossComponent } from './form-call-fire-loss.component';

describe('FormCallFireLossComponent', () => {
  let component: FormCallFireLossComponent;
  let fixture: ComponentFixture<FormCallFireLossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCallFireLossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCallFireLossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
