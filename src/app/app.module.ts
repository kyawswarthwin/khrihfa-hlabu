import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { FacebookService } from 'ngx-facebook';

import { MyApp } from './app.component';
import { HymnProvider } from '../providers/hymn/hymn';
import { SettingProvider } from '../providers/setting/setting';

@NgModule({
  declarations: [MyApp],
  entryComponents: [MyApp],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SplashScreen,
    StatusBar,
    FacebookService,
    HymnProvider,
    SettingProvider
  ],
  bootstrap: [IonicApp]
})
export class AppModule {}
