import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { User }   from "../../models/user";
import { AuthProvider } from "../../providers/auth/auth";
//import { AngularFireAuth } from "angularfire2/auth";
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  constructor(public toastCtrl:ToastController, public loadingCtrl:LoadingController, private auth:AuthProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  doLogin(user: User) {
    var loader = this.loadingCtrl.create({
      content: "로딩 중입니다..."
    });
    loader.present();


    this.auth.loginUser(user.email, user.password).then(authData => {
      //successful
      console.log(authData.uid);
      console.log(authData);
      loader.dismiss();
      //console.log(result);
      this.navCtrl.setRoot('MenuPage');

    }, error => {
      loader.dismiss();
     // Unable to log in
      let toast = this.toastCtrl.create({
        message: error,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
  

  forgotPassword(){

  }

  register(){
    this.navCtrl.push('RegisterPage');

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
