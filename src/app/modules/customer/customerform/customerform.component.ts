import { Component, OnInit, Input } from '@angular/core';
import fieldBehavior from './fieldBehavior.json';
import { Store } from '@ngrx/store';
import * as CustomerActions from '../../../../store/actions/customer.action';
import { AppState } from '../../../../store/reducers';
import { Customer } from 'src/app/model/customer.model.js';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.scss']
})
export class CustomerformComponent implements OnInit {
  public currencyType: any;
  public name: any;
  public typeOfCompany: any;
  public countryId: any;
  public emailId: any;
  public address: any;
  public website: any;
  public GST: any;
  public pan: any;
  public NDA: any;
  public MSA: any;
  public contactPersons: {
    name: any,
    emailId: any,
    phoneNumber: any,
    communicationId: any,
    communicationTypeId: any
  }[] = [{ name: '', emailId: '', phoneNumber: '', communicationId: '', communicationTypeId: 0 }];
  public customerSOWsowNumber: any;
  public customerSOWsowTitle: any;
  public customerSOWsowFile: any;
  public customerSOWerrorMsg: any;
  public objectKeys = Object.keys;
  @Input()
  public customer: Customer;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    console.log(this.customer);
    for (const key of this.objectKeys(fieldBehavior)) {
<<<<<<< HEAD
      fieldBehavior[key].onChange = this.handleChange;
=======
        fieldBehavior[key].onChange = this.handleChange;
>>>>>>> bddf0c0fb294c2a5e40f0b1cfd18fc948b5849b2
    }
    this.name = fieldBehavior.name;
    this.currencyType = fieldBehavior.currencyType;
    this.typeOfCompany = fieldBehavior.typeOfCompany;
    this.countryId = fieldBehavior.countryId;
    this.emailId = fieldBehavior.emailId;
    this.address = fieldBehavior.address;
    this.website = fieldBehavior.website;
    this.GST = fieldBehavior.GST;
    this.pan = fieldBehavior.pan;
    this.NDA = fieldBehavior.NDA;
    this.MSA = fieldBehavior.MSA;
    for (const item of this.contactPersons) {
      item.name = fieldBehavior.contactPersonsName;
      item.emailId = fieldBehavior.contactPersonsEmailId;
      item.phoneNumber = fieldBehavior.contactPersonsPhoneNumber;
      item.communicationId = fieldBehavior.contactPersonsCommunicationId;
      item.communicationTypeId = fieldBehavior.contactPersonsCommunicationTypeId;
    }
    this.customerSOWsowNumber = fieldBehavior.customerSOWsowNumber;
    this.customerSOWsowTitle = fieldBehavior.customerSOWsowTitle;
    this.customerSOWsowFile = fieldBehavior.customerSOWsowFile;
    this.customerSOWerrorMsg = fieldBehavior.customerSOWerrorMsg;
  }

  handleChange = (name: string, value: any) => {
    this.store.dispatch(new CustomerActions.HandleChange({ name, value }));
  }

  addContactPerson = () => {
    this.contactPersons.push({
      name: fieldBehavior.contactPersonsName,
      emailId: fieldBehavior.contactPersonsEmailId,
      phoneNumber: fieldBehavior.contactPersonsPhoneNumber,
      communicationId: fieldBehavior.contactPersonsCommunicationId,
      communicationTypeId: fieldBehavior.contactPersonsCommunicationTypeId
    });
  }
  removeContactPerson = (index: number) => {
    const cp = this.contactPersons[index];
    let isDataFill = false;
    for (const key of this.objectKeys(cp)) {
      if (!cp[key]) {
        isDataFill = true;
      }
    }
    console.log(isDataFill);
    if (!isDataFill) {
      this.contactPersons.splice(index, 1);
    }
  }
}
