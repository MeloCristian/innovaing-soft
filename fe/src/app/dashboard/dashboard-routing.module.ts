import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { TutorialComponent } from './tutorial/tutorial.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        component: DefaultComponent,
        data: {
          title: 'Projects'
        }
      },
      {
        path: 'tutorial',
        component: TutorialComponent,
        data: {
          title: 'tutorial'
        }
      },
      {
        path: 'arttech',
        loadChildren: () => import('../arttech/arttech-routing.module').then(m => m.ArttechRoutingModule)
      },
    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
