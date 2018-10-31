import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';


/**
 * Generated class for the CreatePostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-post',
  templateUrl: 'create-post.html',
})
export class CreatePostPage {
  data:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public service: ServiceProvider, public alertCtrl: AlertController) {
    this.loadStudents();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePostPage');
  }

  listStudents = [];
  loadStudents(){
    this.service.listStudents().then((res:any)=>{
      this.listStudents = res.data;
      console.log(this.listStudents);
      
    })
  }
  status:any
  listNameStudents:any
  listIdParents:any;
  chooseStudents() {
    this.data.bv_user_nhan = []
    let alert = this.alertCtrl.create();
    alert.setTitle('Chọn học sinh');
    // alert.addInput({
    //   type: 'checkbox',
    //   label: 'Chọn tất cả',
    //   value: this.status = localStorage.id_lop
    // })
    this.listStudents.forEach(element => {
      
      alert.addInput({
        type: 'checkbox',
        label: element.hoten,
        value: element.phu_huynh_id,
        //checked: this.status ? true :false
      });


    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        

        this.data.bv_user_nhan = data;
        this.listNameStudents = [];
        data.forEach(res => {
          this.listStudents.forEach(element => {
            if(res == element.phu_huynh_id){
              this.listNameStudents.push({'name': element.hoten});
            }
          });
        })
        // console.log(this.listStudents);
        // console.log(this.listIdParents);
        // console.log(this.listNameStudents);
      }
    });
    alert.present();
  }

  send(){
    if(!this.data.content || !this.data.title){
      this.service.showAlert('Thông báo', 'Vui lòng nhập đủ thông tin')
    }else if(!this.listNameStudents){
      this.service.showAlert('Thông báo', 'Vui lòng chọn học sinh')
    }else{
      this.data.id_lop = [JSON.parse(localStorage.id_lop)]
      this.service.createPost(this.data).then((res:any)=>{
        console.log(res.data);  
        this.service.showToast('Tạo bài viết thành công');
        this.listNameStudents = null;
        this.data.content = '';
        this.data.title = '';
      })
      //console.log(this.data);
      
      
    }    
  }
}
