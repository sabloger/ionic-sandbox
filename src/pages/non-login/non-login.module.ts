import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NonLoginPage } from './non-login';

@NgModule({
  declarations: [
    NonLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(NonLoginPage),
  ],
})
export class NonLoginPageModule {}
