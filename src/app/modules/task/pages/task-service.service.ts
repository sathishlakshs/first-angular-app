import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Task } from '../../../model/task.model';
import { AppSerivceService } from 'src/app/app-serivce.service';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer eed34583-d66e-4ab0-b933-b38dfd49da3d`
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  readonly GET_PROJECTBYID = 'http://13.233.174.131:9000/project/';
  constructor(private appService: AppSerivceService, private httpService: HttpClient) { }
  getProjectById(id: number): Observable<any[]> {
    return this.httpService.get<any[]>(this.GET_PROJECTBYID + id, httpOptions).pipe(catchError(this.errorHandling));
  }
  errorHandling(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'server error');
  }

}

