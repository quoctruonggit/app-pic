import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
  user:any = {}
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public service: ServiceProvider, private alertCtrl: AlertController,  public app: App) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }

  cancel(){
    if(localStorage.role == 'phu-huynh'){
      this.navCtrl.setRoot('InformationPage');
    }else if(localStorage.role == 'giao-vien'){
      this.navCtrl.setRoot('TeacherDetailPage');
    }
  }

  savePassword(){
    
    if(!this.user.password || !this.user.passwordNew){
      this.service.showAlert('Thông báo','Vui lòng điền đầy đủ thông tin');
    }else if(this.user.password == this.user.passwordNew){
      this.service.showAlert('Thông báo','Bạn đang sử dụng mật khẩu này');
    }else{
      console.log(this.user);
      this.service.loading();
      this.service.changePassword(this.user).then((res:any)=>{
        console.log(res);
        
          let alert = this.alertCtrl.create({
            title: 'Đổi mật khẩu thành công',
            //message: 'Do you want to buy this book?',
            buttons: [
              {
                text: 'Về trang chính',
                role: '1',
                handler: () => {
                  if(localStorage.role == 'phu-huynh'){
                    this.navCtrl.setRoot('InformationPage');
                  }else if(localStorage.role == 'giao-vien'){
                    this.navCtrl.setRoot('TeacherDetailPage');
                  }
                  
                }
              }//,
              // {
              //   text: 'Đăng nhập lại',
              //   handler: () => {
              //     localStorage.clear();       
              //     this.app.getRootNav().setRoot("LoginPage")
              //   }
              // }
            ]
          });
          alert.present();
        
      })
    }
  }

}
