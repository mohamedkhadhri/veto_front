import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Pour les formulaires réactifs
import { FormsModule } from '@angular/forms'; // Pour ngModel

// Modules Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table'; // Importer MatTableModule
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core'; // Importer MatNativeDateModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Pour les animations

// Composants standard
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './auth/signup/signup.component';

// Importation des composants standalone
import { LoginComponent } from './auth/login/login.component';
import { UsersComponent } from './users/users.component';
import { EditUserDialogComponent } from './edit-user-dialog-component/edit-user-dialog-component.component';
import { CreateUserDialogComponent } from './create-user-dialog/create-user-dialog.component';
import { MedicalReportListComponent } from './components/medical-report-list/medical-report-list.component';  // Importer le composant standalone
import { MedicalReportFormComponent } from './components/medical-report-form/medical-report-form.component'; // Composant standalone
import { MedicalReportDetailsComponent } from './components/medical-report-details/medical-report-details.component';  // Composant standalone
import { MedicalReportEditComponent } from './components/medical-report-edit/medical-report-edit.component'; // Composant standalone

@NgModule({
  declarations: [
    AppComponent,
    AnimalsListComponent,
    HeaderComponent,
    FooterComponent,
    CreateUserDialogComponent,
    // Ne déclarez plus les composants standalone ici
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Activer les animations
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule, // Toolbar pour Header
    MatButtonModule, // Boutons pour la navigation
    MatIconModule, // Icônes pour Header & Footer
    MatMenuModule, // Menu pour fonctionnalités supplémentaires
    MatFormFieldModule, // Champs de formulaire pour login & register
    MatInputModule, // Entrées de texte pour les formulaires
    MatListModule, // Listes
    MatDialogModule, // Dialogues modaux
    MatTableModule, // Importer MatTableModule pour le tableau
    MatNativeDateModule, // Ajoutez ici MatNativeDateModule pour gérer les dates

    // Importation des composants standalone ici
    LoginComponent,
    RegisterComponent,
    MedicalReportListComponent,  // Ajouter MedicalReportListComponent dans imports
    MedicalReportFormComponent,  // Ajouter MedicalReportFormComponent dans imports
    MedicalReportDetailsComponent,  // Ajouter MedicalReportDetailsComponent dans imports
    MedicalReportEditComponent  // Ajouter MedicalReportEditComponent dans imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
