import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HymnProvider } from '../providers/hymn/hymn';

@NgModule({
  declarations: [MyApp],
  entryComponents: [MyApp],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SplashScreen,
    StatusBar,
    HymnProvider
  ],
  bootstrap: [IonicApp]
})
export class AppModule {}
