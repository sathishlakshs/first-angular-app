import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="flex alignCenter spbtw p20 header">
      <div>Employee</div>
      <div class="flex">
         <app-search-box></app-search-box>
      </div>
    </header>
  `,
  styles: [`header{
    width: 100%;
    margin: auto;
    height: auto;
    border: 1px solid #c7c7c7;
    margin-bottom: 50px;
    background: #fff;
  }`]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
