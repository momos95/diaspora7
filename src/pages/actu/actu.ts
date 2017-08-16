import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Article} from "../classes/article";
import {RestDataProvider} from "../../providers/rest-data/rest-data";

/**
 * Generated class for the ActuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actu',
  templateUrl: 'actu.html',
})
export class ActuPage extends Article{

  categories = ['4','23','7682','16','2','7447'] ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestDataProvider, public loadingController: LoadingController) {
    super(navCtrl,rest,loadingController) ;
    this.getFirstArticles(this.categories) ;
  }

  ionViewDidLoad() {
    this.getFirstArticles(this.categories) ;
  }

}
