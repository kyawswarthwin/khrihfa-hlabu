import { Injectable } from '@angular/core';

declare var FacebookAds: any;

@Injectable()
export class AdProvider {
  public readonly AD_POSITION: any;

  constructor() {
    if (FacebookAds) {
      this.AD_POSITION = FacebookAds.AD_POSITION;
    }
  }

  showBanner(position: number = this.AD_POSITION.BOTTOM_CENTER) {
    return new Promise((resolve, reject) => {
      FacebookAds &&
        FacebookAds.createBanner(
          {
            adId: '1963332043744938_1971851559559653',
            position: position,
            autoShow: true
          },
          resolve,
          reject
        );
    });
  }

  showInterstitial() {
    return new Promise((resolve, reject) => {
      FacebookAds &&
        FacebookAds.prepareInterstitial(
          {
            adId: '1963332043744938_1973299412748201',
            autoShow: true
          },
          resolve,
          reject
        );
    });
  }
}
