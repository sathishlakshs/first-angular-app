import { Component, OnInit, Input } from '@angular/core';
import fieldBehavior from './projectFieldBehavior.json';
import { AppState } from '../../../../store/reducers';
import { ProjectService } from '../pages/project.service';
import * as ProjectActions from '../../../../store/actions/project.action';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

  @Input()
  public project;
  public objectKeys = Object.keys;


  constructor(private store: Store<AppState>, private projectService: ProjectService) { }

  ngOnInit() {
  }

  fieldAttributesAssign = () => {
    for (const key of this.objectKeys(fieldBehavior)) {
      fieldBehavior[key].onChange = this.handleChange;
    }
  }

  handleChange = (name: string, value: any) => {
    this.store.dispatch(new ProjectActions.HandleChange({ name, value }));
  }

  save = () => {

  }

}
