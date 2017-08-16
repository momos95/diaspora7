import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {RestDataProvider} from "../../providers/rest-data/rest-data";
import {Article} from "../classes/article";

/**
 * Generated class for the LifestylePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lifestyle',
  templateUrl: 'lifestyle.html',
})
export class LifestylePage extends Article {

  categories =['6360','7516','9','7471','480'];

  constructor(public navCtrl: NavController, public navParams: NavParams , public rest: RestDataProvider, public loadingController: LoadingController) {
    super(navCtrl,rest,loadingController) ;
    this.getFirstArticles(this.categories) ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LifestylePage');
  }

}
