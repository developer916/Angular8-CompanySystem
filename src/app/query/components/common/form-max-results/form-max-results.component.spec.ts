import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMaxResultsComponent } from './form-max-results.component';

describe('FormMaxResultsComponent', () => {
  let component: FormMaxResultsComponent;
  let fixture: ComponentFixture<FormMaxResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMaxResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMaxResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
