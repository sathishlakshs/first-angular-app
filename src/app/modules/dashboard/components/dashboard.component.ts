import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../pages/dashboard.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
public title = 'im showing sathish';
public projects = [];
public errorMsg: string;

constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.title = 'im showing sathish';
    this.dashboardService.getProjects().subscribe(data => this.projects = data,
      error => this.errorMsg = error);
    console.log(this.projects);
  }
}
