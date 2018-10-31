import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the ListStudentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-students',
  templateUrl: 'list-students.html',
})
export class ListStudentsPage {
  id_post = localStorage.id_bv
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
    //this.loadListStudents(this.id_post)
    //this.id_post = navParams.data;
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad ListStudentsPage');
    this.loadListStudents(this.id_post)
  }
  listStudents = []
  loadListStudents(id){
    this.service.loading();
    this.service.listStudentsInPost(id).then((res:any)=>{
      this.listStudents = res.data;
      console.log(this.listStudents);
    })
  }

  openHopThu(p){

    this.navCtrl.push('FeedbackDetailPage', p);
    //console.log(p);
    
  }

}
