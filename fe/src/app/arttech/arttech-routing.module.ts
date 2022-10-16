import { PersonComponent } from './person/person.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
  {
<<<<<<< HEAD
    path: 'person',
    component: PersonComponent,
    data: {
      title: 'PersonManagement'
    }
  },
=======
    path: 'catalog',
    component: CatalogComponent,
    data: {
      title: 'Badge'
    }
  }
>>>>>>> 86c42af615e8b4fc72008ac13f39d38c65730255
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArttechRoutingModule { }
