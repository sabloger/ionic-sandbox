import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: [
    "../../assets/css/font-awesome.css",
    "../../assets/css/bootstrap.css",
    '../../assets/css/bootstrap-social.css'
  ],
})
export class SignUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }


  goToLogin(event) {
    this.navCtrl.setRoot(LoginPage);
    // this.navCtrl.push(LoginPage);
  }

}
