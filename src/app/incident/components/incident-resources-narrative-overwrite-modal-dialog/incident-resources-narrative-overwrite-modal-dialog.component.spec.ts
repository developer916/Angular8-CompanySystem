import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentResourcesNarrativeOverwriteModalDialogComponent } from './incident-resources-narrative-overwrite-modal-dialog.component';

describe('IncidentResourcesNarrativeOverwriteModalDialogComponent', () => {
  let component: IncidentResourcesNarrativeOverwriteModalDialogComponent;
  let fixture: ComponentFixture<IncidentResourcesNarrativeOverwriteModalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentResourcesNarrativeOverwriteModalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentResourcesNarrativeOverwriteModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
