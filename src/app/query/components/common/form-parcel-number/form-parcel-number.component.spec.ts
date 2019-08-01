import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormParcelNumberComponent } from './form-parcel-number.component';

describe('FormParcelNumberComponent', () => {
  let component: FormParcelNumberComponent;
  let fixture: ComponentFixture<FormParcelNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormParcelNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormParcelNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
