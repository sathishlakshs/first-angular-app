import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../pages/employee.service';
import { AppState } from 'src/store/reducers';
import { Store } from '@ngrx/store';
import fieldInput from './fieldInputs.json';
import { Employee } from 'src/app/model/employee.model';
import * as EmployeeAction from '../../../../store/actions/employee.action';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  @Input() empolyeePropsForm: any;
  @Input() getAllEmployee: any;
  public imagePath: any;
  imgURL: any = 'assets/svg/sample.jpg';
  public fileToUpload: File = null;
  public profilePic = 'assets/svg/sample.jpg';
  public searchProps = {
    name: 'name',
    placeholder: 'Search a value',
    value: '',
  };
  public id: any;
  public firstName: any;
  public lastName: any;
  public dob: any;
  public email: any;
  public phoneNo: any;
  public commAddress: any;
  public perAddress: any;
  public employeeForm: Employee = {
    companyId: 1,
    attandance_id: 0,
    gender: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    dob: '',
    comm_address: '',
    per_address: '',
    isActive: true,
    profilePic: ''
  };
  public gender: { id: number, name: string }[] = [];
  public genderId: number;
  public objectKeys = Object.keys;
  constructor(private store: Store<AppState>, private employeeService: EmployeeService) { }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges() {
    this.employeeForm = this.empolyeePropsForm;
    for (const key of this.objectKeys(fieldInput)) {
      fieldInput[key].value = this.employeeForm[key];
    }
    this.imgURL = this.empolyeePropsForm.profilePic;
    this.genderId = this.empolyeePropsForm.gender;
  }
  ngOnInit() {
    this.employeeService.getGender().subscribe((data: any[]) => {
      this.gender = data;
    });
    for (const key of this.objectKeys(fieldInput)) {
      fieldInput[key].onChange = this.handleChange;
    }

    this.id = fieldInput.attandance_id;
    this.firstName = fieldInput.firstName;
    this.lastName = fieldInput.lastName;
    this.dob = fieldInput.dob;
    this.email = fieldInput.email;
    this.phoneNo = fieldInput.phoneNo;
    this.commAddress = fieldInput.comm_address;
    this.perAddress = fieldInput.per_address;
  }
  handleChange = (name: any, value: any) => {
    if (name === 'attandance_id') {
      this.employeeForm[name] = parseInt(value, 10);
    } else {
      this.employeeForm[name] = value;
    }
    this.store.dispatch(new EmployeeAction.HandleChange({ name, value }));
  }
  handleGenders(id: number) {
    this.genderId = id;
    this.handleChange('gender', id);
  }
  handleAdd = async () => {
    const formData = new FormData();
    this.objectKeys(this.employeeForm).map((item, ) => {
      formData.append(item, this.employeeForm[item]);
    });
    if (this.employeeForm['id']) {
      this.employeeService.updateEmployee(this.employeeForm, this.employeeForm['id']).subscribe();
      this.getAllEmployee();
    } else {
      console.log('add');
    }
  }
  genderMatch(id: number) {
    if (id === this.genderId) {
      return {
        backgroundColor: 'rgb(110, 112, 112)',
        color: 'rgb(255, 255, 255)'
      };
    }
    return {};
  }

  handleFileInput = (files: any) => {
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.imgURL = reader.result;
    };
    this.handleChange('profilePic', files);
  }
}
