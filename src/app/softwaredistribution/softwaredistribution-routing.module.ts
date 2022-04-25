import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwaredistributionComponent } from './softwaredistribution.component';

const routes: Routes = [{ path: '', component: SoftwaredistributionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwaredistributionRoutingModule { }
