import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEngineeredSystemComponent } from './form-engineered-system.component';

describe('FormEngineeredSystemComponent', () => {
  let component: FormEngineeredSystemComponent;
  let fixture: ComponentFixture<FormEngineeredSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEngineeredSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEngineeredSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
