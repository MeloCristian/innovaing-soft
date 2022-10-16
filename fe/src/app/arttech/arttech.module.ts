import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArttechRoutingModule } from './arttech-routing.module';
import { PersonComponent } from './person/person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    CommonModule,
    ArttechRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ArttechModule { }
