import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './modules/customer/components/customer.component';
import { PNFComponent } from './modules/PageNotFoundComponent/components/PNFC.component';
import { EmployeeComponent } from './modules/employee/employee-list/employee.component';
import { CustomerformComponent } from './modules/customer/customerform/customerform.component';
import { TasklistComponent } from './modules/task/tasklist/tasklist.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'layout/customerForm', pathMatch: 'full'
  },
  { path: 'layout/customer', component: CustomerComponent },
  { path: 'layout/employee', component: EmployeeComponent },
  { path: 'layout/task', component: TasklistComponent },
  { path: '**', component: PNFComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}

export const routingComponent = [CustomerComponent, CustomerformComponent, EmployeeComponent, TasklistComponent,
  PNFComponent];
