import { Component, Injector } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { BasePage } from '../../base/base';
import { HymnProvider } from '../../../providers/hymn/hymn';
import { Hymn } from '../../../models/hymn/hymn';
import { BookmarkProvider } from '../../../providers/bookmark/bookmark';

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
  readonly BOOK: string = 'hymns';

  constructor(
    public injector: Injector,
    private hymnServ: HymnProvider,
    private bookmarkServ: BookmarkProvider
  ) {
    super(injector);
  }

  ionViewDidEnter() {
    this.loadData();
  }

  loadData() {
    this.hymnServ.load(this.params).subscribe(hymns => {
      this.hymns = hymns.filter(hymn => {
        return this.bookmarkServ.isBookmarked(this.BOOK, hymn.id);
      });
    });
  }

  async delete(id: number) {
    await this.bookmarkServ.removeBookmark(this.BOOK, id);
    this.loadData();
  }
}
