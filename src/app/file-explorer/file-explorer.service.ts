import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FileExplorerService {
  private _getDirUrl = 'http://localhost:8080/filesvc/getDirStructure?dir=';

  constructor(private _http: Http) { }

  getProductsObservable(dirPath: string): Observable<any> {
    return this._http.get(this._getDirUrl + dirPath)
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
