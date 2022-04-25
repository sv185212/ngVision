import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicjournalComponent } from './electronicjournal.component';

const routes: Routes = [{ path: '', component: ElectronicjournalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectronicjournalRoutingModule { }
