import { Component } from '@angular/core';
import { MedicalReportService, MedicalReport } from '../../services/medical-report.service';
import { MatButtonModule } from '@angular/material/button';  // Importer le module nécessaire
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';  // Importer ReactiveFormsModule pour les formulaires réactifs
import { CommonModule } from '@angular/common';  // Importer CommonModule pour ngIf et ngFor

@Component({
  selector: 'app-medical-report-form',
  standalone: true,  // Déclarez-le comme un composant standalone
  imports: [
    MatButtonModule,       // Pour <button mat-raised-button>
    MatFormFieldModule,    // Pour <mat-form-field>
    MatInputModule,        // Pour <input matInput>
    MatSnackBarModule,     // Pour les notifications SnackBar
    ReactiveFormsModule,   // Pour les formulaires réactifs
    CommonModule           // Pour utiliser ngIf et ngFor dans le template
  ],
  templateUrl: './medical-report-form.component.html',
  styleUrls: ['./medical-report-form.component.css']
})
export class MedicalReportFormComponent {
  reportForm: FormGroup;  // Déclarez le FormGroup pour le formulaire réactif

  constructor(private reportService: MedicalReportService, private fb: FormBuilder) {
    // Initialisation du formulaire
    this.reportForm = this.fb.group({
      observation: ['', Validators.required],  // Le champ observation est requis
      medicalHistory: ['', Validators.required]  // Le champ medicalHistory est requis
    });
  }

  submitForm() {
    if (this.reportForm.invalid) {
      return;
    }

    const report: MedicalReport = this.reportForm.value;
    this.reportService.createReport(report).subscribe(() => {
      alert('Rapport ajouté avec succès');
      this.reportForm.reset();  // Réinitialiser le formulaire après soumission
    });
  }

  // Méthode pour vérifier les erreurs de validation d'un champ
  getErrorMessage(controlName: string) {
    const control = this.reportForm.get(controlName);
    if (control?.hasError('required')) {
      return `${controlName} est requis`;
    }
    return '';
  }
}
