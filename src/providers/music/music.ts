import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Song } from '../../models/song/song';

@Injectable()
export class MusicProvider {
  private songs: Observable<Song[]>;

  constructor(private http: HttpClient) {
    this.loadFromAssets();
  }

  load(params?: any): Observable<Song[]> {
    const { search } = params || {};
    let songs = this.songs;
    if (search) {
      songs = songs.map(songs =>
        songs.filter(song => ['id', 'title'].some(key => new RegExp(search, 'i').test(song[key])))
      );
    }
    return songs;
  }

  private loadFromAssets() {
    this.songs = this.http.get('assets/data/music.json').map((res: any) => <Song[]>res);
  }
}
