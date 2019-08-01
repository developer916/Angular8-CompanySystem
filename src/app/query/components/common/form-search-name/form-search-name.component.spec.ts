import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchNameComponent } from './form-search-name.component';

describe('FormSearchNameComponent', () => {
  let component: FormSearchNameComponent;
  let fixture: ComponentFixture<FormSearchNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSearchNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
