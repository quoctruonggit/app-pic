import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the ListFeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-feedback',
  templateUrl: 'list-feedback.html',
})
export class ListFeedbackPage {
  
  role = localStorage.role
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
    //this.loadListPosts();
    
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad ListFeedbackPage');
    this.loadListPosts();
  }

  openFeedbackDetailPage(p){
    if(localStorage.role == 'phu-huynh'){
      this.navCtrl.push("FeedbackDetailPage", p)
    }else if(localStorage.role == 'giao-vien'){
      this.navCtrl.push('ListStudentsPage', p);
    }else if(localStorage.role == 'admin'){
      this.navCtrl.push('ListStudentsPage', p);
    }
    localStorage.id_bv = p;
  }
  listPosts = []
  
  loadListPosts(){
    this.service.loading();
    if(localStorage.role == 'phu-huynh'){
      this.service.listPosts().then((res:any)=>{
        this.listPosts = res.data;
        console.log(this.listPosts);
      })
    }else if(localStorage.role == 'giao-vien'){
      this.service.listPostsBySender().then((res:any)=>{
        this.listPosts = res.data;
        console.log(this.listPosts);
      })
    }else if(localStorage.role == 'admin'){
      this.service.listPostsBySender().then((res:any)=>{
        this.listPosts = res.data;
        console.log(this.listPosts);
      })
    }
  }

  openAddPost(){
    this.navCtrl.push('CreatePostPage');
  }
}
