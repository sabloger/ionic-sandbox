import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {NonLoginPage} from "../pages/non-login/non-login";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {SignUpPage} from "../pages/signup/signup";
import {SocialLoginComponent} from "../components/social-login/social-login";
import {HeaderLogoComponent} from "../components/header-logo/header-logo";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignUpPage,
    NonLoginPage,
    SocialLoginComponent,
    HeaderLogoComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFontAwesomeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignUpPage,
    NonLoginPage,
    SocialLoginComponent,
    HeaderLogoComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
