import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchRankComponent } from './form-search-rank.component';

describe('FormSearchRankComponent', () => {
  let component: FormSearchRankComponent;
  let fixture: ComponentFixture<FormSearchRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSearchRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
