import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MynetworkComponent } from './mynetwork.component';

const routes: Routes = [{ path: '', component: MynetworkComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MynetworkRoutingModule { }
