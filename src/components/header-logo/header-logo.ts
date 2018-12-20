import { Component } from '@angular/core';

/**
 * Generated class for the HeaderLogoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-logo',
  templateUrl: 'header-logo.html'
})
export class HeaderLogoComponent {

  text: string;

  constructor() {
    console.log('Hello HeaderLogoComponent Component');
    this.text = 'Hello World';
  }

}
