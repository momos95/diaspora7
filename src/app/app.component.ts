import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {AfriquePage} from "../pages/afrique/afrique";
import {PolitiquePage} from "../pages/politique/politique";
import {ActuPage} from "../pages/actu/actu";
import {InternationnalPage} from "../pages/internationnal/internationnal";
import {CulturePage} from "../pages/culture/culture";
import {LifestylePage} from "../pages/lifestyle/lifestyle";
import {SantePage} from "../pages/sante/sante";
import {SportPage} from "../pages/sport/sport";
import {FemmePage} from "../pages/femme/femme";
import {JusticePage} from "../pages/justice/justice";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ActuPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Actualité', component: ActuPage },
      { title: 'Politique', component: PolitiquePage },
      { title: 'Internationnal', component: InternationnalPage },
      { title: 'Afrique', component: AfriquePage },
      { title: 'Culture', component: CulturePage },
      { title: 'LifeStyle', component: LifestylePage },
      { title: 'Santé', component: SantePage },
      { title: 'Sport', component: SportPage },
      { title: 'Femme', component: FemmePage },
      { title: 'Justice', component: JusticePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
