import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SettingProvider } from '../providers/setting/setting';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'hymns';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private setting: SettingProvider
  ) {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }
}
