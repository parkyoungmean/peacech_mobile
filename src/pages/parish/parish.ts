import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.peace_parish.push({
      name: '1교구',
      heading:"1교구 소개입니다",
      code:'',
      image:'assets/1p.png',
      color:'#F3404B'
    },{
      name: '2교구',
      heading:"2교구 소개입니다",
      code:'',
      image:'assets/2p.png',
      color:'#08B6B6'
    },{
      name: '3교구',
      heading:"3교구 소개입니다",
      code:'',
      image:'assets/3p.png',
      color:'#148CF0'
    },{
      name: '4교구',
      heading:"4교구 소개입니다",
      code:'',
      image:'assets/4p.png',
      color:'#F40CA7'
    },{
      name: '5교구',
      heading:"5교구 소개입니다",
      code:'',
      image:'assets/5p.png',
      color:'#F3404B'
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParishPage');
  }

}
