import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArttechRoutingModule } from './arttech-routing.module';
<<<<<<< HEAD
import { PersonComponent } from './person/person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { CatalogComponent } from './catalog/catalog.component';
>>>>>>> 86c42af615e8b4fc72008ac13f39d38c65730255


@NgModule({
  declarations: [
<<<<<<< HEAD
    PersonComponent
=======
    CatalogComponent
>>>>>>> 86c42af615e8b4fc72008ac13f39d38c65730255
  ],
  imports: [
    CommonModule,
    ArttechRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ArttechModule { }
