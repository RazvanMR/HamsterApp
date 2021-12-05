import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignHubPage } from './sign-hub.page';

const routes: Routes = [
  {
    path: '',
    component: SignHubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignHubPageRoutingModule {}
