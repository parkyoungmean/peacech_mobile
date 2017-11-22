import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ParishDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parish-detail',
  templateUrl: 'parish-detail.html',
})
export class ParishDetailPage {
  title:string = this.navParams.data.name;
  vision:string = this.navParams.data.vision;
  paster:string = this.navParams.data.paster;
  Assistant_Pastor:string = this.navParams.data.Assistant_Pastor;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.data.paster);
  }

}
