import { Component, Injector } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonicPage } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';

import { BasePage } from '../base/base';
import { HymnProvider } from '../../providers/hymn/hymn';
import { Hymn } from '../../models/hymn/hymn';

@IonicPage({
  name: 'hymns',
  segment: 'hymns'
})
@Component({
  selector: 'page-hymns',
  templateUrl: 'hymns.html'
})
export class HymnsPage extends BasePage {
  params: any = {};
  hymns: Hymn[];
  searchControl: FormControl;
  searching: boolean;

  constructor(public injector: Injector, private hymnServ: HymnProvider) {
    super(injector);

    this.searchControl = new FormControl();
    this.searchControl.valueChanges.debounceTime(500).subscribe(search => {
      this.loadData();
      this.searching = false;
    });
  }

  ionViewDidLoad() {
    this.loadData();
  }

  loadData() {
    this.hymnServ.load(this.params).subscribe(hymns => (this.hymns = hymns));
  }

  onSearchInput(event) {
    this.searching = true;
  }
}
