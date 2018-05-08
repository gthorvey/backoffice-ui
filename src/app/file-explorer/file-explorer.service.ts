import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class Service {

  private _getDirUrl = 'http://localhost:8080/filesvc/getDirStructure?dir=C:/data/Door_v6/';

  constructor(private _http: Http) { }

  getProductsObservable(): Observable<any> {
    return this._http.get(this._getDirUrl)
      .map((response: Response) => response.json())
      .catch(this._serverError);
  }

  private _serverError(err: any) {
    console.log('Sever error:', err);
    if (err instanceof Response) {
      return Observable.throw(err.json().error || 'backend server error');
    }
    return Observable.throw(err || 'backend server error');
  }
}
