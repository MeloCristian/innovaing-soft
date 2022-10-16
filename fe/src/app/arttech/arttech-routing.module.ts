import { PersonComponent } from './person/person.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
  {
    path: 'person',
    component: PersonComponent,
    data: {
      title: 'PersonManagement'
    }
  },
  {
    path: 'catalog',
    component: CatalogComponent,
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
