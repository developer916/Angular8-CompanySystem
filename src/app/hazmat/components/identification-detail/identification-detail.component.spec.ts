import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationDetailComponent } from './identification-detail.component';

describe('IdentificationDetailComponent', () => {
  let component: IdentificationDetailComponent;
  let fixture: ComponentFixture<IdentificationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
