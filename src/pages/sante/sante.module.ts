import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SantePage } from './sante';

@NgModule({
  declarations: [
    SantePage,
  ],
  imports: [
    IonicPageModule.forChild(SantePage),
  ],
})
export class SantePageModule {}
