import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';

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
        path: 'saber-pro',
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
