import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchEmailComponent } from './form-search-email.component';

describe('FormSearchEmailComponent', () => {
  let component: FormSearchEmailComponent;
  let fixture: ComponentFixture<FormSearchEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSearchEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
