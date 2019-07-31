import { Component, OnInit, HostListener } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.html',
  styles: [`
  .columnBorder{
    border: 1px solid #000;
  }
  .example-container {
    width: 400px;
    max-width: 100%;
    margin: 0 25px 25px 0;
    display: inline-block;
    vertical-align: top;
  }

  .example-list {
    border: solid 1px #ccc;
    min-height: 60px;
    background: white;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    width: fit-content;
  }

  .example-box {
    border-bottom: solid 1px #ccc;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    cursor: move;
    background: white;
    font-size: 14px;
  }

  .grapper:hover ~ .example-box {
    pointer-events: none;
}

 .grabber{
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    margin-top: -15px;
    cursor: ew-resize;
    height: 100%;
    width: 9px;
    border-top: 1px solid #f1f1f1;
    overflow: hidden;
    background-color: #eff0f1;
    background-image: url('https://cdn.sstatic.net/Sites/stackoverflow/img/sprites.svg'),none;
    background-position: 210px -364px;
    background-size: initial;
    background-repeat: no-repeat;
 }

  .cdk-drag-preview {
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                0 8px 10px 1px rgba(0, 0, 0, 0.14),
                0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  .cdk-drag-placeholder {
    opacity: 0;
  }

  .cdk-drag-animating {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
  }

  .example-box:last-child {
    border: none;
  }

  .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
  }
  `]
})
export class SmartTableComponent implements OnInit {

  public data: any;
  public howManyColumn: number = 0;
  public objectKeys = Object.keys;
  public columnwidth = 150;
  public y = 10;
  public oldX = 0;
  public grabber = false;

  constructor() { }

  ngOnInit() {
    this.data = [
     {heading: 'heading1', values: ['r1c1', 'r1c2', 'r1c3', 'r1c4']},
     {heading: 'heading2', values: ['r2c1', 'r2c2', 'r2c3', 'r2c4']},
     {heading: 'heading3', values: ['r3c1', 'r3c2', 'r3c3', 'r34']},
     {heading: 'heading4', values: ['r4c1', 'r4c2', 'r4c3', 'r4c4']}
  ];
  }

  onDrop(event: CdkDragDrop<string[]  >) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    event.stopPropagation();
    if (this.grabber) {
      const temp = [];
        for (const item of this.data ) {
          item.disabled = true;
          temp.push(item);
        }
        this.data = temp;
    }
    if (!this.grabber) {
        return;
    }
    this.resizer(event, event.clientX - this.oldX);
    this.oldX = event.clientX;
  }

  resizer(event, offsetX: number) {
    this.columnwidth += offsetX;
  }

  // mouseUp = (event: MouseEvent) => {
  //   console.log('hai');
  //   this.grabber = false;
  // }

  mouseDown = (event: MouseEvent) => {
    event.stopPropagation();
    this.grabber = true;
    this.oldX = event.clientX;
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    const tempArr = [];
    for (const item of this.data ) {
      item['disabled'] = false;
      console.log(item);
      tempArr.push(item);
      console.log(tempArr);
    }
    // console.log(tempArr);
    this.data = tempArr;
    // console.log(this.data);
    this.grabber = false;
  }


  // @HostListener('document:mousedown', ['$event'])
  // onMouseDown(event: MouseEvent) {
  //   this.grabber = true;
  //   this.oldX = event.clientX;
  // }

}

