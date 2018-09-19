import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonicPage } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';

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
export class HymnsPage {
  params: any = {};
  hymns: Hymn[];
  searchControl: FormControl;
  searching: boolean;

  constructor(private hymnServ: HymnProvider) {
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
