// app.module.ts
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
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
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

@NgModule({
  declarations: [
    AppComponent,
    AnimalsListComponent,
    HeaderComponent,
    FooterComponent,
    CreateUserDialogComponent
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

    // Importation des composants standalone
    LoginComponent,
    RegisterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
