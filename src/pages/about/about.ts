import { Component, Injector } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { BasePage } from '../base/base';

@IonicPage({
  name: 'about',
  segment: 'about'
})
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage extends BasePage {
  constructor(public injector: Injector) {
    super(injector);
  }
}
