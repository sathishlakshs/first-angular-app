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
  public searchProps = {
    name: 'name',
    placeholder: 'Search a value',
    value: '',
  };
  public selectProps = {
    options: [{ id: 0, name: "sudarshan" }, { id: 1, name: "sathish" }, { id: 3, name: "sindhu" }],
    onChange: this.handleChange,
  }
  handleChange() {
    console.log("searched")
  };
  constructor() { }


  ngOnInit() {
  }

}
