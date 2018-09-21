import { NgModule, ErrorHandler, Injectable, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera } from '@ionic-native/camera';
import { PhotoProvider } from '../providers/photo/photo';
import { IonicStorageModule } from '@ionic/storage';
import { Pro } from '@ionic/pro';

Pro.init('e52f80dd', {
 appVersion: '0.0.1'
});

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PhotoProvider
  ]
})
export class AppModule {}

@Injectable()
export class MyErrorHandler implements ErrorHandler {

 ionicErrorHandler: IonicErrorHandler;

 constructor(injector: Injector) {
   try {
     this.ionicErrorHandler = injector.get(IonicErrorHandler);
   } catch(e) {
     // Unable to get the IonicErrorHandler provider, ensure
     // IonicErrorHandler has been added to the providers list below
   }
 }

 handleError(err: any): void {
   Pro.monitoring.handleNewError(err);

   this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
 }
}
