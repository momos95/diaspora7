import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {Article} from "../classes/article";
import {RestDataProvider} from "../../providers/rest-data/rest-data";

/**
 * Generated class for the AfriquePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-afrique',
  templateUrl: 'afrique.html',
})
export class AfriquePage extends Article{

  categories = ['6115','7353'];

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest : RestDataProvider, public loadingController: LoadingController) {
    super(navCtrl,rest,loadingController) ;
    this.getFirstArticles(this.categories) ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AfriquePage');
  }

}
