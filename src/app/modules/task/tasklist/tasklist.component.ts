import { Component, OnInit, ElementRef, TemplateRef, ViewChild, ViewContainerRef, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/reducers';
import * as TaskAction from '../../../../store/actions/task.action';
import { TaskServiceService } from '../pages/task-service.service';
import _ from 'lodash';

import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';
import { NodeCheckEventArgs } from '@syncfusion/ej2-navigations';

export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {
  public taskList = [];
  public projects = [];
  public projectId: number;
  public selectBoxPros = {
    options: this.projects,
    placeholder: 'select your project',
    name: 'projects',
    value: this.projectId
  };
  // nestedTreeControl: NestedTreeControl<FileNode>;
  // nestedDataSource: MatTreeNestedDataSource<FileNode>;
  // dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);
  public hierarchicalData: object[] = [
    { id: 2, name: 'Laura Callahan', eimg: '2', job: 'Product Manager', hasChild: true },
    { id: 3, pid: 2, name: 'Andrew Fuller', eimg: '7', job: 'Team Lead', hasChild: true },
    { id: 4, pid: 3, name: 'Anne Dodsworth', eimg: '1', job: 'Developer' },
    { id: 5, name: 'Nancy Davolio', eimg: '4', job: 'Product Manager', hasChild: true },
    { id: 6, pid: 5, name: 'Michael Suyama', eimg: '9', job: 'Team Lead', hasChild: true },
    { id: 7, pid: 6, name: 'Robert King', eimg: '8', job: 'Developer ' },
    { id: 8, pid: 7, name: 'Margaret Peacock', eimg: '6', job: 'Developer' },
    { id: 9, pid: 2, name: 'Janet Leverling', eimg: '3', job: 'HR' },
  ];
  public field: object = { dataSource: this.hierarchicalData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
  public cssClass: string = 'custom';
  public editing(args: NodeCheckEventArgs) {
    if (args.node.parentNode.parentNode.nodeName !== 'LI') {
      args.cancel = true;
    }
  }
  constructor(private store: Store<AppState>, private taskService: TaskServiceService,
    private renderer: Renderer2, private el: ElementRef) {
  }

  ngOnInit() {
    this.store.select('appState').subscribe(state => this.selectBoxPros.options = state.projects);
    this.selectBoxPros['onChange'] = this.handleChange;
    // const div = this.renderer.createElement('div');
    // const text = this.renderer.createText('Hello world!');
    // this.renderer.appendChild(div, text);
    // this.renderer.setStyle(this.el.nativeElement, '', 'red');
    // this.renderer.appendChild(this.el.nativeElement, div);
  }
  handleChange = (name, value) => {
    this.projectId = value;
    let returnObject = {};
    this.taskService.getProjectById(parseInt(value, 10)).subscribe((data: any) => {
      this.taskList = data.tasks.map(item => {

        returnObject = _.pick(item, ['name', 'balanceHours', 'estimatedhours', 'targetDate']);
        returnObject['assignTo'] = item.assignTo.map(({ profilePic }) => {
          return '<img src=' + profilePic + ' class="pic">';
        });
        console.log(returnObject);
        return returnObject;
      });
    });
  }



}
