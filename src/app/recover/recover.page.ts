// recover.page.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RecoverySuccessDialogComponent } from '../recovery-success-dialog/recovery-success-dialog.component';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage {
  recoverForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog // Inyecta MatDialog
  ) {
    this.recoverForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onRecover() {
    if (this.recoverForm.valid) {
      const email = this.recoverForm.value.email;
      console.log('Correo de recuperación enviado a:', email);

      // Abre el diálogo
      const dialogRef = this.dialog.open(RecoverySuccessDialogComponent, {
        data: { email }
      });

      // Navega a la página de login después de cerrar el diálogo
      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['login']);
      });
    }
  }
}