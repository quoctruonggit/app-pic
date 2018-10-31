import { Component } from '@angular/core';
import { Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { InformationPage } from '../pages/information/information';
import { TeacherListPage } from '../pages/teacher-list/teacher-list';
import { TeacherDetailPage } from '../pages/teacher-detail/teacher-detail';
import { FCM } from '@ionic-native/fcm';
import { ServiceProvider } from '../providers/service/service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor( platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private fcm: FCM, public service: ServiceProvider ) {
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();

      this.fcm.getToken().then(token => {
        localStorage.device_token = token;
        service.showToast(token);
      });
      
      this.fcm.onNotification().subscribe(data => {
        if(data.wasTapped){
          // if(data.type == "phanhoi"){
          //   navCtrl.push("FeedbackDetailPage", data.id_phanhoi)
          // }else{
            service.showAlert("Thông báo", data.message);
          //}
        } else {
          service.showAlert("Thông báo", data.message);
        };
      });




    });
    if (localStorage.login) {
      if(localStorage.role == "phu-huynh"){
        this.rootPage = InformationPage;
      }else if(localStorage.role == "admin"){
        this.rootPage = MainPage;
      }else if(localStorage.role == "giao-vien"){
        this.rootPage = TeacherDetailPage;
      }
      
    }else{
      this.rootPage = LoginPage;
    }
  }
}

