import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { FacebookService } from 'ngx-facebook';

import { MyApp } from './app.component';
import { SettingProvider } from '../providers/setting/setting';
import { HymnProvider } from '../providers/hymn/hymn';
import { BookmarkProvider } from '../providers/bookmark/bookmark';
import { NewsProvider } from '../providers/news/news';

@NgModule({
  declarations: [MyApp],
  entryComponents: [MyApp],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    IonicStorageModule.forRoot()
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SplashScreen,
    StatusBar,
    FacebookService,
    SettingProvider,
    HymnProvider,
    BookmarkProvider,
    NewsProvider
  ],
  bootstrap: [IonicApp]
})
export class AppModule {}
