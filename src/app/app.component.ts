import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FacebookService } from 'ngx-facebook';

import { HOME_PAGE } from './app.config';
import { SettingProvider } from '../providers/setting/setting';

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
        }
      ]
    }
  ];

  rootPage: any = HOME_PAGE;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private fb: FacebookService,
    private setting: SettingProvider
  ) {
    this.fb.init({
      version: 'v3.1'
    });

    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }

  openPage(page: PageInterface) {
    this.nav.setRoot(page.id);
  }

  isActive(page: PageInterface): boolean {
    return this.nav.first() && this.nav.first().id === page.id;
  }
}
