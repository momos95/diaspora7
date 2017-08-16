import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {RestDataProvider} from "../../providers/rest-data/rest-data";
import {Article} from "../classes/article";

/**
 * Generated class for the InternationnalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-internationnal',
  templateUrl: 'internationnal.html',
})
export class InternationnalPage extends Article{

  categories = ['25'];
  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestDataProvider, public loadingController: LoadingController) {
    super(navCtrl,rest,loadingController) ;
    this.getFirstArticles(this.categories) ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternationnalPage');
  }

}
