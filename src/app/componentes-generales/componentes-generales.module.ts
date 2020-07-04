
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/////////////// MATERIAL /////////////////

import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {MatGridListModule} from '@angular/material/grid-list';
/////////////////// COMPONENTES /////////////////

import { ContenidoComponent } from './contenido/contenido.component';

import { MenuDelDiaComponent } from './menu-del-dia/menu-del-dia.component';


import { CardMenuDelDiaComponent } from './menu-del-dia/grid-list-menu-del-dia/card-menu-del-dia/card-menu-del-dia.component';
import { GridListMenuDelDiaComponent } from './menu-del-dia/grid-list-menu-del-dia/grid-list-menu-del-dia.component';

@NgModule({
  declarations: [
  
    ContenidoComponent,
    MenuDelDiaComponent ,
   GridListMenuDelDiaComponent,
    CardMenuDelDiaComponent
    
    ],
  imports: [
    CommonModule,
    
    ////////////////////////////
    
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ],
    

})
export class ComponentesGeneralesModule { }
