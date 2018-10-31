import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, 
              public service: ServiceProvider, public app: App) {
    //this.loadStudents();
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad InformationPage');
    this.loadStudents();
  }
  openSchedulePage(p){
    this.navCtrl.push("SchedulePage", p);
  }
  openTestCalendarPage(p){
    this.navCtrl.push("TestCalendarPage", p);
  }
  openTableTestScorePage(p){
    this.navCtrl.push("TableTestScorePage", p);
  }

  openHopThu(){
    this.navCtrl.push("ListFeedbackPage");
  }
  data:any = {}
  loadStudents(){
    this.service.loading();
    this.service.infomationDetail(this.data).then((res:any)=>{
      this.data = res.data;
      console.log(this.data);
    })
  }

  doLogout(){
    let confirm = this.alertCtrl.create({
      title: 'Bạn muốn đăng xuất tài khoảng?',
      buttons: [
        {
          text: 'Không',
          handler: () => {
          }
        },
        {
          text: 'Có',
          handler: () => {
            localStorage.clear();       
            this.app.getRootNav().setRoot("LoginPage")
          }
        }
      ]
    });
    confirm.present();    
  }

  doChangePassword(){
    this.navCtrl.push("ChangePasswordPage");
  }
}
