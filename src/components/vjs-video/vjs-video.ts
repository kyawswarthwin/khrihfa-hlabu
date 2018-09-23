import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { MenuController } from 'ionic-angular';

import videojs from 'video.js';
import 'videojs-playlist';

@Component({
  selector: 'vjs-video',
  templateUrl: 'vjs-video.html'
})
export class VjsVideoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('video') video: ElementRef;
  @Input() src: any;
  @Input() poster: string;
  @Input() playlist: any[];
  @Input() startIndex: number;
  @Input()
  get autoplay(): boolean { return this._autoplay; }
  set autoplay(value: boolean) { this._autoplay = this.coerceBooleanProperty(value); }
  private _autoplay = false;

  player: any;

  constructor(private statusBar: StatusBar, private menuCtrl: MenuController) {}

  ngAfterViewInit() {
    this.player = videojs(this.video.nativeElement);
    if (this.playlist) {
      this.player.playlist(this.playlist);
      this.player.playlist.autoadvance(0);
      this.player.playlist.currentItem(this.startIndex);
      if (this.playlist.length > 1) {
        const Button = videojs.getComponent('Button');

        const PreviousButton = videojs.extend(Button, {
          constructor: function(player, options) {
            Button.call(this, player, options);
            this.controlText('Previous');
          },
          buildCSSClass: function() {
            return `vjs-previous-control ${Button.prototype.buildCSSClass.call(this)}`;
          },
          handleClick: event => {
            this.player.playlist.previous();
          }
        });
        videojs.registerComponent('PreviousButton', PreviousButton);
        this.player.controlBar.addChild('PreviousButton', {}, 0);

        const NextButton = videojs.extend(Button, {
          constructor: function(player, options) {
            Button.call(this, player, options);
            this.controlText('Next');
          },
          buildCSSClass: function() {
            return `vjs-next-control ${Button.prototype.buildCSSClass.call(this)}`;
          },
          handleClick: event => {
            this.player.playlist.next();
          }
        });
        videojs.registerComponent('NextButton', NextButton);
        this.player.controlBar.addChild('NextButton', {}, 2);
      }
    } else {
      this.player.src(this.src);
      this.player.poster(this.poster);
    }
    this.player.autoplay(this.autoplay);
    this.player.on('fullscreenchange', event => {
      if (this.player.isFullscreen()) {
        this.statusBar.hide();
        this.menuCtrl.enable(false);
      } else {
        this.statusBar.show();
        this.menuCtrl.enable(true);
      }
    });
  }

  ngOnDestroy() {
    this.player.dispose();
  }

  coerceBooleanProperty(value: any): boolean {
    return value != null && `${value}` !== 'false';
  }
}
