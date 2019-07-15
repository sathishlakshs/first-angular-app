import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-box',
  template: `
   <div class="selectBoxContainer">
   <select value={{props.value}} (change)="props.onChange($event,value)" class="selectBox">
   <option *ngFor="let option of props.options" value={{option.id}}>{{option.name}}</option>
   </select>
   <div>
  `,
  styles: [`.selectBox {
    color: #747476;
    border: none;
    height:100%;
    background: transparent;
    width: 100%;
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
    options: any[],
    value: number,
    onChange: any,

  }
  constructor() {
  }

  ngOnInit() {
  }

}
