import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponenteAComponent } from './components/mi-componente-a/mi-componente-a.component';
import { MiComponenteBComponent } from './components/mi-componente-b/mi-componente-b.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteAComponent,
    MiComponenteBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
