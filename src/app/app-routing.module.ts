import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceComponent } from './core/templates/maintenance/maintenance.component';


const routes: Routes = [
  { path: '', component: MaintenanceComponent },
  { path: '**', component: MaintenanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
