import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-angular-app';
  token = true;
  menus = [
    {
      icon: 'assets/svg/dashboard-icon.svg',
      menuName: 'Dashboard',
      route: 'layout/customer'

    },
    { icon: 'assets/svg/customer.svg', menuName: 'Customer', route: 'layout/customer' },
    { icon: 'assets/svg/projects.svg', menuName: 'Project', route: 'layout/customer' },
    { icon: 'assets/svg/task.svg', menuName: 'Task', route: 'layout/customer' },
    { icon: 'assets/svg/time-sheet-icon.svg', menuName: 'Timesheet', route: 'layout/customer' },
    { icon: 'assets/svg/account-multiple.svg', menuName: 'Employees', route: 'layout/employee' },
    { icon: 'assets/svg/employee-icon.svg', menuName: 'Profile', route: 'layout/customer' },
  ];
}
