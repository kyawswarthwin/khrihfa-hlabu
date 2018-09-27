import { Component, Injector } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { BasePage } from '../../../base/base';
import { HymnProvider } from '../../../../providers/hymn/hymn';
import { BookmarkProvider } from '../../../../providers/bookmark/bookmark';

@IonicPage({
  segment: 'hymns/:id',
  defaultHistory: ['HymnsPage']
})
@Component({
  selector: 'page-hymn',
  templateUrl: 'hymn.html'
})
export class HymnPage extends BasePage {
  hymn: string;

  constructor(
    public injector: Injector,
    private hymnServ: HymnProvider,
    private bookmarkServ: BookmarkProvider
  ) {
    super(injector);
  }

  ionViewDidLoad() {
    this.hymnServ.getHymn(this.navParams.data.id).subscribe(hymn => (this.hymn = hymn));
  }
}
