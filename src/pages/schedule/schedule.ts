import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {
  scrollHeight:any;
  id_lop:any
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public service: ServiceProvider) {
    this.scrollHeight = window.innerHeight - 40 + 'px';
    this.id_lop = navParams.data;
    this.loadSchedule(this.id_lop);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

  @ViewChild('sliderDay') sliderDay: Slides;

  
  next(){
      this.sliderDay.slideNext()
  }
  previous(){
      this.sliderDay.slidePrev()
  }

  // previousWeek(){

  // }

  // nextWeek(){
    
  // }
  schedule = []
  loadSchedule(id){
    this.service.loading();
    this.service.schedule(id).then((res:any)=>{
      this.schedule = res.data;
      console.log(this.schedule); 
      
    })
  }
  
}
