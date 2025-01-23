import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  private apiUrl = 'http://localhost:4090/animals'; 

  constructor(private http: HttpClient) {}

  registerAnimal(data: FormData): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
