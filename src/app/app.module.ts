import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule, ActionReducer, State } from '@ngrx/store';
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
import { FormsModule } from '@angular/forms';
import { employeeReducer } from 'src/store/reducers/employee.reducer';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from 'src/environments/environment';
import { TasklistComponent } from './modules/task/tasklist/tasklist.component';
import { appReducer } from 'src/store/reducers/app.reducer';
import { TaskformComponent } from './modules/task/taskform/taskform/taskform.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { projectReducer } from 'src/store/reducers/project.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { SmartTableComponent } from './common/smart-table/smart-table.component';

export function logger(reducer: ActionReducer<any>): any {
  return storeLogger()(reducer);
}
export const metaReducers = environment.production ? [] : [logger];
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
    TextareaComponent,
    TasklistComponent,
    TaskformComponent,
    SmartTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    StoreModule.forRoot({ customerState: customerReducer, employeeState: employeeReducer, projectState: projectReducer }, { metaReducers }),
    HttpClientModule,
    SimpleModalModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
