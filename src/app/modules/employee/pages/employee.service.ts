import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from 'src/app/model/employee.model';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer eed34583-d66e-4ab0-b933-b38dfd49da3d`
  })
};
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  readonly GET_GENDER = 'http://13.233.174.131:9000/gender';
  readonly GET_EMPLOYEE = 'http://13.233.174.131:9000/employees';
  readonly GET_EMPLOYEEBYID = (id: number) => `http://13.233.174.131:9000/employee/${id}`;

  constructor(private http: HttpClient) { }
  getGender(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.GET_GENDER, httpOptions).pipe(catchError(this.errorHandling));
  }
  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.GET_EMPLOYEE, httpOptions).pipe(catchError(this.errorHandling));
  }
  getEmployeeById(id: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.GET_EMPLOYEEBYID(id), httpOptions).pipe(catchError(this.errorHandling));
  }
  errorHandling(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'server error');
  }

}
