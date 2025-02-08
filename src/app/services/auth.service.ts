import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface AuthResponse {
  token: string; // Assuming the response includes a token
  user: {
    username: string;
    email: string;
    role: string[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:4090/api/auth'; // Base API URL

  constructor(private http: HttpClient) {}

  // Login request
  login(credentials: { username: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(`${this.apiUrl}/signin`, credentials, { headers });
  }

  // Signup request
  signup(username: string, email: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/signup`, {
        username,
        email,
        password,
        role: ['client'], // Default role
      })
      .pipe(catchError(this.handleError));
  }

  // Logout request
  logout(): Observable<void> {
    return this.http
      .post<void>(`${this.apiUrl}/logout`, {})
      .pipe(catchError(this.handleError));
  }

  // Error handling
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw error; // Or handle it differently as needed
  }
}
