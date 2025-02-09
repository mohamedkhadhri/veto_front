// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppointmentComponent } from './appointment/appointment.component'; // Importez le composant Appointment

const routes: Routes = [
  { path: 'animals', component: AnimalsListComponent }, // Route pour la liste des animaux
  { path: 'login', component: LoginComponent }, // Route pour la page de connexion
  { path: 'register', component: RegisterComponent }, // Route pour la page d'inscription
  { path: 'appointments', component: AppointmentComponent }, // Route pour la liste des rendez-vous
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirection vers /login si l'URL est vide
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }