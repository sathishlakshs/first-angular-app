import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/reducers';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
public title: string = 'customer';
public customers: Observable<Customer>;

constructor(private store: Store<AppState>) {
  this.customers = store.select('customerState');
  this.customers.subscribe(state => console.log(state));
}

  ngOnInit() {

  }
}
