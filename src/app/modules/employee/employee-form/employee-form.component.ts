import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../pages/employee.service';
import { AppState } from 'src/store/reducers';
import { Store } from '@ngrx/store';
import fieldInput from './fieldInputs.json';
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
  public id;
  public selectProps = {
    options: [{ id: 0, name: 'sudarshan' }, { id: 1, name: 'sathish' }, { id: 3, name: 'sindhu' }],
    onChange: this.handleChange,
  };
  public gender: { id: number, name: string }[] = [];
  public genderId: number;
  handleChange() {
    console.log('searched');
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
  constructor(private store: Store<AppState>, private employeeService: EmployeeService) { }
  ngOnInit() {
    this.employeeService.getGender().subscribe((data: any[]) => {
      this.gender = data;
    });
    this.id = fieldInput.empId;
  }
}
