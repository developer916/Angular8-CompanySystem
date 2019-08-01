import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAccessEncryptedDataComponent } from './form-access-encrypted-data.component';

describe('FormAccessEncryptedDataComponent', () => {
  let component: FormAccessEncryptedDataComponent;
  let fixture: ComponentFixture<FormAccessEncryptedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAccessEncryptedDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAccessEncryptedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
