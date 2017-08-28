import { Component } from '@angular/core';
import { ToastController, ToastOptions, NavController, LoadingController, Loading } from 'ionic-angular';
import { WpProvider, Post, OldPost } from '../../providers/wp/wp';
import { Observable } from 'rxjs/Observable';

//나
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loader: Loading;
  posts: Observable<Post[]>;
  oldPosts: Observable<OldPost[]>;  
  toastOptions: ToastOptions;
  message: string;

  constructor(private toast:ToastController, public http: Http, public navCtrl: NavController, public wpProvider: WpProvider, public loadingCtrl: LoadingController) {
    this.presentLoading();
    this.posts = this.wpProvider.getPosts();
    this.posts.subscribe(data => { 
        console.log('my data:', data);
        this.loader.dismiss();
    });
    
    this.oldPosts = this.wpProvider.getOldtPosts();
    this.oldPosts.subscribe(data => { 
      console.log('my data:', data);
      this.loader.dismiss();
  });
    

    



    this.toastOptions = {
      message: '평화교회에 오신 걸 환영합니다',
      duration: 5000,
      //position: "top"
    }
    this.showToast();
  }
 
  getUserImage(id: number) {
    return this.wpProvider.getUserImage(id);
  }
 
  getUserName(id: number) {
    return this.wpProvider.getUserName(id);
  }
 
  openPost(post: Post) {
    this.navCtrl.push('PostPage', {post: post});
  }
 
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    this.loader.present();
  }

  showToast(){
    const toast = this.toast.create(this.toastOptions);
    toast.present();
  }
}
