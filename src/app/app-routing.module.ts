import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importer les composants nécessaires
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AppointmentComponent } from './appointment/appointment.component'; // Importez le composant Appointment
import { LoginComponent } from './auth/login/login.component'; // Assurez-vous d'importer le LoginComponent
import { RegisterComponent } from './auth/signup/signup.component'; // Assurez-vous d'importer le SignupComponent

const routes: Routes = [
  { path: 'animals', component: AnimalsListComponent }, // Route pour la liste des animaux
  { path: 'appointments', component: AppointmentComponent }, // Route pour la liste des rendez-vous
  { path: 'login', component: LoginComponent }, // Route pour la page de connexion
  { path: 'signup', component: RegisterComponent }, // Route pour la page d'inscription
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirection vers /login si l'URL est vide
  { path: '**', redirectTo: '/login' } // Si l'utilisateur entre une route incorrecte, redirigez-le vers login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
