import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  template: `
      <div class="textareaFieldContainer">
      <label>{{props.label}}</label>
      <textarea  placeholder={{props.placeholder}} value={{props.value}}
      class="textarea"
      (input)="props.onChange(props.name,$event.target.value)"
      name={{props.name}}
      [disabled]="props.isDisabled"
      ></textarea>
    </div>
  `,
  styles: [`
  .textareaFieldContainer{
    display:grid;
    width: 100%;
    position: relative;
  }
  .textarea{
    color: #747476;
    border: none;
    height: 100px;
    padding-left: 10px;
    background: #f1f2f5;
    border-radius: 5px;
    outline: none;
    resize: none;

  }`
  ]
})
export class TextareaComponent implements OnInit {
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
  };

  constructor() { }

  ngOnInit() {
  }

}
