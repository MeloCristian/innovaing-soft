import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArttechRoutingModule } from './arttech-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    CatalogComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    ArttechRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ArttechModule { }
