import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:4090/api/med-rep/';

export interface MedicalReport {
  id?: number;
  observation: string;
  medicalHistory: string;
  userId?: number;
  animalId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class MedicalReportService {
  constructor(private http: HttpClient) {}

  getAllReports(): Observable<MedicalReport[]> {
    return this.http.get<MedicalReport[]>(API_URL);
  }

  getReportById(id: number): Observable<MedicalReport> {
    return this.http.get<MedicalReport>(`${API_URL}${id}`);
  }

  createReport(report: MedicalReport): Observable<MedicalReport> {
    return this.http.post<MedicalReport>(API_URL, report);
  }

  updateReport(id: number, report: MedicalReport): Observable<MedicalReport> {
    return this.http.put<MedicalReport>(`${API_URL}${id}`, report);
  }

  deleteReport(id: number): Observable<any> {
    return this.http.delete(`${API_URL}${id}`);
  }
}
