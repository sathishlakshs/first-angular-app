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
  public dataSource: object;

  public editing(args: NodeCheckEventArgs) {
    if (args.node.parentNode.parentNode.nodeName !== 'LI') {
      args.cancel = true;
    }
  }
  constructor(private store: Store<AppState>, private taskService: TaskServiceService,
    private renderer: Renderer2, private el: ElementRef) {
    this.dataSource = {
      chart: {
        animation: '0',
        showbevel: '0',
        usehovercolor: '1',
        canvasbordercolor: 'FFFFFF',
        bordercolor: 'FFFFFF',
        showlegend: '1',
        legendposition: 'BOTTOM',
        legendborderalpha: '0',
        legendbordercolor: 'ffffff',
        legendallowdrag: '0',
        legendshadow: '0',
        caption: 'Website Visits for the month of March 2018',
        connectorcolor: '000000',
        fillalpha: '80',
        hovercolor: 'CCCCCC',
        showborder: 0,
        theme: 'fusion'
      },
      colorrange: {
        minvalue: '0',
        startlabel: 'Low',
        endlabel: 'High',
        code: 'e44a00',
        gradient: '1',
        color: [
          { maxvalue: '2500', code: 'f8bd19' },
          { maxvalue: '5000', code: '6baa01' }
        ]
      },
      data: [
        { id: '001', value: 2834 },
        { id: '003', value: 3182 },
        { id: '005', value: 3280 },
        { id: '007', value: 911 },
        { id: '009', value: 292 },
        { id: '011', value: 530 },
        { id: '013', value: 2515 },
        { id: '015', value: 728 },
        { id: '017', value: 1974 },
        { id: '019', value: 848 },
        { id: '021', value: 3278 },
        { id: '023', value: 4463 },
        { id: '025', value: 1198 },
        { id: '027', value: 378 },
        { id: '029', value: 2610 },
        { id: '031', value: 1200 },
        { id: '033', value: 3820 },
        { id: '035', value: 940 },
        { id: '037', value: 3416 },
        { id: '039', value: 4004 },
        { id: '041', value: 1604 },
        { id: '043', value: 4011 },
        { id: '045', value: 3203 },
        { id: '047', value: 3775 },
        { id: '049', value: 2721 },
        { id: '051', value: 3417 },
        { id: '053', value: 1530 },
        { id: '055', value: 412 },
        { id: '057', value: 3434 },
        { id: '059', value: 1670 },
        { id: '061', value: 1274 },
        { id: '063', value: 4339 },
        { id: '065', value: 2073 },
        { id: '067', value: 1018 },
        { id: '069', value: 3967 },
        { id: '071', value: 3401 },
        { id: '073', value: 3307 },
        { id: '075', value: 1938 },
        { id: '077', value: 489 },
        { id: '079', value: 3207 },
        { id: '081', value: 2295 },
        { id: '083', value: 2747 },
        { id: '085', value: 1114 },
        { id: '087', value: 3400 },
        { id: '089', value: 784 },
        { id: '091', value: 1673 },
        { id: '093', value: 4274 },
        { id: '095', value: 4509 },
        { id: '097', value: 3862 },
        { id: '099', value: 1356 },
        { id: '101', value: 4126 },
        { id: '103', value: 1314 },
        { id: '105', value: 1807 },
        { id: '107', value: 4026 },
        { id: '109', value: 3456 },
        { id: '111', value: 1393 },
        { id: '113', value: 1500 },
        { id: '115', value: 2218 }
      ]
    };
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
