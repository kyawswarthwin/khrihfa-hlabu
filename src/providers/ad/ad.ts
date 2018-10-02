import { Injectable } from '@angular/core';

declare var FacebookAds: any;

@Injectable()
export class AdProvider {
  public readonly AD_POSITION: any;

  private readonly LICENSE: string = '7af82f9201280e3f1b7687257c234dc8';

  constructor() {
    if (FacebookAds) {
      this.AD_POSITION = FacebookAds.AD_POSITION;
    }
  }

  showBanner(position: number = this.AD_POSITION.BOTTOM_CENTER): Promise<any> {
    return new Promise((resolve, reject) => {
      FacebookAds &&
        FacebookAds.createBanner(
          {
            adId: '1963332043744938_1971851559559653',
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
      FacebookAds &&
        FacebookAds.prepareInterstitial(
          {
            adId: '1963332043744938_1973299412748201',
            autoShow: true,
            license: this.LICENSE
          },
          resolve,
          reject
        );
    });
  }
}
