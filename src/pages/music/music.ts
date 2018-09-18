import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonicPage } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';

import { MusicProvider } from '../../providers/music/music';
import { Song } from '../../models/song/song';

@IonicPage({
  name: 'music',
  segment: 'music'
})
@Component({
  selector: 'page-music',
  templateUrl: 'music.html'
})
export class MusicPage {
  params: any = {};
  songs: Song[];
  searchControl: FormControl;
  searching: boolean;

  constructor(private music: MusicProvider) {
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
