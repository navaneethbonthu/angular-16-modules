import { NgModule } from '@angular/core';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DashboardComponent } from './dashboard.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared.module';
import { OverviewComponent } from './overview/overview.component';
import { RouteModule } from '../route.module';
import { RouterModule } from '@angular/router';
import { StatsComponent } from './stats/stats.component';
import { DashboardRouteModule } from './dashboard.route';

@NgModule({
  declarations: [
    DashboardComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
    OverviewComponent,
    StatsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouteModule,
    RouterModule,
    DashboardRouteModule,
  ],
  exports: [
    // DashboardComponent,
    // CreateTaskComponent,
    // TaskDetailsComponent,
    SharedModule,
    DashboardRouteModule,
  ],
})
export class DashboardModule {}
