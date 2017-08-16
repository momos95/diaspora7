import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FemmePage } from './femme';

@NgModule({
  declarations: [
    FemmePage,
  ],
  imports: [
    IonicPageModule.forChild(FemmePage),
  ],
})
export class FemmePageModule {}
