import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http'

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DecimalPipe } from '@angular/common';
import {MillionPipe} from './../million';
import { AssessmentPage } from '../pages/assessment/assessment';
import { CreateAssessmentPage } from '../pages/create-assessment/create-assessment';
import { ModalComponent } from '../components/modal/modal';
import { HelperProvider } from '../providers/helper/helper';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ClientsPage } from '../pages/clients/clients';
import { AccountPage } from '../pages/account/account';

@NgModule({
  declarations: [
    MyApp,
    MillionPipe,
    AssessmentPage,
    CreateAssessmentPage,
    ModalComponent,
    TabsPage,
    HomePage,
    ClientsPage,
    AccountPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AssessmentPage,
    CreateAssessmentPage,
    ModalComponent,
    TabsPage,
    HomePage,
    ClientsPage,
    AccountPage
  ],
  providers: [
    StatusBar,
    DecimalPipe,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HelperProvider,
  ]
})
export class AppModule {}
