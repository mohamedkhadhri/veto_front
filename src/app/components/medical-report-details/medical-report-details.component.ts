import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicalReportService, MedicalReport } from '../../services/medical-report.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-medical-report-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  templateUrl: './medical-report-details.component.html',
  styleUrls: ['./medical-report-details.component.css']
})
export class MedicalReportDetailsComponent implements OnInit {
  report: MedicalReport | null = null;
  reportId!: number;

  constructor(private route: ActivatedRoute, private reportService: MedicalReportService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.reportId = +params['id'];
      this.loadReport();
    });
  }

  loadReport(): void {
    this.reportService.getReportById(this.reportId).subscribe(
      data => {
        this.report = data;
      },
      error => {
        console.error('Erreur lors du chargement du rapport', error);
        this.report = null;  // En cas d'erreur, on s'assure que `report` est null.
      }
    );
  }
}
