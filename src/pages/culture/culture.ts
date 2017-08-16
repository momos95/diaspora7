import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Article} from "../classes/article";
import {RestDataProvider} from "../../providers/rest-data/rest-data";

/**
 * Generated class for the CulturePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-culture',
  templateUrl: 'culture.html',
})
export class CulturePage extends  Article{

  categories = ['2779','7316','7465','7520','7463','7552'];

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestDataProvider, public loadingController: LoadingController) {
    super(navCtrl,rest,loadingController) ;
    this.getFirstArticles(this.categories) ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CulturePage');
  }

}
