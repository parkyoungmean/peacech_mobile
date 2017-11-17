import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParishPage } from './parish';

@NgModule({
  declarations: [
    ParishPage,
  ],
  imports: [
    IonicPageModule.forChild(ParishPage),
  ],
})
export class ParishPageModule {}
