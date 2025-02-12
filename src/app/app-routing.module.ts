import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importer les composants nécessaires
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/signup/signup.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';

// Importer les composants MedicalReport
import { MedicalReportListComponent } from '../app/components/medical-report-list/medical-report-list.component';
import { MedicalReportDetailsComponent } from '../app/components/medical-report-details/medical-report-details.component';
import { MedicalReportFormComponent } from '../app/components/medical-report-form/medical-report-form.component';
import { MedicalReportEditComponent } from '../app/components/medical-report-edit/medical-report-edit.component';

const routes: Routes = [
  { path: 'pricing', component: PricingComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'animals', component: AnimalsListComponent },
  { path: 'appointments', component: AppointmentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'users', component: UsersComponent },

  // Routes pour Medical Reports
  { path: 'medical-reports', component: MedicalReportListComponent },
  { path: 'medical-reports/details/:id', component: MedicalReportDetailsComponent },
  { path: 'medical-reports/edit/:id', component: MedicalReportEditComponent },
  { path: 'medical-reports/add', component: MedicalReportFormComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } // Si l'utilisateur entre une route incorrecte, redirigez-le vers login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
