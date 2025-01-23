import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from '../app/modules/animals/animals.component'; 

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Vaccination', loadChildren: () => import('./modules/vaccination/vaccination.module').then(m => m.VaccinationModule) },
  { path: 'MedicalReport', loadChildren: () => import('./modules/medical-report/medical-report.module').then(m => m.MedicalReportModule) },
  { path: 'Rendez-vous', loadChildren: () => import('./modules/rendez-vous/rendez-vous.module').then(m => m.RendezVousModule) },
  { path: 'Animals', component: AnimalsComponent },
  { path: 'animals', loadChildren: () => import('./modules/animals/animals.module').then(m => m.AnimalsModule) },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
