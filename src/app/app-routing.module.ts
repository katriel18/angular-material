
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


////////////////////////////////////
import { RouterModule, Routes } from '@angular/router';

/////////// //////////////////////

import { ContenidoComponent } from './componentes-generales/contenido/contenido.component';
import { MenuDelDiaComponent } from './componentes-generales/menu-del-dia/menu-del-dia.component';
import { EmpresasComponent } from './componentes-generales/empresas/empresas.component';

//////////////// RUTAS ////////////
const routes: Routes = [
  { path: '', redirectTo: '/empresas', pathMatch: 'full' },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'menu-del-dia', component: MenuDelDiaComponent },
  { path: 'combos', component: ContenidoComponent },
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
