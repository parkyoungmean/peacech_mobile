import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";

import { AuthProvider } from "../../providers/auth/auth";

/**
 * import AngularFireAuth Module
 */
//import { AngularFireAuth } from "angularfire2/auth";

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;
  
  constructor(private auth:AuthProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  register(user: User){
    
    const result = this.auth.signUp(user.email, user.password);

    if(result){
      console.log(result);
    }
    else if (Error) {
      console.error(Error);
      alert("작성하신 양식이 정확한지 다시 확인해주세요")
    }
  }
}
