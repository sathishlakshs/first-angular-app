import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-table',
  template: `
    <div class="col col-12 fs13">
      <div class="tableBodyDefault tr flex pr10 pl10 pb18 pt18"  *ngFor = "let row of data">
        <div *ngFor = "let key of objectKeys(row);index as i" [ngStyle]="ngWidthStyle(key, i)">
          {{ row[key] }}
        </div>
        <div *ngIf="isEditRequire; then editBlock" ></div>
        <ng-template #editBlock>
          <div class="actions" [ngStyle]="ngWidthStyle('edit', isDeleteRequire ? 0 : objectLength)">EDIT</div>
          </ng-template>
          <div *ngIf="isDeleteRequire; then deleteBlock"></div>
        <ng-template #deleteBlock>
          <div class="actions" [ngStyle]="ngWidthStyle('delete', objectLength)">Delete</div>
          </ng-template>
        </div>
    </div>
  `,
  styles: [`
  .tableBodyDefault  {
    color: #898989;
    font-family: Roboto,Helvetica,Arial,sans-serif;
  }
  .tr  .actions{
    visibility: hidden;
    pointer-events: none;
  }
  .tr:hover:nth-child(n) {
    background: #fff;
    box-shadow: 0 1px 10px rgba(0,0,0,.1);
  }
  .tr:hover:nth-child(n) .actions{
    visibility: visible;
    pointer-events: auto
  }
  `]
})
export class TableComponent implements OnInit {

  @Input()
  public spaceNeedColumn: { key: string, requireSpace: number, align: string }[];
  @Input()
  public data = [
    { name: 'sathish', role: 'developer', age: 28 },
    { name: 'sudharshan', role: 'developer', age: 22 },
    { name: 'sindhu', role: 'developer', age: 24 }
  ];
  @Input()
  public enableHover: boolean;
  @Input()
  public isEditRequire: boolean;
  @Input()
  public isDeleteRequire = false;
  @Input()
  public dat;
  public objectKeys = Object.keys;
  public evenWidth = 0;
  public objectLength = Object.keys(this.data[0]).length;
  public evenlyMinus = 0;
  public totalExpectedSpace = 0;
  constructor() { }

  ngOnInit() {
    console.log(this.dat);
    const row = _.cloneDeep(this.data[0]);
    if (this.isEditRequire) {
      this.objectLength += 1;
      // tslint:disable-next-line:no-string-literal
      row['edit'] = '';
    }
    if (this.isDeleteRequire) {
      this.objectLength += 1;
      // tslint:disable-next-line:no-string-literal
      row['delete'] = '';
    }
    this.evenWidth = 1 / this.objectLength * 100;
    this.spaceNeedColumn = Array.isArray(this.spaceNeedColumn) ? this.spaceNeedColumn : [];
    const temp = [];
    const spaceRequireArrLength = this.spaceNeedColumn.length;
    for (const key of this.objectKeys(row)) {
      let isColExsist = false;
      for (const obj of this.spaceNeedColumn) {
        if (key === obj.key) {
          isColExsist = true;
          temp.push(obj);
          this.totalExpectedSpace = obj.requireSpace + this.totalExpectedSpace;
        }
      }
      if (!isColExsist) {
        temp.push({ key, requireSpace: 0, align: 'center' });
      }
    }
    this.spaceNeedColumn = temp;
    this.evenlyMinus = (this.objectLength - spaceRequireArrLength) / this.totalExpectedSpace;
    this.evenWidth = (1 / this.objectLength * 100) - (this.evenlyMinus * this.totalExpectedSpace);
  }

  ngWidthStyle = (key: string, i: number): object => {
    let returnObject = {
      width: this.evenWidth + '%',
      textAlign: 'center'
    };
    for (const [index, item] of this.spaceNeedColumn.entries()) {
      if (key === item.key) {
        if (item.requireSpace > 0) {
          returnObject = {
            width: 1 / this.objectLength * 100 + item.requireSpace + '%',
            textAlign: item.align
          };
        }
      }
    }
    if (i >= this.objectLength - 1) {
      this.evenWidth = (1 / this.objectLength * 100) - (this.evenlyMinus * this.totalExpectedSpace);
    }
    return returnObject;
  }
}
