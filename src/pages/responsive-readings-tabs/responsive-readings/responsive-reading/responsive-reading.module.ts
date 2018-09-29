import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResponsiveReadingPage } from './responsive-reading';
import { PipesModule } from '../../../../pipes/pipes.module';

@NgModule({
  declarations: [ResponsiveReadingPage],
  imports: [IonicPageModule.forChild(ResponsiveReadingPage), PipesModule]
})
export class ResponsiveReadingPageModule {}
