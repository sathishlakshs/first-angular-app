import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Iproject } from './dashboard';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';


@Injectable()
export class DashboardService {
    private _URL: string = 'http://13.233.174.131:900/projects';
    constructor(private http: HttpClient) {

    }

    getProjects(): Observable<Iproject[ ]> {
        return this.http.get<Iproject[ ]>(this._URL);
    }

    errorHandler(error: HttpErrorResponse) {
        return Observable.throw(error.message ||  'serverError');
    }

}
