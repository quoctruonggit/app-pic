import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, 
     public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  openInformationPage(){
    this.navCtrl.push("InformationPage");
  }
  openSchedulePage(){
    this.navCtrl.push("SchedulePage");
  }
  openTestCalendarPage(){
    this.navCtrl.push("TestCalendarPage");
  }
  openTableTestScorePage(){
    this.navCtrl.push("TableTestScorePage");
  }
  openTeacherListPage(){
    this.navCtrl.push("TeacherListPage")
  }
  openListFeedbackPage(){
    this.navCtrl.push("ListFeedbackPage");
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
}
