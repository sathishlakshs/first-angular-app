import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../pages/employee.service';
import { AppState } from 'src/store/reducers';
import { Store } from '@ngrx/store';
import fieldInput from './fieldInputs.json';
import { Employee } from 'src/app/model/employee.model';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public imagePath;
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
    companyId: 0,
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
  constructor(private store: Store<AppState>, private employeeService: EmployeeService) { }
  ngOnInit() {

    this.employeeService.getGender().subscribe((data: any[]) => {
      this.gender = data;
    });
    // tslint:disable-next-line:no-string-literal
    fieldInput.empId['onChange'] = this.handleChange;
    fieldInput.firstName['onChange'] = this.handleChange;
    fieldInput.lastName['onChange'] = this.handleChange;
    fieldInput.dob['onChange'] = this.handleChange;
    fieldInput.email['onChange'] = this.handleChange;
    fieldInput.phoneNo['onChange'] = this.handleChange;
    fieldInput.comm_address['onChange'] = this.handleChange;
    fieldInput.per_address['onChange'] = this.handleChange;


    this.id = fieldInput.empId;
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
    console.log(this.employeeForm);
  }
  handleGenders(id: number) {
    this.genderId = id;

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

  handleFileInput(files: FileList) {
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.imgURL = reader.result;
    };
  }
}
