import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class SettingProvider {
  private SETTING_KEY: string = '_Setting';
  private settings: any;

  constructor(private storage: Storage) {
    this.initialize();
  }

  private initialize() {
    this.storage.get(this.SETTING_KEY).then(settings => (this.settings = settings || {}));
  }

  getValue(key: string, defaultValue?: any): any {
    return this.settings && this.settings.hasOwnProperty(key) ? this.settings[key] : defaultValue;
  }

  setValue(key: string, value: any): Promise<any> {
    this.settings[key] = value;
    return this.storage.set(this.SETTING_KEY, this.settings);
  }
}
