import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { customerReducer } from 'src/store/reducers/customer.reducer';
import { temp } from './modules/employee/employee-list/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    temp

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({customerState: customerReducer})
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
