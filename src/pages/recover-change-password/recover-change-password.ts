import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the RecoverChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recover-change-password',
  templateUrl: 'recover-change-password.html',
})
export class RecoverChangePasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoverChangePasswordPage');
  }
  
  password = '';
  repassword = '';
  updatePassword(){
    if(!this.password || !this.repassword){
      this.service.showAlert('Thông báo', 'Vui lòng điền đầy đủ thông tin')
    } else if(this.password != this.repassword){
      this.service.showAlert('Thông báo', 'Mật khẩu không trùng khớp')
    }else{
      this.service.changePasswordRecover(this.password).then((res:any)=>{
        //console.log(res);
        let alert = this.alertCtrl.create({
          title: 'Đổi mật khẩu thành công',
          message: 'Vui lòng đăng nhập lại',
          buttons: [
            
            {
              text: 'Trở về trang đăng nhập',
              handler: () => {
                  this.navCtrl.setRoot("LoginPage");
              }
            }
          ]
        });
        alert.present();
      })
    }
  }
  
}
