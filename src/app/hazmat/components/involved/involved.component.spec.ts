import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvolvedComponent } from './involved.component';

describe('InvolvedComponent', () => {
  let component: InvolvedComponent;
  let fixture: ComponentFixture<InvolvedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvolvedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
