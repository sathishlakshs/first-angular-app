import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Customer } from 'src/app/model/customer.model';
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
export class CustomerService {
  readonly GET_CUSTOMERS_URL = 'http://13.233.174.131:9000/customers';
  readonly GET_CUSTOMER_BY_ID_URL = 'http://13.233.174.131:9000/customer/';
  gets: any;

  constructor(private http: HttpClient) { }
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.GET_CUSTOMERS_URL, httpOptions).pipe(catchError(this.errorHandling));
  }
  getCustomer(id): Observable<Customer> {
    return this.http.get<Customer>(this.GET_CUSTOMER_BY_ID_URL + id, httpOptions).pipe(catchError(this.errorHandling));
  }
  errorHandling(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'server error');
  }
}
