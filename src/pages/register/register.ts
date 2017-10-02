import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";

/**
 * import AngularFireAuth Module
 */
import { AngularFireAuth } from "angularfire2/auth";

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
  
  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  register(user: User){
      const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);

    if(result){
      console.log(result);
    }
    else if (Error) {
      console.error(Error);
    }
  }
}
