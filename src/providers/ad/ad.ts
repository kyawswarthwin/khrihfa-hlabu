import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

import { AD_UNITS } from '../../app/app.config';

declare var FacebookAds: any;

@Injectable()
export class AdProvider {
  public readonly AD_POSITION: any;

  private readonly LICENSE: string = '7af82f9201280e3f1b7687257c234dc8';

  constructor(private platform: Platform) {
    if (platform.is('cordova') && FacebookAds) {
      this.AD_POSITION = FacebookAds.AD_POSITION;
    }
  }

  showBanner(position: number = 8): Promise<any> {
    return new Promise((resolve, reject) => {
      this.platform.is('cordova') &&
        FacebookAds &&
        FacebookAds.createBanner(
          {
            adId: this.getAdId('banner'),
            position: position,
            autoShow: true,
            license: this.LICENSE
          },
          resolve,
          reject
        );
    });
  }

  showInterstitial(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.platform.is('cordova') &&
        FacebookAds &&
        FacebookAds.prepareInterstitial(
          {
            adId: this.getAdId('interstitial'),
            autoShow: true,
            license: this.LICENSE
          },
          resolve,
          reject
        );
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
