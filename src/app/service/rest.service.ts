import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment';

const END_POINT = environment.apiUrl + '/api/v1';

@Injectable({
    providedIn: 'root'
})
export class RestService {
  private httpOptions = {
      headers: new HttpHeaders({
          'Content-type': 'application/json',
          'Accept': 'application/json;charset=UTF-8'
      })
  }

  constructor(private http: HttpClient) {
  }

  private responseData(res: Response) {
      let body: Response;
      body = res;
      return body || {};
  }

  private handleError(error: HttpErrorResponse) {
      console.log(error);
      if (error.error instanceof ErrorEvent) {
          alert('client-side Error\n' + error.message);
      } else {
          alert('backend Error\n' + error.message);
      }
      return throwError('Something bad happened; please try again later.')
  };

  get(path: string, params?: HttpParams | {
      [param: string]: string | string[];
  }) {
      this.httpOptions['params'] = params;
      console.log('>> get target url : ',  END_POINT + path);
      return this.http.get(END_POINT + path).pipe(
          map(this.responseData),
          catchError(this.handleError)
      );
  }

  post(path: string, body: any, params?: HttpParams | {
    [param: string]: string | string[];
  }) {
    this.httpOptions['params'] = params;
    console.log('>> post target url : ',  END_POINT + path);
    return this.http.post(END_POINT + path, body, this.httpOptions).pipe(
      map(this.responseData),
      catchError(this.handleError)
    );
  }

  put(path: string, body: any, params?: HttpParams | {
    [param: string]: string | string[];
  }) {
    this.httpOptions['params'] = params;
    console.log('>> put target url : ',  END_POINT + path);
    return this.http.put(END_POINT + path, body, this.httpOptions).pipe(
      map(this.responseData),
      catchError(this.handleError)
    );
  }

  delete(path: string, params?: HttpParams | {
    [param: string]: string | string[];
  }) {
    this.httpOptions['params'] = params;
    console.log('>> delete target url : ',  END_POINT + path);
    return this.http.delete(END_POINT + path).pipe(
      map(this.responseData),
      catchError(this.handleError)
    );
  }
}
