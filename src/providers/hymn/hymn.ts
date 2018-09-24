import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

import { Hymn } from '../../models/hymn/hymn';

@Injectable()
export class HymnProvider {
  private hymns: Observable<Hymn[]>;
  private BOOKMARK_KEY: string = '_Bookmark';
  private bookmarks: number[];

  constructor(private http: HttpClient, private storage: Storage) {
    this.loadFromAssets();
  }

  load(params: any = {}, fields: string[] = ['id', 'title']): Observable<Hymn[]> {
    const { search } = params;
    let hymns = this.hymns;
    if (search) {
      hymns = hymns.map(hymns =>
        hymns.filter(hymn => fields.some(field => RegExp(search, 'i').test(hymn[field])))
      );
    }
    return hymns;
  }

  getHymn(id: number): Observable<string> {
    return this.http.get(`assets/data/${id}.html`, { responseType: 'text' });
  }

  bookmark(id: number): Promise<any> {
    this.bookmarks.push(id);
    return this.storage.set(this.BOOKMARK_KEY, this.bookmarks);
  }

  isBookmarked(id: number): boolean {
    return this.bookmarks.indexOf(id) > -1;
  }

  removeBookmark(id: number): Promise<any> {
    const index = this.bookmarks.indexOf(id);
    if (index > -1) {
      this.bookmarks.splice(index, 1);
      return this.storage.set(this.BOOKMARK_KEY, this.bookmarks);
    }
  }

  private async loadFromAssets() {
    this.hymns = this.http.get('assets/data/hymns.json').map((res: any) => <Hymn[]>res);
    this.bookmarks = (await this.storage.get(this.BOOKMARK_KEY)) || [];
  }
}
