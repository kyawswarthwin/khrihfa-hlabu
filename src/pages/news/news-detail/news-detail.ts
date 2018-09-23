import { Component, Injector } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { BasePage } from '../../base/base';
import { NewsProvider } from '../../../providers/news/news';

@IonicPage({
  name: 'news-detail',
  segment: 'news/:id',
  defaultHistory: ['news']
})
@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html'
})
export class NewsDetailPage extends BasePage {
  post: any = {};

  constructor(public injector: Injector, public news: NewsProvider) {
    super(injector);
  }

  async ionViewDidLoad() {
    try {
      this.showLoadingView('Loading...');
      this.post = await this.news.load({
        id: this.navParams.data.id
      });
      if (this.post) {
        this.showContentView();
      } else {
        this.showEmptyView();
      }
    } catch (error) {
      this.showErrorView();
    }
  }
}
