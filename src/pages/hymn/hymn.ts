import { Component, Injector } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { BasePage } from '../base/base';

@IonicPage({
  name: 'hymn',
  segment: 'hymns/:id',
  defaultHistory: ['hymns']
})
@Component({
  selector: 'page-hymn',
  templateUrl: 'hymn.html'
})
export class HymnPage extends BasePage {
  constructor(public injector: Injector) {
    super(injector);
  }
}
