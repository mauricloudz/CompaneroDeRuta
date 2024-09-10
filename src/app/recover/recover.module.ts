// recover.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'; // Importa MatDialogModule

import { RecoverPageRoutingModule } from './recover-routing.module';
import { RecoverPage } from './recover.page';
import { RecoverySuccessDialogComponent } from '../recovery-success-dialog/recovery-success-dialog.component'; // Importa el componente

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoverPageRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule // Asegúrate de importar MatDialogModule
  ],
  declarations: [RecoverPage, RecoverySuccessDialogComponent] // Declara el componente
})
export class RecoverPageModule {}