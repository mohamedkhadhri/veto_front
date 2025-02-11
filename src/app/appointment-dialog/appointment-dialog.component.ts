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
  standalone: true,  // Indicating that this is a standalone component
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    NgxMaterialTimepickerModule,
    FormsModule,  // Adding FormsModule for ngModel
  ],  // Import necessary modules
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.css'],
})
export class AppointmentDialogComponent {
  newAppointment: Appointment = {
    id: null,
    date: new Date(),  // Initialize with the current date and time
  };

  constructor(
    public dialogRef: MatDialogRef<AppointmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Appointment | null
  ) {
    if (data) {
      this.newAppointment = { ...data }; // Pre-fill the form if it's an edit
    }
  }

  onSubmit(): void {
    if (this.newAppointment.date) {
      this.dialogRef.close(this.newAppointment); // Close the dialog and return the data
    }
  }

  onCancel(): void {
    this.dialogRef.close(); // Close the dialog without returning data
  }
}
