import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private apiUrl = 'http://localhost:4090/api/appo/'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Fetch all appointments
  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}`).pipe(
      catchError((error) => {
        console.error('Error fetching appointments', error);
        // You can log errors more specifically here (perhaps returning a user-friendly message)
        return of([]); // Return empty array in case of error
      })
    );
  }

  // Create a new appointment
  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.apiUrl}`, appointment).pipe(
      catchError((error) => {
        console.error('Error creating appointment', error);
        // Throw an error to be handled by the component/service calling it
        return throwError('Error creating appointment'); // Return an observable error
      })
    );
  }

  // Update an existing appointment
  updateAppointment(id: number, appointment: Appointment): Observable<Appointment> {
    return this.http.put<Appointment>(`${this.apiUrl}${id}`, appointment).pipe(
      catchError((error) => {
        console.error('Error updating appointment', error);
        // Return an empty object or handle it differently
        return of({} as Appointment); // Or you can return throwError('Error updating appointment') to propagate the error
      })
    );
  }

  // Delete an appointment
  deleteAppointment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}`).pipe(
      catchError((error) => {
        console.error('Error deleting appointment', error);
        return throwError(error); // Renvoyer l'erreur pour la gestion en dehors de cette méthode
      })
    );
  }
}
