import { Injectable } from '@angular/core';
import { FacebookService } from 'ngx-facebook';

import { FACEBOOK } from '../../app/app.config';

@Injectable()
export class NewsProvider {
  constructor(private fb: FacebookService) {}

  load(params?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.fb
        .api(params.id || `${FACEBOOK.PAGE_ID}/posts`, 'get', {
          fields:
            'id,type,link,story,message,picture,full_picture,caption,name,description,attachments,object_id,source,place,from,created_time,updated_time',
          ...params,
          access_token: FACEBOOK.ACCESS_TOKEN
        })
        .then(resolve)
        .catch(reject);
    });
  }
}
