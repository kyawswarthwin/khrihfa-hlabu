import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Song } from '../../models/song/song';

@Injectable()
export class MusicProvider {
  constructor(private http: HttpClient) {}

  load(): Observable<Song[]> {
    return this.http.get('assets/data/music.json').map((res: any) => <Song[]>res);
  }
}
