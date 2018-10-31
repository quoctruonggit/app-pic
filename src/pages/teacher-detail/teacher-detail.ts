import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the TeacherDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher-detail',
  templateUrl: 'teacher-detail.html',
})
export class TeacherDetailPage {
 // id_teacher:any;
  id = localStorage.idTeacher;
  role = localStorage.role
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, 
    public service: ServiceProvider, public app: App) {
    
    this.loadDetailTeacher(this.id);
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad TeacherDetailPage');
    //this.loadDetailTeacher(navParams.data);
  }

  openTeacherWorkCalendar(p){
    this.navCtrl.push("TeacherWorkCalendarPage", p);
  }

  teacher:any = {}
  loadDetailTeacher(id){
    this.service.loading();
    this.service.detailTeacher(id).then((res:any)=>{
      this.teacher = res.data.teacher;
      localStorage.id_lop = res.data.teacher.lophoc_id; 
      console.log(this.teacher);
      
    })
  }

  changePassword(){
    //localStorage.email = localStorage.emailTeacher;
    this.navCtrl.push("ChangePasswordPage");
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

  openHopThu(){
    this.navCtrl.push("ListFeedbackPage");
  }
}
