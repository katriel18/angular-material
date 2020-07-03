
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


////////////////////////////////////////////////
import { ComponentesGeneralesModule } from './componentes-generales/componentes-generales.module';
////////////////////////////////////////////////
import { AppRoutingModule } from './app-routing.module';
////////////////////////////////////////////////
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,


    ////////// MODULOS ////////
    ComponentesGeneralesModule,

  ////////// RUTAS ////////
    AppRoutingModule,
 


    /////////// MATERIAL /////////
    MatButtonModule,
    MatCardModule
  
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  { }
