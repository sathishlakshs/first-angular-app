import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/reducers';
import { of } from 'rxjs';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService } from '../pages/customer.service';
import * as CustomerActions from '../../../../store/actions/customer.action';
import * as _ from 'lodash';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
public title: string = 'customer';
public customers: any[] = [];
public customer: Customer;

constructor(private store: Store<AppState>, private customerService: CustomerService) {
  store.select('customerState').subscribe(state => {
    this.customer = state.form;
   });
}

  ngOnInit() {
    const nums = of(1, 2, 3);
    nums.subscribe(item => console.log(item));
  this.customerService.getCustomers().subscribe(data => {
    this.customers = _.map(data, item => {
      let returnObject = {};
       returnObject['companyName'] = _.pick(item, ['name']).name;
       returnObject = {...returnObject, ... _.pick(item, ['id'])};
       returnObject = {...returnObject, ... _.pick(_.find(item.contactPersons, {isSPOC: true}), ['name', 'emailId', 'phoneNumber'])};
       return returnObject;
 });
  });
  }

  getDeleteId(id: number) {
    console.log(id);
  }

  getEditableId = (id: number) => {
    this.customerService.getCustomer(id).subscribe(data => {
      this.store.dispatch(new CustomerActions.FormChange(data));
      this.store.dispatch(new CustomerActions.HandleChange({name: 'willModifyId', value: data.id}));
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
