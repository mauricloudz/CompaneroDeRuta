import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    SuccessModalComponent, // Declara el componente del modal aquí
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), // Asegúrate de que solo esté en el módulo raíz
    AppRoutingModule,
    ReactiveFormsModule, // Importa ReactiveFormsModule para formularios reactivos
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}