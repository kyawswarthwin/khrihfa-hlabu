import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hymn } from '../../models/hymn/hymn';

@Injectable()
export class HymnProvider {
  private hymns: Observable<Hymn[]>;

  constructor(private http: HttpClient) {
    this.hymns = http.get('assets/data/hymns/hymns.json').map((res: any) => <Hymn[]>res);
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
    return this.http.get(`assets/data/hymns/${id}.html`, { responseType: 'text' });
  }
}
