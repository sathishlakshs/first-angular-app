import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unfill',
  templateUrl: './unfill.component.html',
  styleUrls: ['./unfill.component.scss']
})
export class UnfillComponent implements OnInit {

  @Input() public data: string;
  constructor() { }

  ngOnInit() {
  }

}
