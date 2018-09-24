import { Component, Injector } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { BasePage } from '../../base/base';
import { HymnProvider } from '../../../providers/hymn/hymn';
import { Hymn } from '../../../models/hymn/hymn';

@IonicPage({
  segment: 'hymns/bookmarks'
})
@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html'
})
export class BookmarksPage extends BasePage {
  params: any = {};
  hymns: Hymn[];

  constructor(public injector: Injector, private hymnServ: HymnProvider) {
    super(injector);
  }

  ionViewDidEnter() {
    this.loadData();
  }

  loadData() {
    this.hymnServ.load(this.params).subscribe(hymns => {
      this.hymns = hymns.filter(hymn => {
        return this.hymnServ.isBookmarked(hymn.id);
      });
    });
  }
}
