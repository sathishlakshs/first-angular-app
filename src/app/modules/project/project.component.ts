import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/reducers';
import { ProjectService } from './pages/project.service';
import { Project } from 'src/app/model/project.model';
import * as _ from 'lodash';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public project: Project;
  public projects: any[] = [];

  constructor(private store: Store<AppState>, private projectService: ProjectService) {
    store.select('projectState').subscribe(state => {
      this.project = state.form;
     });
   }

  ngOnInit() {
    this.projectService.getProjects().subscribe(data => {
      console.log(data);
      this.projects = data;
    });
  }

  onDrop(event: CdkDragDrop<string[]  >) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
