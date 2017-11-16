import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post } from '../../providers/wp/wp';
/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  post: Post;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams.get('post');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
