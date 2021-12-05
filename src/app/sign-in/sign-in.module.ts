import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInPage } from './sign-in.page';
import { Routes, RouterModule } from '@angular/router';
import {MbscModule} from '@mobiscroll/angular';

const routes: Routes = [
  {
    path: '',
    component: SignInPage,
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MbscModule,
    ],
  declarations: [SignInPage]
})
export class SignInPageModule {}
