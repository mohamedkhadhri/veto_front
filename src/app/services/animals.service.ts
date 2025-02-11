import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = "http://localhost:4090/api";

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  constructor(private http: HttpClient) {}

  registerAnimal(data: FormData): Observable<any> {
    return this.http.post(`${BASE_URL}/animals`, data);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${BASE_URL}/users`);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete(`${BASE_URL}/users/${userId}`);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`${BASE_URL}/users/${user.id}`, user);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(`${BASE_URL}/users`, user);
  }
  
}