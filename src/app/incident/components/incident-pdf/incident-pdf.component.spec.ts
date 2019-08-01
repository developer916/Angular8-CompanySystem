import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentPdfComponent } from './incident-pdf.component';

describe('IncidentPdfComponent', () => {
  let component: IncidentPdfComponent;
  let fixture: ComponentFixture<IncidentPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
