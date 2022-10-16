import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { DefaultComponent } from './default/default.component';
import { TutorialComponent } from './tutorial/tutorial.component';


@NgModule({
  declarations: [
    DefaultComponent,
    TutorialComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PerfectScrollbarModule
  ]
})
export class DashboardModule { }
