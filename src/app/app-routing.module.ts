import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './modules/customer/components/customer.component';
import { PNFComponent } from './modules/PageNotFoundComponent/components/PNFC.component';
import { EmployeeComponent } from './modules/employee/employee.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/customer', pathMatch: 'full'
  },
  {path: 'customer', component: CustomerComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: '**', component: PNFComponent}
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

export const routingComponent = [CustomerComponent, EmployeeComponent, PNFComponent];
