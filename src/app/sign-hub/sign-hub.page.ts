import { Component, OnInit } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-hub',
  templateUrl: './sign-hub.page.html',
  styleUrls: ['./sign-hub.page.scss'],
})
export class SignHubPage implements OnInit {

  constructor(
      private actionSheetController: ActionSheetController,
      private router: Router,
  ) { }

  ngOnInit() {


  }

  public async signUp() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Sign up',
      buttons: [{
        text: 'Continue with Facebook',
        role: 'facebook',
        icon: 'logo-facebook',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Continue with Apple',
        role: 'apple',
        icon: 'logo-apple',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Continue with Google',
        role: 'google',
        icon: 'logo-google',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Continue with email',
        role: 'email',
        icon: 'mail-outline',
        handler: () => {
          this.router.navigate(['/sign-up']);
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  public async signIn() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Sign In',
      buttons: [{
        text: 'Continue with Facebook',
        role: 'facebook',
        icon: 'logo-facebook',
      }, {
        text: 'Continue with Apple',
        role: 'apple',
        icon: 'logo-apple',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Continue with Google',
        role: 'google',
        icon: 'logo-google',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Continue with email',
        role: 'email',
        icon: 'mail-outline',
        handler: () => {
          this.router.navigate(['/sign-in'])
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
