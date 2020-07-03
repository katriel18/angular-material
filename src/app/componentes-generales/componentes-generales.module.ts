
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/////////////////////////////////////////
import { InicioComponent } from './inicio/inicio.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { CardOrganizacionComponent } from './inicio/card-organizacion/card-organizacion.component';

/////////////////////////////////////////

import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [ InicioComponent,ContenidoComponent,CardOrganizacionComponent],
  imports: [
    CommonModule,
    
    ////////////////////////////
    
    MatSliderModule,
    MatCardModule,

  ],
    

})
export class ComponentesGeneralesModule { }
