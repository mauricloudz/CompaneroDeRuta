import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RecoverPageRoutingModule } from './recover-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { RecoverPage } from './recover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoverPageRoutingModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  declarations: [RecoverPage]
})
export class RecoverPageModule {}
