import { Component, Injector } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { IonicPage } from 'ionic-angular';

import { BasePage } from '../../base/base';
import { ResponsiveReadingProvider } from '../../../providers/responsive-reading/responsive-reading';
import { ResponsiveReading } from '../../../models/responsive-reading/responsive-reading';

@IonicPage({
  segment: 'responsive-readings/responsive-readings'
})
@Component({
  selector: 'page-responsive-readings',
  templateUrl: 'responsive-readings.html'
})
export class ResponsiveReadingsPage extends BasePage {
  params: any = {};
  responsiveReadings: ResponsiveReading[];
  isSearchbarOpened: boolean = false;
  searchControl: FormControl;
  searching: boolean;

  constructor(public injector: Injector, public responsiveReadingsServ: ResponsiveReadingProvider) {
    super(injector);

    this.searchControl = new FormControl();
    this.searchControl.valueChanges.debounceTime(500).subscribe(search => {
      this.loadData();
      this.searching = false;
    });
  }

  ionViewDidLoad() {
    this.loadData();
  }

  loadData() {
    this.responsiveReadingsServ
      .load(this.params)
      .subscribe(responsiveReadings => (this.responsiveReadings = responsiveReadings));
  }

  onSearchInput(event: any) {
    this.searching = true;
  }

  onSearchCancel(event: any) {
    this.params.search = '';
    this.isSearchbarOpened = false;
  }
}
