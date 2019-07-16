import { Component, OnInit } from '@angular/core';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  openForm = false;
  constructor() { }

  ngOnInit() {
  }
  add() {
    this.openForm = !this.openForm;
  }

}

export const temp = [EmployeeFormComponent];
