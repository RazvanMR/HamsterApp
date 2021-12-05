import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPage } from './sign-up.page';
import { Routes, RouterModule } from '@angular/router';
import {MbscFormsModule} from '@mobiscroll/angular';

const routes: Routes = [
  {
    path: '',
    component: SignUpPage,
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MbscFormsModule,
    ],
  declarations: [SignUpPage]
})
export class SignUpPageModule {}
