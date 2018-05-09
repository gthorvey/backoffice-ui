import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';
import { IBmaParameters } from '../main-content/dmaparameters';

@Injectable()
export class BmaDataService {

  private restFileUrl = 'http://localhost:8080/filesvc/getFileContent?fileName=';

  constructor(private _http: Http) { }

  getData(fileLoc = 'C:/data/Door_v6/frame.json'): Observable<IBmaParameters[]> {
    const parameters: IBmaParameters[] = [];
    // alert('check');
    return this._http.get(this.restFileUrl + fileLoc)
      .map((response: Response) => {
        const jsonContent = <any>response.json();
        for (const param of jsonContent.parameters) {
          const bmaParam = <IBmaParameters>{
            name: param.name,
            type: param.type,
            value: param.value
          };
          try {
            parameters.push(bmaParam);
          } catch (e) {
            console.log('Inside Error ' + e.name + '-' + e.message);
          }
        }
        return parameters;
      })
      .catch(this.handleError);
  }


  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}


