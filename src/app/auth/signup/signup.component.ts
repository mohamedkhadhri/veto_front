import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SignupRequest } from '../../models/signup-request.model';
import { Router } from '@angular/router';
// Importer les modules Angular Material nécessaires
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  standalone: true,  // Déclarez-le comme un composant standalone
    imports: [
      ReactiveFormsModule,  // Importer ReactiveFormsModule pour gérer les formulaires réactifs
      MatFormFieldModule,   // Pour <mat-form-field>
      MatInputModule,       // Pour <input matInput>
      MatButtonModule,      // Pour <button mat-raised-button>
      MatCardModule,        // Pour <mat-card>
      MatSnackBarModule     // Pour les notifications SnackBar
    ],
  styleUrls: ['./signup.component.css']
})

export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  register() {
    if (this.registerForm.invalid) {
      return;
    }

    const { fullName, email, password } = this.registerForm.value;
    const signupRequest: SignupRequest = new SignupRequest(fullName, email, password);

    console.log("Data sent to the server:", signupRequest);

    this.authService.register(signupRequest).subscribe({
      next: () => {
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Registration failed', err);
        alert('Registration failed. Please try again.');
      }
    });
  }
}
