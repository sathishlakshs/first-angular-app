import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  template: `
    <div class="col col-12">
    <div class="col-3 red">
      table
      </div>
    </div>
  `,
  styles: []
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
