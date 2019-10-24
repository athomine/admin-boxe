import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { StatsComponent } from './stats/stats.component';
import { BoxerComponent } from './demo/pages/boxer/boxer.component';
import { AuthGuardService } from './guards/auth-guard';
import { UserRole } from 'src/model/user-info';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ AuthGuardService ],
    data: {
      roles: [
        UserRole.ROLE_ADMIN
      ]
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: './demo/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'stats',
        component: StatsComponent
      }
    ]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: './demo/pages/authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: 'boxer',
    component: BoxerComponent,
    data: {
      roles: [
        UserRole.ROLE_FIGHTER
      ]
    },
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
