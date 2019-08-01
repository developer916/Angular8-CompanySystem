import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmendmentsComponent } from './ammendments.component';

describe('AmmendmentsComponent', () => {
  let component: AmmendmentsComponent;
  let fixture: ComponentFixture<AmmendmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmmendmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmendmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
