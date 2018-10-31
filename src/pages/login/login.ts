import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openMainPage(){
    if(!this.user.email || !this.user.password){
      this.service.showAlert("Thông báo","Vui lòng điền đầy đủ thông tin")
    }else{
      this.service.loading();
      this.service.doLogin(this.user).then((res: any)=>{
        console.log(res);
        //this.navCtrl.setRoot("MainPage");
        console.log(res.role[0]);
        if(res.role[0] == "phu-huynh"){
          
          this.navCtrl.setRoot("InformationPage");
          localStorage.login = 1;
          localStorage.id_user = res.data.id;
          localStorage.email = res.data.email;
          localStorage.role = res.role[0]
        }else if(res.role[0] == "admin"){
          //this.navCtrl.setRoot("TeacherListPage");
          this.navCtrl.setRoot("MainPage");
          localStorage.login = 1;
          localStorage.id_user = res.data.id;
          localStorage.email = res.data.email;
          localStorage.role = res.role[0]
        }else if(res.role[0] == "giao-vien"){
          console.log(res.data);
          localStorage.idTeacher = res.data.id;
          this.navCtrl.setRoot("TeacherDetailPage");
          localStorage.login = 1;
          localStorage.id_user = res.data.id;
          localStorage.email = res.data.email;
          localStorage.role = res.role[0];
              
        }
        
      })
    }
  }

  openForgotPassPage(){
    this.navCtrl.push("RecoverPasswordPage");
  }
}
