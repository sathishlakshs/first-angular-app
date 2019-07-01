import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './modules/customer/components/customer.component';
import { LoginComponent } from './modules/login/components/login.component';
import { DashboardComponent } from './modules/dashboard/components/dashboard.component';
import { PNFComponent } from './modules/PageNotFoundComponent/components/PNFC.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'customer', component: CustomerComponent},
  {path: '**', component: PNFComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, CustomerComponent, PNFComponent];
