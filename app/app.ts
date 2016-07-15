import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

//pages
import {HomePage} from './pages/home/home.page'
import { Page2 } from './pages/page2/page2';


@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component:HomePage },
      {title: 'On Arrival', component:HomePage},
      {title: 'Translate', component: HomePage},
      {title: 'Connectivity',component: HomePage},
      {title: 'Emergency',component:HomePage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
