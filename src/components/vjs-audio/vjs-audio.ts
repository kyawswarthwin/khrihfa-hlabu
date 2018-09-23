import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';

import videojs from 'video.js';
import 'videojs-playlist';

@Component({
  selector: 'vjs-audio',
  templateUrl: 'vjs-audio.html'
})
export class VjsAudioComponent implements AfterViewInit, OnDestroy {
  @ViewChild('audio') audio: ElementRef;
  @Input() src: any;
  @Input() playlist: any[];
  @Input() startIndex: number;
  @Input()
  get autoplay(): boolean { return this._autoplay; }
  set autoplay(value: boolean) { this._autoplay = this.coerceBooleanProperty(value); }
  private _autoplay = false;

  player: any;

  constructor() {}

  ngAfterViewInit() {
    this.player = videojs(this.audio.nativeElement, {
      aspectRatio: '1:0',
      controlBar: {
        fullscreenToggle: false
      }
    });
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
    }
    this.player.autoplay(this.autoplay);
  }

  ngOnDestroy() {
    this.player.dispose();
  }

  coerceBooleanProperty(value: any): boolean {
    return value != null && `${value}` !== 'false';
  }
}
