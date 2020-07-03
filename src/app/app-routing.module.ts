
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


////////////////////////////////////
import { RouterModule, Routes } from '@angular/router';

/////////// //////////////////////
import { InicioComponent } from './componentes-generales/inicio/inicio.component';

import { ContenidoComponent } from './componentes-generales/contenido/contenido.component';

/////////////////////////////////
const routes: Routes = [
  //{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent},
  { path: 'contenido', component: ContenidoComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ///////////////////////////////
    RouterModule.forRoot(routes) 
  ],
  /////////////////////////////////
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
