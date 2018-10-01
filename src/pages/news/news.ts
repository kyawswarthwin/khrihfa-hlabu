import { Component, Injector } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { BasePage } from '../base/base';
import { NewsProvider } from '../../providers/news/news';

@IonicPage({
  name: 'news',
  segment: 'news'
})
@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage extends BasePage {
  params: any = {};
  posts: any[];

  constructor(public injector: Injector, public news: NewsProvider) {
    super(injector);
  }

  ionViewDidLoad() {
    this.ad.showBanner();
    this.ad.showInterstitial();
    this.showLoadingView('Loading...');
    this.onReload();
  }

  onReload(refresher?: any) {
    this.refresher = refresher;

    this.params = {};
    this.posts = [];

    this.loadData();
  }

  async loadData() {
    try {
      let data = await this.news.load(this.params);
      this.posts = this.posts.concat(data.data);
      this.params.after = data.paging && data.paging.cursors.after;
      this.onRefreshComplete(data.data);
      if (this.posts.length) {
        this.showContentView();
      } else {
        this.showEmptyView();
      }
    } catch (error) {
      this.onRefreshComplete();
      this.showErrorView();
    }
  }

  onLoadMore(infiniteScroll: any) {
    this.infiniteScroll = infiniteScroll;
    this.loadData();
  }
}
