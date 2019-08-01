import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchEngineTypeComponent } from './form-search-engine-type.component';

describe('FormSearchEngineTypeComponent', () => {
  let component: FormSearchEngineTypeComponent;
  let fixture: ComponentFixture<FormSearchEngineTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSearchEngineTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchEngineTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
