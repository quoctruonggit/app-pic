import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ServiceProvider } from '../providers/service/service';
import { MainPage } from '../pages/main/main';
import { MainPageModule } from '../pages/main/main.module';
import { LoginPageModule } from '../pages/login/login.module';
import { InformationPageModule } from '../pages/information/information.module';
import { TeacherDetailPageModule } from '../pages/teacher-detail/teacher-detail.module';
import { TeacherListPageModule } from '../pages/teacher-list/teacher-list.module';
import { FCM } from '@ionic-native/fcm';

@NgModule({
  declarations: [
    MyApp,
    //LoginPage,
    // MainPage
  ],
  imports: [
    BrowserModule, HttpClientModule, HttpModule, MainPageModule, LoginPageModule, 
    InformationPageModule, TeacherDetailPageModule, TeacherListPageModule, 
    IonicModule.forRoot(MyApp, {
      mode: "ios",
      backButtonText: '',
      backButtonIcon: 'md-arrow-back',
      
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MainPage
  ],
  providers: [
    StatusBar,
    FCM,
    
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}
