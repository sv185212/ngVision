import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectronicjournalRoutingModule } from './electronicjournal-routing.module';
import { ElectronicjournalComponent } from './electronicjournal.component';


@NgModule({
  declarations: [
    ElectronicjournalComponent
  ],
  imports: [
    CommonModule,
    ElectronicjournalRoutingModule
  ]
})
export class ElectronicjournalModule { }
