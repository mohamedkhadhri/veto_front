import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal.model';  // Ensure this model matches the backend Animal class
import { User } from '../models/user.model';  // Assuming you have a User model
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


const BASE_URL = "http://localhost:4090/api";  // Make sure this matches the backend server port

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  constructor(private http: HttpClient) {}

  // Register animal (create a new animal)
  registerAnimal(data: Animal): Observable<Animal> {
    return this.http.post<Animal>(`${BASE_URL}/animals`, data);  // Post a new animal
  }

  // Get all animals (fetching animals with their owners)
  getAllAnimals(): Observable<Animal[]> {
    return this.http.get<any[]>(`${BASE_URL}/animals`).pipe(
      map((response: any[]) => {
        console.log('Réponse de l\'API:', response);  // Loguer la réponse complète pour vérifier la structure
        
        return response.flatMap(user => {
          if (user.animals && Array.isArray(user.animals)) {
            // Si 'animals' existe et est un tableau, on les traite
            return user.animals.map((animal: Animal) => ({
              ...animal,
              owner: user.username  // Ajouter le nom d'utilisateur du propriétaire
            }));
          } else {
            console.warn(`Aucun animal trouvé pour l'utilisateur ${user.username}`);  // Avertir si 'animals' est manquant ou malformé
            return [];
          }
        });
      }),
      catchError(err => {
        console.error('Erreur lors de la récupération des animaux:', err);  // Loguer l'erreur si l'appel API échoue
        return throwError(err);  // Propager l'erreur
      })
    );
  }
  
  // Delete animal by ID
  deleteAnimal(animalId: string): Observable<void> {
    return this.http.delete<void>(`${BASE_URL}/animals/${animalId}`);  // Delete animal by ID
  }

  // Update animal by ID
  updateAnimal(animalId: string, data: Animal): Observable<Animal> {
    return this.http.put<Animal>(`${BASE_URL}/animals/${animalId}`, data);  // Update animal details
  }

  // Get animal by ID
  getAnimalById(animalId: string): Observable<Animal> {
    return this.http.get<Animal>(`${BASE_URL}/animals/${animalId}`);  // Get animal details by ID
  }

  // Get all users (fetching all user data)
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${BASE_URL}/users`);  // Assuming this endpoint returns an array of users
  }

  // Delete user by ID
  deleteUser(userId: string): Observable<void> {
    return this.http.delete<void>(`${BASE_URL}/users/${userId}`);  // Delete user by ID
  }

  // Create a new user
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${BASE_URL}/users`, user);  // Post a new user
  }

  // Update user details (optional, if needed)
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${BASE_URL}/users/${user.id}`, user);  // Update user by ID
  }
}
