import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalReportService, MedicalReport } from '../../services/medical-report.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';  // Importer MatCardModule
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms'; // Pour les formulaires réactifs
import { CommonModule } from '@angular/common';  // Importer CommonModule pour ngIf

@Component({
  selector: 'app-medical-report-edit',
  standalone: true,  // Déclarez-le comme un composant standalone
  imports: [
    MatButtonModule,       // Pour <button mat-raised-button>
    MatFormFieldModule,    // Pour <mat-form-field>
    MatInputModule,        // Pour <input matInput>
    MatSnackBarModule,     // Pour les notifications SnackBar
    MatCardModule,         // Ajouter MatCardModule ici
    ReactiveFormsModule,   // Pour les formulaires réactifs
    CommonModule           // Ajouter CommonModule ici
  ],
  templateUrl: './medical-report-edit.component.html',
  styleUrls: ['./medical-report-edit.component.css']
})
export class MedicalReportEditComponent implements OnInit {
  reportForm: FormGroup;  // Déclarer un FormGroup pour le formulaire
  reportId!: number;

  constructor(
    public route: ActivatedRoute,   // Changer 'private' en 'public' pour rendre accessible dans le template
    public reportService: MedicalReportService,
    public router: Router          // Changer 'private' en 'public' pour rendre accessible dans le template
  ) {
    // Initialisation du formulaire réactif
    this.reportForm = new FormGroup({
      observation: new FormControl(''), // Champs observation
      medicalHistory: new FormControl('') // Champs historique médical
    });
  }

  ngOnInit(): void {
    // Récupérer l'ID du rapport depuis les paramètres d'URL
    this.route.params.subscribe(params => {
      this.reportId = +params['id']; // Convertir l'ID en nombre
      this.loadReport();  // Charger les détails du rapport
    });
  }

  loadReport(): void {
    // Charger le rapport à partir du service avec l'ID récupéré
    this.reportService.getReportById(this.reportId).subscribe(data => {
      this.reportForm.setValue({
        observation: data.observation,
        medicalHistory: data.medicalHistory
      });
    });
  }

  submitForm(): void {
    if (this.reportForm.valid) {
      const updatedReport: MedicalReport = {
        id: this.reportId,
        observation: this.reportForm.value.observation,
        medicalHistory: this.reportForm.value.medicalHistory
      };

      // Appeler le service pour mettre à jour le rapport
      this.reportService.updateReport(this.reportId, updatedReport).subscribe(() => {
        alert('Rapport mis à jour avec succès');
        this.router.navigate(['/medical-reports']);  // Rediriger vers la liste des rapports
      });
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }
}
