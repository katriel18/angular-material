
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


////////////////////////////////////////////////
import { ComponentesGeneralesModule } from './componentes-generales/componentes-generales.module';
////////////////////////////////////////////////
import { AppRoutingModule } from './app-routing.module';
////////////////////////MATERIAL////////////////
import { MaterialModule } from './componentes-generales/material/material.module';


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

      MaterialModule,
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  { }
