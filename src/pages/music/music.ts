import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
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

  constructor(private music: MusicProvider) {}

  ionViewDidLoad() {
    this.loadData();
  }

  loadData() {
    this.music.load(this.params).subscribe(songs => (this.songs = songs));
  }

  onSearch() {
    this.loadData();
  }

  onClearSearch() {
    this.params.search = '';
    this.loadData();
  }
}
