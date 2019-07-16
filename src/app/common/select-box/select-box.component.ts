import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-box',
  template: `
   <div class="">
   <label>{{props.label}}</label>
   <select value={{props.value}} (change)="props.onChange($event,value)" class="selectBox" [disabled]="props.isDisabled">
   <option  value=0  [disabled]="true">{{props.placeholder}}</option>
   <option *ngFor="let option of props.options" value={{option.id}}  [disabled]="option.isDisabled">{{option.name}}</option>
   </select>
   <div>
  `,
  styles: [`.selectBox {
    color: #747476;
    width: 100%;
    border:none;
    height:40px;
    background:#f1f2f5;
    border-radius:5px;
    outline: none;
  }
  .selectBoxContainer{
    color: #747476;
    border: none;
    height: 40px;
    background: #f1f2f5;
    border-radius: 2px;
    width: 100%;
    outline: none;
    margin-right: 12px;
    position: relative;
    cursor:pointer;
  }
`]
})
export class SelectBoxComponent implements OnInit {
  @Input() props: {
    name: string,
    placeholder: string,
    options: any[],
    value: number,
    onChange: any,
    label: string,
    isDisabled: boolean,
    isMandatory: boolean,
    errorMsg: string
  };
  constructor() {
  }

  ngOnInit() {
      // if (this.props.placeholder) {
      // this.props.options.unshift({id: 0, name: this.props.placeholder, isDisabled: true});
      // }
  }

}
