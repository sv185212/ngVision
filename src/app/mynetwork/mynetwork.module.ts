import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MynetworkRoutingModule } from './mynetwork-routing.module';
import { MynetworkComponent } from './mynetwork.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MynetworkComponent
  ],
  imports: [
    CommonModule,
    MynetworkRoutingModule,
    SharedModule
  ]
})
export class MynetworkModule { }
