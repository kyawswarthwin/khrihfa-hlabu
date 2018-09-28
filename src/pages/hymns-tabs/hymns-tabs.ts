import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'hymns',
  segment: 'hymns'
})
@Component({
  selector: 'page-hymns-tabs',
  templateUrl: 'hymns-tabs.html'
})
export class HymnsTabsPage {
  tab1Root: any = 'HymnsPage';
  tab2Root: any = 'HymnsBookmarksPage';

  constructor() {}
}
