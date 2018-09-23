import { NgModule } from '@angular/core';
import { SafePipe } from './safe/safe';
import { TruncatePipe } from './truncate/truncate';

@NgModule({
  declarations: [SafePipe, TruncatePipe],
  imports: [],
  exports: [SafePipe, TruncatePipe]
})
export class PipesModule {}
