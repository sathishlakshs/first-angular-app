import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
  <div class="inputFieldContainer ">
     <label>{{props.label}}</label>
     <input type={{props.type}} placeholder={{props.placeholder}} value={{props.value}}
     class="inputFiled"
     (change)="props.onChange(props.name,$event.target.value)"
     name={{props.name}}
     [disabled]="props.isDisabled"
     >
     <span class='error'>{{props.errorMsg}}</span>
 </div>
  `,
  styles: [`
  .inputFieldContainer{
    display:grid;
    width: 100%;
    position: relative;
  }
  .inputFiled{
    color:#747476;
    border:none;
    height:40px;
    padding-left:10px;
    background:#f1f2f5;
    border-radius:5px;
    outline:none;
    width: 100%;
  }`
]

})
export class InputComponent implements OnInit {
  @Input() props: {
    name: string,
    type: string,
    placeholder: string,
    value: string,
    onChange: any,
    errorMsg: string,
    isMandatory: boolean,
    isDisabled: boolean,
    label: string,
    class: string,
  };



  constructor() { }

  ngOnInit() {
    const { isDisabled } = this.props;
    this.props.isDisabled = !isDisabled ? false : isDisabled;
  }

}
