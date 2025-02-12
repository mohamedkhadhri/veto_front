import { Component, OnInit } from '@angular/core';
import { MedicalReportService, MedicalReport } from '../../services/medical-report.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';  // Importer Router pour la navigation

@Component({
  selector: 'app-medical-report-list',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './medical-report-list.component.html',
  styleUrls: ['./medical-report-list.component.css']
})
export class MedicalReportListComponent implements OnInit {
  reports: MedicalReport[] = [];
  dataSource!: MatTableDataSource<MedicalReport>;  // Assertion de non-null

  displayedColumns: string[] = ['id', 'observation', 'medicalHistory', 'actions'];

  constructor(
    private reportService: MedicalReportService,
    private router: Router  // Injection du service Router
  ) {}

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports() {
    this.reportService.getAllReports().subscribe(data => {
      this.reports = data;
      this.dataSource = new MatTableDataSource(this.reports);  // Initialisation ici
    });
  }

  deleteReport(id: number) {
    this.reportService.deleteReport(id).subscribe(() => {
      this.reports = this.reports.filter(r => r.id !== id);
      this.dataSource.data = this.reports;  // Mise à jour après suppression
    });
  }

  // Méthode pour naviguer vers la page d'ajout de rapport
  navigateToAddReport(): void {
    this.router.navigate(['/medical-reports/add']);  // Redirige vers la page d'ajout
  }

  // Méthode pour naviguer vers la page d'édition d'un rapport
  navigateToEditReport(id: number): void {
    this.router.navigate([`/medical-reports/edit/${id}`]);  // Redirige vers la page d'édition avec l'ID du rapport
  }
}
