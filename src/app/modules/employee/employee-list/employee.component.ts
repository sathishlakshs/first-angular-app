import { Component, OnInit } from '@angular/core';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/reducers';
import { EmployeeService } from '../pages/employee.service';
import _ from 'lodash';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  openForm = false;
  public employeeList: any[] = [];
  constructor(private store: Store<AppState>, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployee().subscribe(data => {
      let returnObject = {};
      this.employeeList = _.map(data, item => {
        // tslint:disable-next-line:no-string-literal
        returnObject = _.pick(item, ['profilePic', 'firstName', 'email', 'phoneNo', 'isActive']);
        // tslint:disable-next-line:no-string-literal
        if (returnObject['profilePic']) {
          // tslint:disable-next-line:no-string-literal
          returnObject['profilePic'] = '<img src=' + returnObject['profilePic'] + ' class="pic">';
          // tslint:disable-next-line:no-string-literal
        } else {
          // tslint:disable-next-line:no-string-literal
          returnObject['profilePic'] = '<span>' + item.firstName[0] + item.lastName[0] + '</span>';
        }
        return returnObject;
      });
    });
  }
  add() {
    this.openForm = !this.openForm;
  }

}

export const temp = [EmployeeFormComponent];
