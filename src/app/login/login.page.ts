import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private modalController: ModalController
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('(?=.*[0-9]{4})(?=.*[A-Za-z]{3})(?=.*[A-Z]).{8,}')
        ]
      ]
    });
  }

  navigateToRegister() {
    this.router.navigate(['register']);
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      await this.showSuccessModal();
      const navigationExtras: NavigationExtras = {
        state: {
          user: this.loginForm.value.username
        }
      };
      this.router.navigate(['home'], navigationExtras);
    }
  }

  async showSuccessModal() {
    const modal = await this.modalController.create({
      component: SuccessModalComponent,
      cssClass: 'my-custom-class',
      animated: true
    });
    await modal.present();
    await modal.onDidDismiss(); // Esperamos el cierre del modal.
  }

}