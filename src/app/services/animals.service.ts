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
    console.log("INSIDE ANIMALS SERVICE");
    return this.http.post(`${BASE_URL}/animals`, data);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${BASE_URL}/users`);
  }
}