import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <p>
      {{name}}
    </p>
  `,
  styles: []
})
export class InputComponent implements OnInit {
@Input()
public name;
  constructor() { }

  ngOnInit() {
  }

}
