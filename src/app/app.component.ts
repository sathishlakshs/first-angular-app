import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AppSerivceService } from './app-serivce.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/reducers';
import * as appAction from '../store/actions/app.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'first-angular-app';
  public token = true;
  public menus = [
    {
      icon: 'assets/svg/dashboard-icon.svg',
      menuName: 'Dashboard',
      route: 'layout/customer'

    },
    { icon: 'assets/svg/customer.svg', menuName: 'Customer', route: 'layout/customer' },
    { icon: 'assets/svg/projects.svg', menuName: 'Project', route: 'layout/project' },
    { icon: 'assets/svg/task.svg', menuName: 'Task', route: 'layout/task' },
    { icon: 'assets/svg/time-sheet-icon.svg', menuName: 'Timesheet', route: 'layout/customer' },
    { icon: 'assets/svg/account-multiple.svg', menuName: 'Employees', route: 'layout/employee' },
    { icon: 'assets/svg/employee-icon.svg', menuName: 'Profile', route: 'layout/customer' },
  ];


  constructor(location: Location, private appSerivce: AppSerivceService, private store: Store<AppState>) {
    console.log(location.prepareExternalUrl(location.path()));
  }

  ngOnInit() {
    this.appSerivce.getAllProject().subscribe(data => this.store.dispatch(new appAction.HandleChange({ name: 'projects', value: data })));
  }

}
