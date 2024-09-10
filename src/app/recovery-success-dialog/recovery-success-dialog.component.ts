// recovery-success-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-recovery-success-dialog',
  template: `
    <h1 mat-dialog-title>Recuperación Exitosa</h1>
    <div mat-dialog-content>
      <p>Correo de recuperación enviado a: {{ data.email }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onOkClick()">OK</button>
    </div>
  `,
})
export class RecoverySuccessDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RecoverySuccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { email: string }
  ) {}

  onOkClick(): void {
    this.dialogRef.close();
  }
}