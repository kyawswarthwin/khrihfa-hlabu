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
  songs: Song[];

  constructor(private music: MusicProvider) {}

  ionViewDidLoad() {
    this.music.load().subscribe(songs => (this.songs = songs));
  }
}
