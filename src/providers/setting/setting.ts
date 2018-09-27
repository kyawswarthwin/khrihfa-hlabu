import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class SettingProvider {
  private readonly SETTING_KEY: string = '_Setting';
  private settings: any;

  constructor(private storage: Storage) {
    storage
      .get(this.SETTING_KEY)
      .then(settings => (this.settings = settings || {}))
      .catch(console.error);
  }

  getValue(key: string, defaultValue?: any): any {
    return this.settings && this.settings.hasOwnProperty(key) ? this.settings[key] : defaultValue;
  }

  setValue(key: string, value: any): Promise<any> {
    this.settings[key] = value;
    return this.storage.set(this.SETTING_KEY, this.settings);
  }
}
