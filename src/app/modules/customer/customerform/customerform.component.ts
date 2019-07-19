import { Component, OnInit, Input } from '@angular/core';
import fieldBehavior from './fieldBehavior.json';
import { Store } from '@ngrx/store';
import * as CustomerActions from '../../../../store/actions/customer.action';
import { AppState } from '../../../../store/reducers';
import { Customer } from 'src/app/model/customer.model.js';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.scss']
})
export class CustomerformComponent implements OnInit {
  public form = {
    currencyType: {},
    name: {},
    typeOfCompany: {},
    countryId: {},
    emailId: {},
    address: {},
    website: {},
    GST: {},
    pan: {},
    NDA: {},
    MSA: {},
    contactPersons: [{
      name: {},
      emailId: {},
      phoneNumber: {},
      communicationId: {},
      communicationTypeId: {}
    }],
    customerSOWsowNumber: {},
    customerSOWsowTitle: {},
    customerSOWsowFile: {},
    customerSOWerrorMsg: {},
  };
  public objectKeys = Object.keys;
  @Input()
  public customer: Customer;

  constructor(private store: Store<AppState>) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges() {
    if (this.customer.id) {
      this.form.contactPersons = [];
      this.customer.contactPersons.forEach(element => {
        this.form.contactPersons.push({
          name: {},
          emailId: {},
          phoneNumber: {},
          communicationId: {},
          communicationTypeId: {}
        });
      });
      this.fieldAttributesAssign();
     this.assignValues();
      }
    }

  ngOnInit() {
    this.fieldAttributesAssign();
  }

  fieldAttributesAssign = () => {
    for (const key of this.objectKeys(fieldBehavior)) {
      fieldBehavior[key].onChange = this.handleChange;
    }
    for (const key of this.objectKeys(this.form)) {
      if ( key === 'contactPersons' ) {
        for (const [i] of this.form.contactPersons.entries()) {
          this.form[key][i].name = fieldBehavior.contactPersonsName;
          this.form[key][i].emailId = fieldBehavior.contactPersonsEmailId;
          this.form[key][i].phoneNumber = fieldBehavior.contactPersonsPhoneNumber;
          this.form[key][i].communicationId = fieldBehavior.contactPersonsCommunicationId;
          this.form[key][i].communicationTypeId = fieldBehavior.contactPersonsCommunicationTypeId;
        }
      } else {
      this.form[key] = fieldBehavior[key];
      }
      fieldBehavior[key].onChange = this.handleChange;
    }
  }

  assignValues = () => {
    console.log(this.customer);
    console.log(this.form);
    for (const key of this.objectKeys(this.form)) {
     if ( key === 'contactPersons' ) {
        console.log(this.customer[key][0].name);
        for (const [i] of this.form.contactPersons.entries()) {
          this.form[key][i].name['val'] = this.customer[key][i].name;
          this.form[key][i].emailId['val'] = this.customer[key][i].emailId;
          this.form[key][i].phoneNumber['val'] = this.customer[key][i].phoneNumber;
          this.form[key][i].communicationId['val'] = this.customer[key][i].communicationId;
          this.form[key][i].communicationTypeId['val'] = this.customer[key][i].communicationTypeId;
        }
      } else {
      this.form[key].value = this.customer[key];
      }
    }
  }

  handleChange = (name: string, value: any) => {
    this.store.dispatch(new CustomerActions.HandleChange({ name, value }));
  }

  addContactPerson = () => {
    this.form.contactPersons.push({
      name: fieldBehavior.contactPersonsName,
      emailId: fieldBehavior.contactPersonsEmailId,
      phoneNumber: fieldBehavior.contactPersonsPhoneNumber,
      communicationId: fieldBehavior.contactPersonsCommunicationId,
      communicationTypeId: fieldBehavior.contactPersonsCommunicationTypeId
    });
  }
  removeContactPerson = (index: number) => {
    const cp = this.form.contactPersons[index];
    let isDataFill = false;
    for (const key of this.objectKeys(cp)) {
      if (!cp[key]) {
        isDataFill = true;
      }
    }
    if (!isDataFill) {
      this.form.contactPersons.splice(index, 1);
    }
  }
  trial = () => {
    console.log(this.customer);
  }
}
