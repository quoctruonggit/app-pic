import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the InsertCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insert-code',
  templateUrl: 'insert-code.html',
})
export class InsertCodePage {

  email = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
    this.email = localStorage.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertCodePage');
  }
  code:any
  doContinue(){
    
    this.service.loading();
    this.service.checkCode(this.code).then((res:any)=>{
      //console.log(res);
      
    })
    this.navCtrl.push("RecoverChangePasswordPage");
  }
}
