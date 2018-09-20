import { Component, Injector } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { BasePage } from '../base/base';

declare var $: any;

@IonicPage({
  name: 'hymn',
  segment: 'hymns/:id',
  defaultHistory: ['hymns']
})
@Component({
  selector: 'page-hymn',
  templateUrl: 'hymn.html'
})
export class HymnPage extends BasePage {
  constructor(public injector: Injector, private platform: Platform) {
    super(injector);
  }

  ionViewDidLoad() {
    $('#flipbook').turn({
      width: '100%',
      height: this.platform.height() - 50,
      display: 'single',
      autoCenter: true
    });

    $('#flipbook').turn('pages', 514);

    $('#flipbook').bind('turning', function(event, page) {
      function addPage(page, book) {
        const element = $('<div />').html('Loading...');
        book.turn('addPage', element, page);
        $.ajax({ url: `assets/data/${page}.html` }).done(data => {
          element.html(data);
        });
      }
      const range = $(this).turn('range', page);
      for (page = range[0]; page <= range[1]; page++) addPage(page, $(this));
    });
  }
}
