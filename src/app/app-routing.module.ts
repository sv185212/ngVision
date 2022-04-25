import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
{ path: 'mynetwork', loadChildren: () => import('./mynetwork/mynetwork.module').then(m => m.MynetworkModule) },
{ path: 'electronicjournal', loadChildren: () => import('./electronicjournal/electronicjournal.module').then(m => m.ElectronicjournalModule) },
{ path: 'softwaredistribution', loadChildren: () => import('./softwaredistribution/softwaredistribution.module').then(m => m.SoftwaredistributionModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'inventory', loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule) },
  { path: 'reconcilation', loadChildren: () => import('./reconcilation/reconcilation.module').then(m => m.ReconcilationModule) },
  { path: 'administration', loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
