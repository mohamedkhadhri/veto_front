import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importer les composants nécessaires
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/signup/signup.component';
import { UsersComponent } from './users/users-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';

// Importer les composants MedicalReport
import { MedicalReportListComponent } from './components/medical-report-list/medical-report-list.component';
import { MedicalReportDetailsComponent } from './components/medical-report-details/medical-report-details.component';
import { MedicalReportFormComponent } from './components/medical-report-form/medical-report-form.component';
import { MedicalReportEditComponent } from './components/medical-report-edit/medical-report-edit.component';

// Importer le composant pour ajouter un animal
import { AddAnimalComponent } from './animals-add/animals-add.component';

// Définition des routes
const routes: Routes = [
  // Pages générales
  { path: 'pricing', component: PricingComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },

  // Gestion des animaux
  { path: 'animals', component: AnimalsListComponent },
  { path: 'animal/add', component: AddAnimalComponent }, // Ajout d'un animal

  // Gestion des rendez-vous
  { path: 'appointments', component: AppointmentComponent },

  // Authentification
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },

  // Gestion des utilisateurs
  { path: 'users', component: UsersComponent },

  // Gestion des Medical Reports
  { path: 'medical-reports', component: MedicalReportListComponent },
  { path: 'medical-reports/details/:id', component: MedicalReportDetailsComponent },
  { path: 'medical-reports/edit/:id', component: MedicalReportEditComponent },
  { path: 'medical-reports/add', component: MedicalReportFormComponent },

  // Redirections
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirection vers login par défaut
  { path: '**', redirectTo: '/login' } // Fallback pour les routes inexistantes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
