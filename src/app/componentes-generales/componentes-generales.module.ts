
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/////////////// MATERIAL ///////////////////////////////
import { MaterialModule } from './material/material.module';


/////////////////// COMPONENTES //////////////////////////////////////

import { ContenidoComponent } from './contenido/contenido.component';

import { MenuDelDiaComponent } from './menu-del-dia/menu-del-dia.component';
import { CardMenuDelDiaComponent } from './menu-del-dia/grid-list-menu-del-dia/card-menu-del-dia/card-menu-del-dia.component';
import { GridListMenuDelDiaComponent } from './menu-del-dia/grid-list-menu-del-dia/grid-list-menu-del-dia.component';

import { EmpresasComponent } from './empresas/empresas.component';
import { GridListEmpresasComponent } from './empresas/grid-list-empresas/grid-list-empresas.component';
import { CardEmpresasComponent } from './empresas/grid-list-empresas/card-empresas/card-empresas.component';


@NgModule({
  declarations: [
  
    ///////COMPONENTES/////
    ContenidoComponent,

    MenuDelDiaComponent ,
    GridListMenuDelDiaComponent,
    CardMenuDelDiaComponent,
    

    EmpresasComponent,
    GridListEmpresasComponent,
    CardEmpresasComponent,
    
  
    
    ],
  imports: [
    CommonModule,
    ///////MATERIAL/////
    MaterialModule
  ],
    

})
export class ComponentesGeneralesModule { }
