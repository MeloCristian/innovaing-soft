import { MessageComponent } from './message/message.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent,
    data: {
      title: 'Badge'
    }
  },
  {
    path: 'message',
    component: MessageComponent,
    data: {
      title: 'Badge'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArttechRoutingModule { }
