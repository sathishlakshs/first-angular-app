import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './modules/customer/components/customer.component';
import { PNFComponent } from './modules/PageNotFoundComponent/components/PNFC.component';
import { EmployeeComponent } from './modules/employee/employee-list/employee.component';
import { CustomerformComponent } from './modules/customer/customerform/customerform.component';
import { TasklistComponent } from './modules/task/tasklist/tasklist.component';
import { ProjectComponent } from './modules/project/project.component';
import { ProjectFormComponent } from './modules/project/project-form/project-form.component';
import { MapChartComponent } from './common/map-chart/map-chart.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'layout/customerForm', pathMatch: 'full'
  },
  { path: 'layout/customer', component: CustomerComponent },
  { path: 'layout/project', component: ProjectComponent },
  { path: 'layout/employee', component: EmployeeComponent },
  { path: 'layout/task', component: TasklistComponent },
  {path: 'layout/mapchart', component: MapChartComponent },
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

export const routingComponent = [CustomerComponent, CustomerformComponent, EmployeeComponent, ProjectComponent,
  ProjectFormComponent, MapChartComponent, PNFComponent];
