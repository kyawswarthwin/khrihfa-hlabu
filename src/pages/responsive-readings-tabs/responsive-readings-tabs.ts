import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'responsive-readings',
  segment: 'responsive-readings'
})
@Component({
  selector: 'page-responsive-readings-tabs',
  templateUrl: 'responsive-readings-tabs.html'
})
export class ResponsiveReadingsTabsPage {
  tab1Root: any = 'ResponsiveReadingsPage';
  tab2Root: any = 'ResponsiveReadingsBookmarksPage';

  constructor() {}
}
