import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

@NgModule({
  declarations: [MyApp],
  entryComponents: [MyApp],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, SplashScreen, StatusBar],
  bootstrap: [IonicApp]
})
export class AppModule {}
