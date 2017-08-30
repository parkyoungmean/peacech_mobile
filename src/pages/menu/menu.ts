import { PageInterface } from './menu';
import { TabsPage } from './../tabs/tabs';
import { Tab1Page } from './../tab1/tab1';
import { Tab2Page } from './../tab2/tab2';

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // content view를 위한 기본 root
  rootPage = 'TabsPage';

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Tab 1', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'home' },
    { title: 'Tab 2', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'contacts' },
    { title: 'Special', pageName: 'SpecialPage', icon: 'shuffle'},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface){
    let params = {};

    
    // the index is equal to the order of our tabs inside tabs.ts
    // index는 tabs.ts안에 있는 tab들의 순서와 같습니다
    if(page.index) {
      params = { tabIndex: page.index };
    }

    // The active child nav is our Tabs Navigation
    // 활성 하위 탐색은 탭 내비게이션입니다.
    if(this.nav.getActiveChildNav() && page.index != undefined){
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page
      // in this case: moving to or from specialPage
      // 탭이 활성화되어 있지 않으므로 루트 페이지를 재설정하십시오.
      // 이 경우 : specialPage에서 또는 이동
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface){
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if(childNav.getSelected() && childNav.getSelected().root === page.tabComponent){
        return 'primary';
      }
      return;
    }

    // Fallback needed when there is no active childnav(tabs not active)
    // 활성 childnav가 없는 경우 폴백 필요 (탭이 활성화되지 않음)
    if(this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
