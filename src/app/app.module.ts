import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage} from '../pages/login/login';
import { WpProvider } from '../providers/wp/wp';

import { Http, HttpModule } from '@angular/http';
import {
  WpApiModule,
  WpApiLoader,
  WpApiStaticLoader
} from 'wp-api-angular';
import { ConstantProvider } from '../providers/constant/constant';

/*
  fireBase 임포트
*/
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { AuthProvider } from '../providers/auth/auth';




///Users/PYM/peace-wp-client/src/assets/data/xe_document_category.json
export function WpApiLoaderFactory(http) {
  //return new WpApiStaticLoader(http, 'assets/data/youth_cell3.json');
  //return new WpApiStaticLoader(http, 'https://devdactic.com/wp-json/');
  return new WpApiStaticLoader(http, 'http://peacech.net/wp-json/');
}
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    WpApiModule.forRoot({
      provide: WpApiLoader,
      useFactory: (WpApiLoaderFactory),
      deps: [Http]
    }),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WpProvider,
    ConstantProvider,
    AuthProvider
  ]
})
export class AppModule {}
