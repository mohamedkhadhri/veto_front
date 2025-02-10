import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/login-request.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  // Importer les classes nécessaires pour les formulaires réactifs

// Importer les modules Angular Material nécessaires
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';  // Importer ReactiveFormsModule

@Component({
  selector: 'app-login',
  standalone: true,  // Déclarez-le comme un composant standalone
  imports: [
    ReactiveFormsModule,  // Importer ReactiveFormsModule pour gérer les formulaires réactifs
    MatFormFieldModule,   // Pour <mat-form-field>
    MatInputModule,       // Pour <input matInput>
    MatButtonModule,      // Pour <button mat-raised-button>
    MatCardModule,        // Pour <mat-card>
    MatSnackBarModule     // Pour les notifications SnackBar
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;  // Déclarer le FormGroup pour le formulaire réactif

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private fb: FormBuilder  // Injecter FormBuilder pour créer le formulaire
  ) {
    // Initialisation du formulaire avec des validations
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],  // Le champ username est requis
      password: ['', [Validators.required]]   // Le champ password est requis
    });
  }

  // Soumettre le formulaire
  login() {
    if (this.loginForm.invalid) {
      this.snackBar.open('Please fill in both fields correctly', 'Close', { duration: 3000 });
      return;
    }

    const loginRequest: LoginRequest = this.loginForm.value;

    this.authService.login(loginRequest).subscribe(
      (response) => {
        this.authService.saveToken(response);  // Sauvegarder le token dans le service
        this.router.navigate(['/dashboard']);  // Rediriger l'utilisateur vers le tableau de bord
        this.snackBar.open('Login successful', 'Close', { duration: 3000 });
      },
      (error) => {
        this.snackBar.open('Login failed', 'Close', { duration: 3000 });
      }
    );
  }
}
