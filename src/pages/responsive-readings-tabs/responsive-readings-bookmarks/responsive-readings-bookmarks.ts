import { Component, Injector } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { BasePage } from '../../base/base';
import { ResponsiveReadingProvider } from '../../../providers/responsive-reading/responsive-reading';
import { ResponsiveReading } from '../../../models/responsive-reading/responsive-reading';
import { BookmarkProvider } from '../../../providers/bookmark/bookmark';

@IonicPage({
  segment: 'responsive-readings/bookmarks'
})
@Component({
  selector: 'page-responsive-readings-bookmarks',
  templateUrl: 'responsive-readings-bookmarks.html'
})
export class ResponsiveReadingsBookmarksPage extends BasePage {
  params: any = {};
  responsiveReadings: ResponsiveReading[];
  readonly BOOK: string = 'responsiveReadings';

  constructor(
    public injector: Injector,
    public responsiveReadingServ: ResponsiveReadingProvider,
    public bookmarkServ: BookmarkProvider
  ) {
    super(injector);
  }

  ionViewDidEnter() {
    this.loadData();
  }

  loadData() {
    this.responsiveReadingServ.load(this.params).subscribe(responsiveReadings => {
      this.responsiveReadings = responsiveReadings.filter(responsiveReading => {
        return this.bookmarkServ.isBookmarked(this.BOOK, responsiveReading.id);
      });
    });
  }

  async delete(id: number) {
    await this.bookmarkServ.removeBookmark(this.BOOK, id);
    this.loadData();
  }
}
