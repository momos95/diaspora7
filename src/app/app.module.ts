import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestDataProvider } from '../providers/rest-data/rest-data';
import {ActuPage} from "../pages/actu/actu";
import {AfriquePage} from "../pages/afrique/afrique";
import {CulturePage} from "../pages/culture/culture";
import {FemmePage} from "../pages/femme/femme";
import {InternationnalPage} from "../pages/internationnal/internationnal";
import {JusticePage} from "../pages/justice/justice";
import {LifestylePage} from "../pages/lifestyle/lifestyle";
import {PolitiquePage} from "../pages/politique/politique";
import {SantePage} from "../pages/sante/sante";
import {SportPage} from "../pages/sport/sport";
import {HttpModule} from "@angular/http";
import {DetailArticlePage} from "../pages/detail-article/detail-article";

@NgModule({
  declarations: [
    MyApp,
    ActuPage,
    AfriquePage,
    CulturePage,
    FemmePage,
    InternationnalPage,
    JusticePage,
    LifestylePage,
    PolitiquePage,
    SantePage,
    SportPage,
    DetailArticlePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActuPage,
    AfriquePage,
    CulturePage,
    FemmePage,
    InternationnalPage,
    JusticePage,
    LifestylePage,
    PolitiquePage,
    SantePage,
    SportPage,
    DetailArticlePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestDataProvider
  ]
})
export class AppModule {}
