import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { TeamComponent } from './feature/team/team.component';
import { LaborComponent } from './feature/labor/labor.component';
import { AreaComponent } from './feature/area/area.component';
import { CollaborationComponent } from './feature/collaboration/collaboration.component';
import { ContactComponent } from './feature/contact/contact.component';
import { NotfoundComponent } from './core/templates/notfound/notfound.component';
import { MaintenanceComponent } from './core/templates/maintenance/maintenance.component';


const routes: Routes = [
  /**
   * Production Routes
   */
  { path: '', component: HomeComponent },
  { path: 'equipo', component: TeamComponent },
  { path: 'trabajo', component: LaborComponent },
  { path: 'areas', component: AreaComponent },
  { path: 'colaboraciones', component: CollaborationComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', component: NotfoundComponent }

  /**
   * Maintenance Routes
   * { path: '', component: MaintenanceComponent },
   * { path: '**', component: MaintenanceComponent },
   */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
