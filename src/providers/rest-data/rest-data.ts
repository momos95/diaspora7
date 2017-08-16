import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
 Generated class for the RestDataProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class RestDataProvider {

  private apiUrl = 'http://technokocc.fr/gawlomob/application/ionicArticles';

  constructor(public http: Http) {
    console.log('Hello RestDataProvider Provider');
  }

  getArticles(): Observable<string[]> {
    let headers = new Headers() ;
    headers.append('Content-Type', 'application/json');
    headers.append('Charset', 'UTF-8');
    return this.http.get(this.apiUrl,headers)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getData(){

    return new Promise((resolve, reject) =>{
      this.http.get(this.apiUrl).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        reject(err);
      });

    });

  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body) ;
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }



}
