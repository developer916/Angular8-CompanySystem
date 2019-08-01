import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmtComponent } from './form-emt.component';

describe('FormEmtComponent', () => {
  let component: FormEmtComponent;
  let fixture: ComponentFixture<FormEmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
