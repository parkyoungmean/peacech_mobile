import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
/**
 * Generated class for the ParishPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parish',
  templateUrl: 'parish.html',
})
export class ParishPage {
  public peace_parish:Array<any>=[];
  parish:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.loadJSON();
    /*
    this.peace_parish.push({
      name: '1교구',
      paster: '조이삭',
      Assistant_Pastor: '아무개',
      Deacon: '아무개',
      heading:"1교구 소개입니다",
      vision:'110개셀, 564명으로!!!',
      image:'assets/1p.png',
      color:'#F3404B'
    },{
      name: '2교구',
      paster: '신민호',
      Assistant_Pastor: '아무개',
      Deacon: '아무개',
      heading:"2교구 소개입니다",
      vision:'',
      image:'assets/2p.png',
      color:'#08B6B6'
    },{
      name: '3교구',
      paster: '황삼준',
      Assistant_Pastor: '아무개',
      Deacon: '아무개',
      heading:"3교구 소개입니다",
      vision:'',
      image:'assets/3p.png',
      color:'#148CF0'
    },{
      name: '4교구',
      paster: '아무개',
      Assistant_Pastor: '아무개',
      Deacon: '아무개',
      heading:"4교구 소개입니다",
      vision:'',
      image:'assets/4p.png',
      color:'#F40CA7'
    },{
      name: '5교구',
      paster: '아무개',
      Assistant_Pastor: '아무개',
      Deacon: '아무개',
      heading:"5교구 소개입니다",
      vision:'',
      image:'assets/5p.png',
      color:'#F3404B'
    },{
      name: '6교구',
      paster: '고창곤',
      Assistant_Pastor: '김미진 전도사',
      Deacon: '아무개',
      heading:"6교구 소개입니다",
      vision:'',
      image:'assets/5p.png',
      color:'#F3404B'
    },{
      name: '7교구',
      paster: '박신형',
      Assistant_Pastor: '아무개',
      Deacon: '아무개',
      heading:"7교구 소개입니다",
      vision:'',
      image:'assets/5p.png',
      color:'#F3404B'
    },{
      name: '8교구',
      paster: '아무개',
      Assistant_Pastor: '아무개',
      Deacon: '아무개',
      heading:"8교구 소개입니다",
      vision:'',
      image:'assets/5p.png',
      color:'#F3404B'
    })
    */
  }

  openDetail(parish) {
    this.navCtrl.push('ParishDetailPage', parish);
  }
  
  ionViewDidLoad() {
    //console.log(this.peace_parish);
  }

  loadJSON() {
    this.http.get('../assets/parish.json')
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
      this.peace_parish = data;
    }, (err) => {
      alert('failed loading JSON data')
    })
  }

}
