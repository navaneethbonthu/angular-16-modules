import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { StatsComponent } from './stats/stats.component';
import { canActivate } from '../RouteGuards/authGuard';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [canActivate],
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'stats',
        component: StatsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRouteModule {}
