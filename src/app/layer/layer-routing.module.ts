import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayerPage } from './layer.page';

const routes: Routes = [
  {
    path: '',
    component: LayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayerPageRoutingModule {}
