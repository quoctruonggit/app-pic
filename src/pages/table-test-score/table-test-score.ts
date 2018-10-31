import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the TableTestScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-table-test-score',
  templateUrl: 'table-test-score.html',
})
export class TableTestScorePage {
  scoreTables = "i";
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
    this.loadTableScore(navParams.data)
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad TableTestScorePage');
  }

  tableScore = []
  tableScore1:any;
  tableScore2:any;
  tableScoreYear:any;
  avg1:any;
  avg2:any;
  avgYear:any;
  loadTableScore(id){
    this.service.loading();
    this.service.loadBangDiem(id).then((res:any)=>{
      console.log(res.data);
      this.tableScore = res.data.namhoc;
      if(this.tableScore != null){

        if(res.data.namhoc.bangdiemhaihocky[0].bangdiemchitiet != null){
          this.tableScore1 = res.data.namhoc.bangdiemhaihocky[0].bangdiemchitiet;
          this.avg1 = res.data.namhoc.bangdiemhaihocky[0].diemtrungbinhcong;
          console.log(this.tableScore1);
        }
        if(res.data.namhoc.bangdiemhaihocky.length == 2){
          if(res.data.namhoc.bangdiemhaihocky[1].bangdiemchitiet != null){
            this.tableScore2 = res.data.namhoc.bangdiemhaihocky[1].bangdiemchitiet;
            this.avg2 = res.data.namhoc.bangdiemhaihocky[1].diemtrungbinhcong;
          }
          //this.tableScore2 = "2";
        }
        else{
          this.tableScore2 = null;
          this.avg2 = null;
        }
        
        if(res.data.namhoc.bangdiemcanam != null){
          this.tableScoreYear = res.data.namhoc.bangdiemcanam;
          this.avgYear = res.data.namhoc.diemtrinhbinhcongcanam;
        }
        console.log(this.tableScore);
        console.log(this.tableScore1);
        console.log(this.tableScore2);
        console.log(this.tableScoreYear);
      }
      else{
        this.tableScore1 = null;
        this.tableScore2 = null;
        this.tableScoreYear = null;
        this.avgYear = null;
        this.avg1 = null;
        this.avg2 = null;
        console.log(this.tableScore);
        console.log(this.tableScore1);
        console.log(this.tableScore2);
        console.log(this.tableScoreYear);
      }
      
    })
  }
}
