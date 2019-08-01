import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazMatComponent } from './hazmat.component';

describe('HazMatComponent', () => {
  let component: HazMatComponent;
  let fixture: ComponentFixture<HazMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazMatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
