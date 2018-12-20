import { Component } from '@angular/core';

/**
 * Generated class for the SocialLoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'social-login',
  templateUrl: 'social-login.html',
  styleUrls: [
    "../../assets/css/font-awesome.css",
    "../../assets/css/bootstrap.css",
    '../../assets/css/bootstrap-social.css'
  ],
})
export class SocialLoginComponent {

  text: string;

  constructor() {
    console.log('Hello SocialLoginComponent Component');
    this.text = 'Hello World';
  }

}
