import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Appointment } from '../models/appointment.model';
import { throwError } from 'rxjs';  // Ajouter cette ligne pour importer throwError

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:4090/api/appo/'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Fetch all appointments
  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}`).pipe(
      catchError(error => {
        console.error('Error fetching appointments', error);
        return of([]); // Return empty array in case of error
      })
    );
  }

  // Create a new appointment
  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.apiUrl}`, appointment).pipe(
      catchError((error) => {
        console.error('Error creating appointment', error);
        // Throw an error instead of returning null
        throw new Error('Error creating appointment');
      })
    );
  }
  

  // Update an existing appointment
  updateAppointment(id: number, appointment: Appointment): Observable<Appointment> {
    return this.http.put<Appointment>(`${this.apiUrl}${id}`, appointment).pipe(
      catchError((error) => {
        console.error('Error updating appointment', error);
        return of({} as Appointment); // Return an empty object or handle it differently
      })
    );
  }
  

  // Delete an appointment
  // appointment.service.ts
deleteAppointment(id: number): Observable<any> {
  return this.http.delete(`http://localhost:4090/api/appo/${id}`).pipe(
    catchError((error) => {
      console.error('Error deleting appointment', error);
      return throwError(error);  // Renvoyer l'erreur pour la gestion en dehors de cette méthode
    })
  );
}

}
