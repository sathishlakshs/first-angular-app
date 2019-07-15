import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public props = {
    name: 'name',
    type: 'text',
    placeholder: 'enter a name',
    value: '',
    errorMsg: 'error',
    isMandatory: true,
    isDisabled: false,
    label: 'name'
  };
  constructor() { }


  ngOnInit() {
  }

}
