import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AnimalsComponent } from './modules/animals/animals.component';

// Définissez les routes
const appRoutes: Routes = [
  { path: '', component: AnimalsComponent }, // Exemple de route vers AnimalsComponent
];

// Bootstrap de l'application
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(appRoutes),
      ReactiveFormsModule
    ),
  ],
}).catch((err) => console.error(err));
