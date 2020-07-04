import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

   

    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ],
  exports: [
    
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ]
})
export class MaterialModule { }
