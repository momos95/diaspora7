import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JusticePage } from './justice';

@NgModule({
  declarations: [
    JusticePage,
  ],
  imports: [
    IonicPageModule.forChild(JusticePage),
  ],
})
export class JusticePageModule {}
