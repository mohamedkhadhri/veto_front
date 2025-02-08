import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],  // Changed from 'email' to 'username'
      password: ['', [Validators.required, Validators.minLength(6)]],
    });    
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;  // Changed from 'email' to 'username'
      const credentials = {
        username, // Directly use 'username' from form control
        password
      };
      console.log('Credentials being sent:', credentials);
      this.authService.login(credentials).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          localStorage.setItem('token', response.token);
        },
        error: (error) => {
          console.error('Login failed:', error);
        },
      });
    }
  }  
  
}
