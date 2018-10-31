import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the TeacherWorkCalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher-work-calendar',
  templateUrl: 'teacher-work-calendar.html',
})
export class TeacherWorkCalendarPage {
  id_giaovien:any;
  scrollHeight: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
    this.scrollHeight = window.innerHeight - 40 + 'px';
    this.id_giaovien = navParams.data;
    this.loadLichday(this.id_giaovien);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherWorkCalendarPage');
  }
  @ViewChild('sliderDay') sliderDay: Slides;
  next() {
    this.sliderDay.slideNext()
  }
  previous() {
    this.sliderDay.slidePrev()
  }

  
  lichday = []
  loadLichday(id){
    this.service.loading();
    this.service.lichDay(id).then((res:any)=>{
      this.lichday = res.data;
      console.log(this.lichday); 
      
    })
  }
}
