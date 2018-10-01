import { Component, Injector } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { IonicPage } from 'ionic-angular';

import { BasePage } from '../../base/base';
import { HymnProvider } from '../../../providers/hymn/hymn';
import { Hymn } from '../../../models/hymn/hymn';

@IonicPage({
  segment: 'hymns/hymns'
})
@Component({
  selector: 'page-hymns',
  templateUrl: 'hymns.html'
})
export class HymnsPage extends BasePage {
  params: any = {};
  hymns: Hymn[];
  isSearchbarOpened: boolean = false;
  searchControl: FormControl;
  searching: boolean;

  constructor(public injector: Injector, public hymnServ: HymnProvider) {
    super(injector);

    this.searchControl = new FormControl();
    this.searchControl.valueChanges.debounceTime(500).subscribe(search => {
      this.loadData();
      this.searching = false;
    });
  }

  ionViewDidLoad() {
    this.ad.showBanner();
    this.loadData();
  }

  loadData() {
    this.hymnServ.load(this.params).subscribe(hymns => (this.hymns = hymns));
  }

  onSearchInput(event: any) {
    this.searching = true;
  }

  onSearchCancel(event: any) {
    this.params.search = '';
    this.isSearchbarOpened = false;
  }
}
