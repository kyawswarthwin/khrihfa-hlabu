import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MessageViewComponent } from './message-view/message-view';
import { VjsAudioComponent } from './vjs-audio/vjs-audio';
import { VjsVideoComponent } from './vjs-video/vjs-video';

@NgModule({
  declarations: [MessageViewComponent, VjsAudioComponent, VjsVideoComponent],
  imports: [IonicModule],
  exports: [MessageViewComponent, VjsAudioComponent, VjsVideoComponent]
})
export class ComponentsModule {}
