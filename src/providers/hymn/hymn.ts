import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Song } from '../../models/song/song';

@Injectable()
export class HymnProvider {
  private songs: Observable<Song[]>;

  constructor(private http: HttpClient) {
    this.loadFromAssets();
  }

  load(params: any = {}, fields: string[] = ['id', 'title']): Observable<Song[]> {
    const { search } = params;
    let songs = this.songs;
    if (search) {
      songs = songs.map(songs =>
        songs.filter(song => fields.some(field => RegExp(search, 'i').test(song[field])))
      );
    }
    return songs;
  }

  private loadFromAssets() {
    this.songs = this.http.get('assets/data/hymns.json').map((res: any) => <Song[]>res);
  }
}