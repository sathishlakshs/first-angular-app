import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  template: `
    <input class="searchInput"/>
  `,
  styles: [
    `.searchInput {
      color: #747476;
      border: none;
      height: 40px;
      padding-left: 10px;
      background: #f1f2f5;
      border-radius: 2px;
      width: 100%;
      outline: none;
      margin-right: 12px;
      position: relative;
    `
  ]
})
export class SearchBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
