import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonicPage } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';

import { HymnProvider } from '../../providers/hymn/hymn';
import { Song } from '../../models/song/song';

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
  songs: Song[];
  searchControl: FormControl;
  searching: boolean;

  constructor(private music: HymnProvider) {
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
    this.music.load(this.params).subscribe(songs => (this.songs = songs));
  }

  onSearchInput(event) {
    this.searching = true;
  }
}
