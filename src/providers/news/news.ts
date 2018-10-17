import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import queryString from 'query-string';

import { FACEBOOK } from '../../app/app.config';

@Injectable()
export class NewsProvider {
  private readonly baseUrl = 'https://graph.facebook.com/v3.1';

  constructor(private http: HttpClient) {}

  load(params?: any): Promise<any> {
    return this.http
      .get(
        `${this.baseUrl}/${params.id || `${FACEBOOK.PAGE_ID}/posts`}?${queryString.stringify({
          fields:
            'id,type,link,story,message,picture,full_picture,caption,name,description,attachments,object_id,source,place,from,created_time,updated_time',
          ...params,
          access_token: FACEBOOK.ACCESS_TOKEN
        })}`
      )
      .toPromise();
  }
}
