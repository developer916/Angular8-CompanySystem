import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFireMgmtZoneComponent } from './form-fire-mgmt-zone.component';

describe('FormFireMgmtZoneComponent', () => {
  let component: FormFireMgmtZoneComponent;
  let fixture: ComponentFixture<FormFireMgmtZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFireMgmtZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFireMgmtZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
