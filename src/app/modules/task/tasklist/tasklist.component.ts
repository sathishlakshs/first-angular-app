import { Component, OnInit, ElementRef, TemplateRef, ViewChild, ViewContainerRef, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/reducers';
import * as TaskAction from '../../../../store/actions/task.action';
import { TaskServiceService } from '../pages/task-service.service';
import _ from 'lodash';
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
