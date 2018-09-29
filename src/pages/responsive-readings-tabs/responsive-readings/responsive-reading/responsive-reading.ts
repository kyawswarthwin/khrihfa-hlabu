import { Component, Injector } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { BasePage } from '../../../base/base';
import { ResponsiveReadingProvider } from '../../../../providers/responsive-reading/responsive-reading';
import { BookmarkProvider } from '../../../../providers/bookmark/bookmark';

@IonicPage({
  segment: 'responsive-readings/:id',
  defaultHistory: ['ResponsiveReadingsPage']
})
@Component({
  selector: 'page-responsive-reading',
  templateUrl: 'responsive-reading.html'
})
export class ResponsiveReadingPage extends BasePage {
  responsiveReading: string;
  readonly BOOK: string = 'responsiveReadings';

  constructor(
    public injector: Injector,
    public responsiveReadingServ: ResponsiveReadingProvider,
    public bookmarkServ: BookmarkProvider
  ) {
    super(injector);
  }

  ionViewDidLoad() {
    this.responsiveReadingServ
      .getResponsiveReading(this.navParams.data.id)
      .subscribe(responsiveReading => (this.responsiveReading = responsiveReading));
  }
}
