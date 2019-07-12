import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomerComponent } from "../components/customer.component";
import { CustomerformComponent } from "../customerform/customerform.component";
@NgModule({
    declarations: [
        CustomerformComponent
    ],
    imports: [
        BrowserModule,
        CustomerComponent
    ],
    providers: [],
    exports: [CustomerformComponent]
})
export class CustomerModule { }

