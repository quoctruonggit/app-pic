import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';



@IonicPage()
@Component({
  selector: 'page-feedback-detail',
  templateUrl: 'feedback-detail.html',
})
export class FeedbackDetailPage {
  @ViewChild(Content) content: Content;
  contentSend = "";
  id_post = localStorage.id_bv;
  id_nguoidung = localStorage.id_user;
  id_nguoinhan:any
  cmt_user_nhan

  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
    this.cmt_user_nhan = navParams.data;
  }
  ionViewWillEnter(){
    
    setTimeout(()=>{
      this.loadComments(this.cmt_user_nhan);
    }, 1);
    setTimeout(()=>{
      this.content.scrollToBottom(0);  
    }, 2);
    
  }
  img_sender = '';
  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackDetailPage');
    if(this.role == 'admin' || this.role == 'giao-vien'){
      this.img_sender = "assets/imgs/man.png";
    }else if(this.role == 'phu-huynh'){
      this.img_sender = "assets/imgs/logo-nen-01.png";
    }
  }
  
  

  data:any = {};
  send(){
    if( this.contentSend != ""){
      this.data.cmt_noidung = this.contentSend;
      this.data.cmt_id_baiviet = this.id_post;
      if(this.role == 'admin' || this.role == 'giao-vien'){
        this.data.cmt_userid_nhan = this.cmt_user_nhan;
      }else if(this.role == 'phu-huynh'){
        this.data.cmt_userid_nhan = this.id_nguoinhan;
      }
      console.log(this.data);
      this.service.doComment(this.data).then((res:any)=>{
        console.log(res);
        this.loadComments(this.cmt_user_nhan);
        setTimeout(()=>{
          this.content.scrollToBottom(0);  
          this.contentSend = "";
        }, 1);
      })
    }
  }


  comments:any = {}
  role = localStorage.role;
  loadComments(cmt_user_nhan){
    this.service.loading();
    if(this.role == 'phu-huynh'){
      this.service.detailPost().then((res:any)=>{
        this.comments = res.data;
        this.id_nguoinhan = res.data.bv_user_gui;
        console.log(this.comments);
        setTimeout(()=>{
          this.content.scrollToBottom(0);  
        }, 1);
      })
    }else if(this.role == 'admin' || this.role == 'giao-vien'){
      this.service.detailPostAdmin(cmt_user_nhan).then((res:any)=>{
        this.comments = res.data;
        this.id_nguoinhan = res.data.bv_user_gui;
        console.log(this.comments);
        setTimeout(()=>{
          this.content.scrollToBottom(0);  
        }, 1);
      })
    }
    


    
  }
}
