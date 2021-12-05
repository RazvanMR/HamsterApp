import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignHubPageRoutingModule } from './sign-hub-routing.module';

import { SignHubPage } from './sign-hub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignHubPageRoutingModule
  ],
  declarations: [SignHubPage]
})
export class SignHubPageModule {}
