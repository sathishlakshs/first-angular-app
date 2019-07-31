import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.scss']
})
export class TaskformComponent implements OnInit {
  @Input() template;
  constructor() { }

  todos = [
    {
      name: 'Get to work Pic  groceries Go home Fall asleep'
    },
    {
      name: 'Get to work Pic  groceries Go home Fall asleep'
    },
  ];

  ngOnInit() {
    console.log(this.template);
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   console.log(event);
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }
  // }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }
  onResize(event) {
    console.log(event);
  }

}
