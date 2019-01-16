import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig
} from '@ionic-native/admob-free';

import { AD_UNITS } from '../../app/app.config';

@Injectable()
export class AdProvider {
  constructor(private platform: Platform, private adMobFree: AdMobFree) {}

  showBanner(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.platform.is('cordova')) {
        const bannerConfig: AdMobFreeBannerConfig = {
          id: this.getAdId('banner'),
          autoShow: true
        };
        this.adMobFree.banner.config(bannerConfig);
        this.adMobFree.banner
          .prepare()
          .then(resolve)
          .catch(reject);
      }
    });
  }

  showInterstitial(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.platform.is('cordova')) {
        const interstitialConfig: AdMobFreeInterstitialConfig = {
          id: this.getAdId('interstitial'),
          autoShow: true
        };
        this.adMobFree.interstitial.config(interstitialConfig);
        this.adMobFree.interstitial
          .prepare()
          .then(resolve)
          .catch(reject);
      }
    });
  }

  private getAdId(format: string): string {
    if (this.platform.is('ios')) {
      return AD_UNITS.ios[format];
    } else if (this.platform.is('android')) {
      return AD_UNITS.android[format];
    } else {
      return '';
    }
  }
}
