import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the RecoverPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recover-password',
  templateUrl: 'recover-password.html',
})
export class RecoverPasswordPage {
  email = ''
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private alertCtrl: AlertController, public service: ServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoverPasswordPage');
  }

  doContinue(){
    

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!this.email){
      this.service.showAlert('Thông báo', 'Vui lòng nhập địa chỉ email')
    }else if(!re.test(this.email)) {
      this.service.showAlert('Thông báo', 'Địa chỉ email không đúng định dạng.')
    }else{
      this.service.loading();
      this.service.checkEmail(this.email).then((res:any)=>{
        let alert = this.alertCtrl.create({
          title: 'Xác nhận email',
          message: 'Chúng tôi sẽ gửi mã xác thực tới email '+this.email+' từ tổng đài để kích hoạt tài khoản của bạn. Vui lòng xác nhận email này là đúng.',
          buttons: [
            {
              text: 'Thay đổi',
              role: '1',
              handler: () => {
                
              }
            },
            {
              text: 'Xác nhận',
              handler: () => {
                // chỗ này là gửi email
                localStorage.email = res.data.email;
                this.service.sendEmail(res.data.email).then((res:any)=>{
                  //console.log(res.data);
                  this.navCtrl.push("InsertCodePage");
                })
                  
              }
            }
          ]
        });
        alert.present();
      })
      
    }

    
  }
}
