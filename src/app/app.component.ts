import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HOME_PAGE } from './app.config';
import { SettingProvider } from '../providers/setting/setting';
import { AdProvider } from '../providers/ad/ad';

export interface PageInterface {
  id: string;
  icon?: string;
  title: string;
}
export interface MenuInterface {
  header?: string;
  pages: PageInterface[];
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  menus: MenuInterface[] = [
    {
      pages: [
        {
          id: 'hymns',
          title: 'Khrihfa Hlabu'
        },
        {
          id: 'responsive-readings',
          title: 'Chawnghlang Relnak'
        },
        {
          id: 'news',
          title: 'Daily Bible Chin'
        },
        {
          id: 'about',
          title: 'About'
        }
      ]
    }
  ];

  rootPage: any = HOME_PAGE;

  constructor(
    public platform: Platform,
    public splashScreen: SplashScreen,
    public setting: SettingProvider,
    public ad: AdProvider
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      await this.ad.showBanner().catch(console.error); // Bypass Ad-Sharing
      await this.ad.showBanner().catch(console.error);
      this.splashScreen.hide();
    });
  }

  openPage(page: PageInterface) {
    this.ad.showInterstitial();
    this.nav.setRoot(page.id);
  }

  isActive(page: PageInterface): boolean {
    return this.nav.first() && this.nav.first().id === page.id;
  }
}
