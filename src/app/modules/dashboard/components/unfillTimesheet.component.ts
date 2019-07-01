import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unfill-timesheet',
  templateUrl: './unfillTimesheet.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class UnfillTimesheetComponent implements OnInit {
title: string;
@Input()
public data: string;

  ngOnInit() {
    console.log(this.data);
    this.title = this.data;
  }
}
