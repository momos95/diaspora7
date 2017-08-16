import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Article} from "../classes/article";
import {RestDataProvider} from "../../providers/rest-data/rest-data";

/**
 * Generated class for the FemmePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-femme',
  templateUrl: 'femme.html',
})
export class FemmePage extends Article{

  categories = ['7540','7546','7541','7557'] ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestDataProvider, public loadingController: LoadingController) {
    super(navCtrl,rest,loadingController) ;
    this.getFirstArticles(this.categories) ;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FemmePage');
  }

}
