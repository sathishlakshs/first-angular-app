import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer eed34583-d66e-4ab0-b933-b38dfd49da3d`
  })
};

@Injectable({
  providedIn: 'root'
})
export class AppSerivceService {
  readonly GET_PROJECT = 'http://13.233.174.131:9000/projects';
  constructor(private http: HttpClient) { }
  getAllProject(): Observable<any> {
    return this.http.get<any>(this.GET_PROJECT, httpOptions).pipe(catchError(this.errorHandling));
  }

  errorHandling(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'server error');
  }

}
