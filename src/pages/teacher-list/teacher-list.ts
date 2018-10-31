import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';



@IonicPage()
@Component({
  selector: 'page-teacher-list',
  templateUrl: 'teacher-list.html',
})
export class TeacherListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, 
              public service: ServiceProvider, public app: App) {
    this.loadListTeachers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherListPage');
  }
  openTeacherDetail(p){
    this.navCtrl.push("TeacherDetailPage")
    localStorage.idTeacher = p;
  }

  search(keyword){
    this.service.loading();
    this.service.searchTeacher(keyword).then((res:any)=>{
      this.listTeachers = res.data;
      console.log(this.listTeachers);
    })
  }
  listTeachers = [];
  loadListTeachers(){
    this.service.loading();
    this.service.listTeachers(this.listTeachers).then((res:any)=>{
      this.listTeachers = res.data;
      console.log(this.listTeachers);
    })
  }
  
  
  
}
