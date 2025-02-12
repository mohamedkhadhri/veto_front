import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Appointment } from '../models/appointment.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms'; // Necessary for reactive forms
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common'; // Necessary for standalone components
import { FormsModule } from '@angular/forms'; // Necessary for ngModel
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker'; // Time picker module

@Component({
  selector: 'app-appointment-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    NgxMaterialTimepickerModule,
    FormsModule,
  ],
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.css'],
})
export class AppointmentDialogComponent {
  newAppointment: Appointment = {
    id: null,
    date: new Date(),  // Initialiser avec la date actuelle
    time: "",  // L'heure séparée comme chaîne
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
    if (this.newAppointment.date && this.newAppointment.time) {
      // Convertir la date et l'heure en une seule valeur si nécessaire
      const dateTime = new Date(this.newAppointment.date);
      const [hours, minutes] = this.newAppointment.time.split(':').map(Number);
      dateTime.setHours(hours, minutes);
      this.newAppointment.date = dateTime;

      this.dialogRef.close(this.newAppointment); // Fermer la boîte de dialogue et retourner les données
    }
  }

  onCancel(): void {
    this.dialogRef.close(); // Fermer sans retourner de données
  }
}
