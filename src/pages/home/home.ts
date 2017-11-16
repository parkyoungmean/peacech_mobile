import { Component, ViewChild } from '@angular/core';
import { ToastController, ToastOptions, NavController, LoadingController, Loading, Slides } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

//나
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  
  menuType ='basic';
  loader: Loading;
  toastOptions: ToastOptions;
  message: string;

  constructor(private toast:ToastController, public http: Http, public navCtrl: NavController, public loadingCtrl: LoadingController) {
    this.presentLoading();
    
    this.toastOptions = {
      message: '평화교회에 오신 걸 환영합니다',
      duration: 5000,
      //position: "top"
    }
    this.loader.dismiss();
    
    this.showToast();
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.slides.slideTo(1, 1000) 
      this.slides.startAutoplay();
    }    
    , 1000);
    console.log('ionViewDidLoad HomePage');
  }

 
  openModal() {
    this.navCtrl.setRoot('MenuPage');
  }

  openPage(p) {
    this.navCtrl.push(p);
  }

  
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      //content: "Loading..."
      content: "로딩 중입니다..."
    });
    this.loader.present();
  }

  showToast(){
    const toast = this.toast.create(this.toastOptions);
    toast.present();
  }
}
