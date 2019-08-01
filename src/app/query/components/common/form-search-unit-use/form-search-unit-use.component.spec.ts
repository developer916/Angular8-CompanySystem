import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchUnitUseComponent } from './form-search-unit-use.component';

describe('FormSearchUnitUseComponent', () => {
  let component: FormSearchUnitUseComponent;
  let fixture: ComponentFixture<FormSearchUnitUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSearchUnitUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchUnitUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
