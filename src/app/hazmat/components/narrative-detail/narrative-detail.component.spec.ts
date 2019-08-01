import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrativeDetailComponent } from './narrative-detail.component';

describe('NarrativeDetailComponent', () => {
  let component: NarrativeDetailComponent;
  let fixture: ComponentFixture<NarrativeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarrativeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarrativeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
