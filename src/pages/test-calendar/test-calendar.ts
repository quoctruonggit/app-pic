import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the TestCalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-calendar',
  templateUrl: 'test-calendar.html',
})
export class TestCalendarPage {

  scrollHeight:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
   
    this.loadLichThi(navParams.data); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestCalendarPage');
  }

  @ViewChild('sliderStudent') sliderStudent: Slides;

  
 
  
  kyThi:any = {}
  lichThi = []
  loadLichThi(id){
    this.service.loading();
    this.service.loadLichThi(id).then((res:any)=>{
      this.kyThi = res.data;
      console.log(this.kyThi);
      if( this.kyThi == null ){
        this.lichThi = []
        console.log(this.lichThi);
      }else if(this.kyThi.lichthi == null){
        this.lichThi = []
        console.log(this.lichThi);
      }else{
        this.lichThi = this.kyThi.lichthi;
        console.log(this.lichThi);
      }
    })
  }
}
