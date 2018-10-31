import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@Injectable()
export class ServiceProvider {

  constructor(private toastCtrl: ToastController, public http: HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    console.log('Hello ServiceProvider Provider');
  }

  apiUrl = 'http://pic.miennam24h.vn/api/';
  //apiUrl = 'http://localhost:81/ProjectLaravel/API/pic/public/api/';

  infomationDetail(id){
    return this.http_get({
      route: 'parents/detail-parent',
      param: {
        ph_id: localStorage.id_user
      }
    });
  }
  
  listTeachers(list){
    return this.http_get({
      route: 'teachers/list-teachers',
      param: list
    })
  }

  detailTeacher(canbo_id){
    return this.http_get({
      route: 'teachers/detail-teacher',
      param: {
        canbo_id
      }
    })
  }

  // post
  // tạo bài viết
  createPost(data){
    return this.http_get({
      route: 'teachers/create-post',
      param: {
        bv_tieude: data.title,
        bv_noidung: data.content,
        bv_user_gui: localStorage.id_user,
        bv_user_nhan: JSON.stringify(data.bv_user_nhan),
        id_lop: JSON.stringify(data.id_lop)
      }
    })
  }

  // danh sách bài viết trong hộp thư của phụ huynh
  listPosts(){
    return this.http_get({
      route: 'post/list-posts',
      param: {
        bv_user_nhan: localStorage.id_user
      }
    })
  }
  // danh sách bài viết trong hộp thư của giáo viên
  listPostsBySender(){
    return this.http_get({
      route: 'list-posts-sender',
      param: {
        bv_user_gui: localStorage.id_user
      }
    })
  }

  detailPost(){
    return this.http_get({
      route: 'post/detail-post',
      param: {
        bv_id: localStorage.id_bv,
        cmt_userid: localStorage.id_user,
        cmt_userid_nhan: localStorage.id_user
      }
    })
  }

  detailPostAdmin(cmt_user_nhan){
    return this.http_get({
      route: 'post/detail-post-admin',
      param: {
        bv_id: localStorage.id_bv,
        cmt_userid: localStorage.id_user,
        cmt_user_nhan: cmt_user_nhan
      }
    })
  }
  doComment(data:any){
    return this.http_get({
      route: 'post/comment',
      param:{
        cmt_userid: localStorage.id_user,
        cmt_noidung: data.cmt_noidung,
        cmt_id_baiviet: data.cmt_id_baiviet,
        cmt_userid_nhan: data.cmt_userid_nhan
      }
    })
  }
  // login
  doLogin(user){
    return this.http_get({
      route: 'login-app',
      param: {
        email: user.email,
        password: user.password
      }
    })
  }

  // bảng điểm
  loadBangDiem(id_student){
    return this.http_get({
      route: 'table/score-table',
      param: {
        hocsinh_id: id_student
      }
    })
  }

  loadLichThi(id_student){
    return this.http_get({
      route: 'table/test-schedule',
      param: {
        id_hocsinh: id_student
      }
    })
  }

  // đổi mật khẩu
  changePassword(user){
    return this.http_get({
      route: 'change-password',
      param: {
        email:  localStorage.email,
        password: user.password,
        passwordNew: user.passwordNew
      }
    })
  }

  // check email
  checkEmail(email){
    return this.http_get({
      route: 'recover-password/check-email',
      param: {
        email: email
      }
    })
  }

  // send email
  sendEmail(email){
    return this.http_get({
      route: 'recover-password/send-email',
      param: {
        email: email
      }
    })
  }

  // check code
  checkCode(code){
    return this.http_get({
      route: 'recover-password/check-code',
      param: {
        email: localStorage.email,
        code: code
      }
    })
  }

  //đổi mật khẩu khi quên
  changePasswordRecover(password){
    return this.http_get({
      route: 'recover-password/change-password-recover',
      param: {
        email: localStorage.email,
        password: password
      }
    })
  }

  // thời khóa biểu
  schedule(lop){
    return this.http_get({
      route: 'schedule',
      param: {
        lop: lop
      }
    })
  }

  lichDay(id){
    return this.http_get({
      route: 'lich-day',
      param: {
        id_giaovien: id
      }
    })
  }
  //tìm giáo viên
  searchTeacher(name){
    return this.http_get({
      route: 'teachers/search-teacher',
      param:{
        tencanbo: name
      }
    })
  }

  listStudents(){
    return this.http_get({
      route: 'list-students',
      param:{
        id_canbo: localStorage.idTeacher
      }
    })
  }

  // danh sách học sinh phụ huynh trong bài viết
  listStudentsInPost(id){
    return this.http_get({
      route: 'list-students-in-post',
      param: {
        id_baiviet: id
      }
    })
  }
  /* ##################################################### */
  http_post(api) {
    api.param.device_token = localStorage.device_token;
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + api.route, api.param).subscribe((data: any) => {
        if (data.status) {
          this.hideLoading();
          resolve(data);
        } else {
          this.fail(data.message);
        }
      }, (err) => {
        this.error();
      });
    });
  }

  http_get(api) {
    api.param.device_token = localStorage.device_token;
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + api.route, { params: api.param }).subscribe((data: any) => {
        if (data.status) {
          this.hideLoading();
          resolve(data);
        } else {
          this.fail(data.message);
        }
      }, (err) => {
        this.error();
      });
    });
  }

  dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++)
    {
    ia[i] = byteString.charCodeAt(i);
    }
    var bb = new Blob([ab], { "type": mimeString });
    return bb;
  }

  http_post_form(route, form) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + route, form).subscribe((data: any) => {
        if (data.status) {
          this.hideLoading();
          resolve(data);
        } else {
          this.fail(data.message);
        }
      }, (err) => {
        this.error();
      });
    });
  }

  loadinginfo: any;
  statusLoading = false;
  loading() {
    this.loadinginfo = this.loadingCtrl.create({
      content: "Đang xử lý...",
    });
    this.statusLoading = true;
    this.loadinginfo.present();
  }

  hideLoading() {
    if (this.statusLoading) {
      this.statusLoading = false;
      this.loadinginfo.dismiss();
    }
  }

  fail(message) {
    this.hideLoading();
    this.showAlert("Thông báo", message.join('<br/>'));
  }

  error() {
    this.hideLoading();
    this.showAlert("Thông báo", "Lỗi kết nối đến server");
  }

  showAlert(title: string, content: any) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: content,
      buttons: ['OK']
    });
    alert.present();
  }

  showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  auth() {
    localStorage.clear();
    this.showAlert("Phiên đăng nhập hết hạn", "Vui lòng đăng nhập lại");
  }
}
