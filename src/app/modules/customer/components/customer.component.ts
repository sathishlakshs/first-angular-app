import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/reducers';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService } from '../pages/customer.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
public title: string = 'customer';
public customers: Observable<Customer[]>;
public custs: any[] = [];

constructor(private store: Store<AppState>, private customerService: CustomerService) {
  // this.customers = store.select('customerState');
  // this.customers.subscribe(state => console.log(state));
}

  ngOnInit() {
  this.customerService.getCustomers().subscribe(data => {
    this.custs = _.map(data, item => {
      let returnObject = {};
      // tslint:disable-next-line:no-string-literal
       returnObject['companyName'] = _.pick(item, ['name']).name;
       returnObject = {...returnObject, ... _.pick(_.find(item.contactPersons, {isSPOC: true}), ['name', 'emailId', 'phoneNumber'])};
       return returnObject;
 });
  });
  }
}


 // this.getCustomers().then(val => {
    //   this.custs = val[0];
    //   console.log(val[0]);
    // });
    // this.customers = this.customerService.getCustomers();
    // await this.getCustomers().then(res => this.custs = res[0]);

// getCustomers = () => {
  //   return Promise.all([this.customerService.getCustomers().toPromise()]);
  // }
