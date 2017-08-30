import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: any = 'Tab1Page';
  tab2Root: any = 'Tab2Page';
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    // menu.ts에서 전달 된 인덱스를 기반으로 활성 탭을 설정합니다.

    this.myIndex = navParams.data.tabIndex || 0;
  }

}
