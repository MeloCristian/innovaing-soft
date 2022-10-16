import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArttechRoutingModule } from './arttech-routing.module';
import { CatalogComponent } from './catalog/catalog.component';


@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    ArttechRoutingModule
  ]
})
export class ArttechModule { }
