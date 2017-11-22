import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParishDetailPage } from './parish-detail';

@NgModule({
  declarations: [
    ParishDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ParishDetailPage),
  ],
})
export class ParishDetailPageModule {}
