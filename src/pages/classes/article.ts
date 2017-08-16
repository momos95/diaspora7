import {NavController, LoadingController} from 'ionic-angular';
import {RestDataProvider} from "../../providers/rest-data/rest-data";
import {DetailArticlePage} from "../detail-article/detail-article";

export class Article  {

  articles: string[];
  errorMessage: string;
  resp : any ;


  constructor(public navCtrl: NavController, public rest: RestDataProvider, public loadingController: LoadingController) {
  }

  getArticles() {
    this.rest.getArticles()
      .subscribe(
        articles => this.articles = articles,
        error =>  this.errorMessage = <any>error
      );
  }


  getFirstArticles(category?: any[]){

    let loader = this.loadingController.create({
      content: "Chargement des articles"
    });
    loader.present();
    this.rest.getArticles().subscribe((data) => {
      this.resp = data ;
      this.articles = this.resp.articles ;
      this.articles = this.resp.articles.filter((item)=>{
        return (category.indexOf(item.categorya) > -1) || (category.indexOf(item.categoryb) > -1) ;
      }) ;
      loader.dismiss() ;
    });

  }

  detailArticle(article){
    this.navCtrl.push(DetailArticlePage,{main:article}) ;
  }

}
