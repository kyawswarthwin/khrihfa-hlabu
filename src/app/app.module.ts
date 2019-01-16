import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { AdMobFree } from '@ionic-native/admob-free';

import { MyApp } from './app.component';
import { SettingProvider } from '../providers/setting/setting';
import { HymnProvider } from '../providers/hymn/hymn';
import { ResponsiveReadingProvider } from '../providers/responsive-reading/responsive-reading';
import { BookmarkProvider } from '../providers/bookmark/bookmark';
import { NewsProvider } from '../providers/news/news';
import { AdProvider } from '../providers/ad/ad';

@NgModule({
  declarations: [MyApp],
  entryComponents: [MyApp],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top',
      tabsHideOnSubPages: true
    }),
    IonicStorageModule.forRoot()
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SplashScreen,
    StatusBar,
    AdMobFree,
    SettingProvider,
    HymnProvider,
    ResponsiveReadingProvider,
    BookmarkProvider,
    NewsProvider,
    AdProvider
  ],
  bootstrap: [IonicApp]
})
export class AppModule {}
