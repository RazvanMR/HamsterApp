import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayerPageRoutingModule } from './layer-routing.module';

import { LayerPage } from './layer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayerPageRoutingModule
  ],
  declarations: [LayerPage]
})
export class LayerPageModule {}
