import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-incident-resources-narrative-overwrite-modal-dialog',
  templateUrl: './incident-resources-narrative-overwrite-modal-dialog.component.html',
  styleUrls: ['./incident-resources-narrative-overwrite-modal-dialog.component.css']
})
export class IncidentResourcesNarrativeOverwriteModalDialogComponent {

    /**
   * Constructor
   *
   * @param dialogRef MatDialogRef
   */
  constructor(public dialogRef: MatDialogRef<IncidentResourcesNarrativeOverwriteModalDialogComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
