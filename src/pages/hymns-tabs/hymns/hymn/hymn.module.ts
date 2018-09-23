import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HymnPage } from './hymn';
import { PipesModule } from '../../../../pipes/pipes.module';

@NgModule({
  declarations: [HymnPage],
  imports: [IonicPageModule.forChild(HymnPage), PipesModule]
})
export class HymnPageModule {}
