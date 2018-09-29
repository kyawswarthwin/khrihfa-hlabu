import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ResponsiveReading } from '../../models/responsive-reading/responsive-reading';

@Injectable()
export class ResponsiveReadingProvider {
  private responsiveReadings: Observable<ResponsiveReading[]>;

  constructor(private http: HttpClient) {
    this.responsiveReadings = http
      .get('assets/data/responsive-readings/responsive-readings.json')
      .map((res: any) => <ResponsiveReading[]>res);
  }

  load(params: any = {}, fields: string[] = ['id', 'title']): Observable<ResponsiveReading[]> {
    const { search } = params;
    let responsiveReadings = this.responsiveReadings;
    if (search) {
      responsiveReadings = responsiveReadings.map(responsiveReadings =>
        responsiveReadings.filter(responsiveReading =>
          fields.some(field => RegExp(search, 'i').test(responsiveReading[field]))
        )
      );
    }
    return responsiveReadings;
  }

  getResponsiveReading(id: number): Observable<string> {
    return this.http.get(`assets/data/responsive-readings/${id}.html`, { responseType: 'text' });
  }
}
