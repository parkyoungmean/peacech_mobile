import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ConstantProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ConstantProvider {

  constructor(public http: Http) {
    console.log('Hello ConstantProvider Provider');
  }

}

export const SITE_URL:string = "http://peacech.net/wp-json/";
export const GOOGLE_ANALYTICS_ID:string = "TRACKING_ID";
export const GCM_SENDER_ID:string = "508555736847"