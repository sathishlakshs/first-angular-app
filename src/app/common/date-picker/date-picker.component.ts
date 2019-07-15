import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-date-picker',
  template: `
  <div class="inputDateContainer ">
     <label>{{props.label}}</label>
     <input type="date" placeholder={{props.placeholder}} value={{props.value}} 
     class="inputDate"
     (change)="onChanges($event)"
     name={{props.name}}
     [disabled]="props.isDisabled"
     max={{props.maxDate}}
     min={{props.minDate}}
     >
     <span class='error'>{{props.errorMsg}}</span>
 </div>
  `,
  styles: [`
  .inputDateContainer{
    display:grid;
    row-gap: 10px;
    width: 100%;
    position: relative;
  }
  .inputDate{
    color:#747476;
    border:none;
    height:40px;
    padding-left:10px;
    background:#f1f2f5;
    border-radius:5px;
    outline:none;
   }
   .inputDate::-webkit-inner-spin-button {
    -webkit-appearance: none;
   }
  
}
  
  `


  ]

})
export class DatePickerComponent implements OnInit {
  @Input() props: {
    name: string,
    placeholder: string,
    value: string,
    onChange: any,
    errorMsg: string,
    isMandatory: boolean,
    isDisabled: boolean,
    label: string,
    class: string,
    maxDate: Date,
    minDate: Date,
  }
  constructor() { }

  ngOnInit() {
  }

}
