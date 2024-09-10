import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage {
  recoverForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.recoverForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onRecover() {
    if (this.recoverForm.valid) {
      // Aquí puedes implementar la lógica para enviar el correo de recuperación
      console.log('Correo de recuperación enviado a:', this.recoverForm.value.email);
      this.router.navigate(['login']); // Navegar de vuelta al login
    }
  }
}