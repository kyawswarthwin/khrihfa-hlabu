import { Component, Injector } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { BasePage } from '../base/base';

declare var $: any;

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
  constructor(public injector: Injector, private platform: Platform) {
    super(injector);
  }

  ionViewDidLoad() {
    $('#flipbook').turn({
      width: '100%',
      height: this.platform.height() - 50,
      display: 'single',
      autoCenter: true
    });
  }
}
