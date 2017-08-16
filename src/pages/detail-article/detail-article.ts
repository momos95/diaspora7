import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {DomSanitizer} from "@angular/platform-browser";

/**
 * Generated class for the DetailArticlePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-article',
  templateUrl: 'detail-article.html',
})
export class DetailArticlePage {

  article: any ;
  content: any ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer, public alertCtrl: AlertController) {
    this.article = this.navParams.get('main') ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailArticlePage');
  }

  aimer(art){

    let alert = this.alertCtrl.create({
      title: 'Aimer',
      subTitle: 'Cette fonctionnalité est en cours de conception.',
      buttons: ['OK']
    });
    alert.present();

  }

  publier(art){

    let alert = this.alertCtrl.create({
      title: 'Publier',
      subTitle: 'Cette fonctionnalité est en cours de conception.',
      buttons: ['OK']
    });
    alert.present();

  }

}
