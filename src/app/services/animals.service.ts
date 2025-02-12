import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal.model';  // Assurez-vous que ce modèle correspond à la structure de l'animal
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const BASE_URL = 'http://localhost:4090/api/animals';  // URL de l'API

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private http: HttpClient) {}

  // Mettre à jour un animal (par exemple)
  updateUser(user: any): Observable<any> {
    // Exemple de mise à jour d'un utilisateur dans l'API
    return this.http.put(`${BASE_URL}/updateUser/${user.id}`, user);
  }

  // Récupérer tous les animaux
  getAllAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(BASE_URL).pipe(
      catchError(this.handleError)
    );
  }

  // Récupérer un animal par ID
  getAnimalById(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${BASE_URL}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Créer un nouvel animal
  createAnimal(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(BASE_URL, animal).pipe(
      catchError(this.handleError)
    );
  }

  // Mettre à jour un animal
  updateAnimal(id: number, animal: Animal): Observable<Animal> {
    return this.http.put<Animal>(`${BASE_URL}/${id}`, animal).pipe(
      catchError(this.handleError)
    );
  }

  // Supprimer un animal
  deleteAnimal(id: number): Observable<any> {
    return this.http.delete(`${BASE_URL}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('Erreur API:', error);
    return throwError('Une erreur est survenue. Veuillez réessayer.');
  }
}
