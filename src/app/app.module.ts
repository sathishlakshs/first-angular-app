import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { customerReducer } from 'src/store/reducers/customer.reducer';
import { InputComponent } from './common/input/input.component';
import { TableComponent } from './common/table/table.component';
import { SearchBoxComponent } from './common/search-box/search-box.component';
import { temp } from './modules/employee/employee-list/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectBoxComponent } from './common/select-box/select-box.component';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './common/date-picker/date-picker.component';
import { HeaderComponent } from './common/header/header.component';
import { SimpleModalModule } from 'ngx-simple-modal';
import { TextareaComponent } from './common/textarea/textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    temp,
    InputComponent,
    TableComponent,
    SearchBoxComponent,
    SelectBoxComponent,
    DatePickerComponent,
    HeaderComponent,
    TextareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    StoreModule.forRoot({ customerState: customerReducer }),
    HttpClientModule,
    SimpleModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
