import { Component, Injector } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { BasePage } from '../../base/base';

@IonicPage({
  segment: 'hymns/bookmarks'
})
@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html'
})
export class BookmarksPage extends BasePage {
  constructor(public injector: Injector) {
    super(injector);
  }

  ionViewDidLoad() {}
}
