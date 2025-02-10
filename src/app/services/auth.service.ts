import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JwtResponse } from '../models/jwt-response.model';  // Créez un modèle pour la réponse JWT
import { SignupRequest } from '../models/signup-request.model'; // Créez un modèle pour la demande d'inscription
import { LoginRequest } from '../models/login-request.model';  // Créez un modèle pour la demande de connexion
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}/api/auth`;  // L'URL de votre API
  private currentUserSubject: BehaviorSubject<JwtResponse | null> = new BehaviorSubject<JwtResponse | null>(null);
  public currentUser: Observable<JwtResponse | null> = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    // Récupérer le token JWT depuis localStorage au démarrage pour vérifier si l'utilisateur est déjà connecté
    const storedToken = localStorage.getItem('auth_token');
    if (storedToken) {
      // Créer un objet JwtResponse simulé avec les informations stockées dans le localStorage
      this.currentUserSubject.next({ jwt: storedToken } as JwtResponse);
    }
  }

  // Authentifier l'utilisateur (login)
  login(loginRequest: LoginRequest): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.apiUrl}/signin`, loginRequest)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Inscrire un utilisateur (signup)
  register(signupRequest: SignupRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, signupRequest)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Déconnecter un utilisateur (logout)
  logout(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/logout`, {}).pipe(
      catchError(this.handleError)
    );
  }

  // Gérer les erreurs HTTP
  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    this.snackBar.open('An error occurred. Please try again.', 'Close', { duration: 3000 });
    throw error;  // Throw error to allow further handling (if necessary)
  }

  // Sauvegarder le token JWT dans le localStorage
  saveToken(jwtResponse: JwtResponse): void {
    localStorage.setItem('auth_token', jwtResponse.jwt);
    this.currentUserSubject.next(jwtResponse);  // Mettre à jour le sujet actuel de l'utilisateur
  }

  // Supprimer le token JWT du localStorage
  clearToken(): void {
    localStorage.removeItem('auth_token');
    this.currentUserSubject.next(null);  // Mettre à jour le sujet pour refléter que l'utilisateur est déconnecté
  }

  // Vérifier si l'utilisateur est connecté
  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');  // Vérifie la présence du token dans le localStorage
  }

  // Récupérer le token JWT actuellement stocké
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }
}
