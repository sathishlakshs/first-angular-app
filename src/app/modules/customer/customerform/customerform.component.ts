import { Component, OnInit } from '@angular/core';
import fieldBehavior from './fieldBehavior.json';

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
  public contactPersonsName: any;
  public contactPersonsEmailId: any;
  public contactPersonsPhoneNumber: any;
  public contactPersonsCommunicationId: any;
  public contactPersonsCommunicationTypeId: any;
  public contactPersonsIsSPOC: any;
  public customerSOWsowNumber: any;
  public customerSOWsowTitle: any;
  public customerSOWsowFile: any;
  public customerSOWerrorMsg: any;

  constructor() { }

  ngOnInit() {
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
    this.contactPersonsName = fieldBehavior.contactPersonsName;
    this.contactPersonsEmailId = fieldBehavior.contactPersonsEmailId;
    this.contactPersonsPhoneNumber = fieldBehavior.contactPersonsPhoneNumber;
    this.contactPersonsCommunicationId = fieldBehavior.contactPersonsCommunicationId;
    this.contactPersonsCommunicationTypeId = fieldBehavior.contactPersonsCommunicationTypeId;
    this.contactPersonsIsSPOC = fieldBehavior.contactPersonsIsSPOC;
    this.customerSOWsowNumber = fieldBehavior.customerSOWsowNumber;
    this.customerSOWsowTitle = fieldBehavior.customerSOWsowTitle;
    this.customerSOWsowFile = fieldBehavior.customerSOWsowFile;
    this.customerSOWerrorMsg = fieldBehavior.customerSOWerrorMsg;
  }

}
