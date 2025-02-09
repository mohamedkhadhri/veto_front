// appointment-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Appointment } from '../models/appointment.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms'; // Nécessaire pour les formulaires réactifs
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common'; // Nécessaire pour standalone components
import { FormsModule } from '@angular/forms'; // Nécessaire pour ngModel

@Component({
  selector: 'app-appointment-dialog',
  standalone: true,  // Indiquer que c'est un composant standalone
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule  // Ajout de FormsModule pour utiliser ngModel
  ],  // Déclaration des imports nécessaires pour le composant
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.css'],
})
export class AppointmentDialogComponent {
  newAppointment: Appointment = {
    id: null,
    title: '',
    description: '',
    date: '',
  };

  constructor(
    public dialogRef: MatDialogRef<AppointmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Appointment | null
  ) {
    if (data) {
      this.newAppointment = { ...data }; // Pré-remplir le formulaire si c'est une modification
    }
  }

  onSubmit(): void {
    if (this.newAppointment.title && this.newAppointment.description && this.newAppointment.date) {
      this.dialogRef.close(this.newAppointment); // Fermer le dialogue et retourner les données
    }
  }

  onCancel(): void {
    this.dialogRef.close(); // Fermer le dialogue sans retourner de données
  }
}
