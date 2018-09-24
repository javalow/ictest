import { NgModule, ErrorHandler, Injectable, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome.page';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera } from '@ionic-native/camera';
import { PhotoProvider } from '../providers/photo/photo';
import { IonicStorageModule } from '@ionic/storage';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { Pro } from '@ionic/pro';
import { Intercom } from '@ionic-native/intercom';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';


Pro.init('e52f80dd', {
 appVersion: '0.0.1'
});



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

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      iconMode: 'ios',
      pageTransition: 'ios-transition'
    }),
    IonicStorageModule.forRoot(),
    NgxErrorsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    IonicErrorHandler,
    [{provide: ErrorHandler, useClass: MyErrorHandler}],
    PhotoProvider,
    AuthService,
		AngularFireAuth,
    DataService,
		AngularFireDatabase,
    Intercom
  ]
})
export class AppModule {}
